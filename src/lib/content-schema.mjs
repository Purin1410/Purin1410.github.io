import { z } from "astro/zod";

export const localized = z.object({
  en: z.string().trim().min(1),
  vi: z.string().trim().min(1),
});
const localizedList = z.object({
  en: z.array(z.string().min(1)),
  vi: z.array(z.string().min(1)),
});
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const external = z
  .string()
  .url()
  .refine((v) => new URL(v).protocol === "https:", "Use a verified HTTPS URL");
const asset = z
  .string()
  .regex(/^\/media\/[a-zA-Z0-9_./-]+$/)
  .refine((v) => !v.includes(".."), "Invalid media path");
export const mediaSchema = z.object({
  src: asset,
  alt: localized,
  caption: localized,
  type: z.enum(["image", "video"]),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  poster: asset.optional(),
});
export const publicationSchema = z.object({
  slug,
  title: z.string().min(1),
  shortTitle: z.string().optional(),
  kind: z.enum(["conference", "journal"]),
  venue: z.string().min(1),
  venueShort: z.string().min(1),
  year: z.number().int().min(1900).max(2100),
  status: z.enum(["published", "accepted", "submitted", "under-review"]),
  authors: z
    .array(z.object({ name: z.string().min(1), self: z.boolean() }))
    .min(1)
    .refine(
      (a) => a.filter((x) => x.self).length === 1,
      "Mark exactly one portfolio author",
    ),
  role: localized,
  result: localized,
  order: z.number().int(),
  featuredOrder: z.number().nullable().optional(),
  project: slug.nullable().optional(),
  source: external,
  abstractExcerpt: z.string().optional(),
  bibtex: z.string().optional(),
  thumbnail: mediaSchema.optional(),
  tags: z.array(z.string()).default([]),
  links: z
    .object({
      pdf: external.optional(),
      arxiv: external.optional(),
      doi: external.optional(),
      code: external.optional(),
    })
    .default({}),
});
export const projectSchema = z.object({
  slug,
  title: z.string().min(1),
  tagline: localized,
  role: localized,
  period: z.string().min(1),
  status: localized,
  summary: localized,
  highlights: localizedList,
  stack: z.array(z.string()).default([]),
  kind: z.enum(["engineering", "research"]),
  publications: z.array(slug),
  flow: localizedList,
  featured: z.boolean(),
  order: z.number().int(),
  media: mediaSchema.optional(),
  video: mediaSchema.optional(),
  links: z
    .object({
      demo: external.optional(),
      code: external.optional(),
      paper: external.optional(),
    })
    .default({}),
});
export function validPrecisionDate(date, precision) {
  const patterns = {
    day: /^\d{4}-\d{2}-\d{2}$/,
    month: /^\d{4}-\d{2}$/,
    year: /^\d{4}$/,
  };
  if (!patterns[precision]?.test(date)) return false;
  const full =
    precision === "year"
      ? `${date}-01-01`
      : precision === "month"
        ? `${date}-01`
        : date;
  const parsed = new Date(`${full}T00:00:00Z`);
  return (
    Number.isFinite(parsed.valueOf()) &&
    parsed.toISOString().slice(0, 10) === full
  );
}
export const newsSchema = z
  .object({
    slug,
    date: z.string(),
    precision: z.enum(["day", "month", "year"]),
    text: localized,
    source: external,
    event: z.enum(["announcement", "publication", "release", "milestone"]),
    publications: z.array(slug).default([]),
  })
  .refine(
    (n) => validPrecisionDate(n.date, n.precision),
    "Invalid news date or precision",
  );
export const caseSchema = z.object({
  project: slug,
  locale: z.enum(["en", "vi"]),
  outcome: z.string().min(1),
});

export function validateRegistry(projects, publications, news, cases) {
  const ids = (records, name) => {
    const result = new Set();
    for (const row of records) {
      if (result.has(row.slug))
        throw new Error(`Duplicate ${name} slug: ${row.slug}`);
      result.add(row.slug);
    }
    return result;
  };
  const workIds = ids(projects, "project"),
    paperIds = ids(publications, "publication");
  ids(news, "news");
  const caseIds = new Set();
  for (const c of cases) {
    const key = `${c.project}:${c.locale}`;
    if (caseIds.has(key)) throw new Error(`Duplicate case: ${key}`);
    if (!workIds.has(c.project))
      throw new Error(`Unknown case project: ${c.project}`);
    caseIds.add(key);
  }
  for (const p of projects) {
    for (const locale of ["en", "vi"])
      if (!caseIds.has(`${p.slug}:${locale}`))
        throw new Error(`Missing ${locale} case: ${p.slug}`);
    for (const id of p.publications)
      if (!paperIds.has(id)) throw new Error(`Unknown publication: ${id}`);
  }
  for (const p of publications)
    if (p.project && !workIds.has(p.project))
      throw new Error(`Unknown project: ${p.project}`);
  for (const n of news)
    for (const id of n.publications)
      if (!paperIds.has(id)) throw new Error(`Unknown news publication: ${id}`);
}
export function sortNews(items) {
  return [...items].sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
  );
}
