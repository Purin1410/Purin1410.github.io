import { getCollection, type CollectionEntry } from "astro:content";
import { validateRegistry, sortNews } from "./content-schema.mjs";
export type Lang = "en" | "vi";
export type Localized = { en: string; vi: string };
export const t = (value: Localized, lang: Lang) => value[lang];
export const words = (lang: Lang, en: string, vi: string) =>
  lang === "en" ? en : vi;
export const pathFor = (path: string, lang: Lang) =>
  `${lang === "vi" ? "/vi" : ""}${path}`;
export const otherPath = (path: string, lang: Lang) =>
  lang === "en" ? `/vi${path}` : path.replace(/^\/vi(?=\/)/, "");
export const workPath = (slug: string, lang: Lang) =>
  pathFor(`/work/${slug}/`, lang);
export function newsDate(
  date: string,
  precision: "day" | "month" | "year",
  lang: Lang,
) {
  if (precision === "year") return date;
  const full = date.length === 7 ? `${date}-01` : date;
  return new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-GB", {
    year: "numeric",
    month: "short",
    ...(precision === "day" ? { day: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(`${full}T00:00:00Z`));
}
export async function registry() {
  const [projects, papers, news, cases] = await Promise.all([
    getCollection("projects"),
    getCollection("publications"),
    getCollection("news"),
    getCollection("cases"),
  ]);
  validateRegistry(
    projects.map((p) => p.data),
    papers.map((p) => p.data),
    news.map((n) => n.data),
    cases.map((c) => c.data),
  );
  return {
    projects: projects.sort((a, b) => a.data.order - b.data.order),
    papers: papers.sort(
      (a, b) => b.data.year - a.data.year || a.data.order - b.data.order,
    ),
    news: sortNews(
      news.map((n) => n.data),
    ) as CollectionEntry<"news">["data"][],
    cases,
  };
}
