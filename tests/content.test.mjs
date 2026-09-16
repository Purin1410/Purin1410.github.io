import test from "node:test";
import assert from "node:assert/strict";
import {
  validPrecisionDate,
  newsSchema,
  projectSchema,
  publicationSchema,
  validateRegistry,
  sortNews,
} from "../src/lib/content-schema.mjs";
import { copyCitation } from "../src/lib/copy.mjs";

test("dates reject impossible days and retain declared precision", () => {
  for (const [date, precision, expected] of [
    ["2024-02-29", "day", true],
    ["2025-02-29", "day", false],
    ["2026-04-31", "day", false],
    ["2026-13", "month", false],
    ["2026-06", "month", true],
    ["2026", "year", true],
    ["2026-06-01", "month", false],
  ])
    assert.equal(validPrecisionDate(date, precision), expected);
});
test("news sorts newest first without changing caller input", () => {
  const rows = [
    { slug: "old", date: "2025-01-01" },
    { slug: "new", date: "2026-06-23" },
    { slug: "middle", date: "2026-04-05" },
  ];
  assert.deepEqual(
    sortNews(rows).map((n) => n.slug),
    ["new", "middle", "old"],
  );
  assert.equal(rows[0].slug, "old");
  assert.deepEqual(sortNews([]), []);
});
const projects = [{ slug: "project", publications: ["paper"] }];
const papers = [{ slug: "paper", project: "project" }];
const cases = [
  { project: "project", locale: "en" },
  { project: "project", locale: "vi" },
];
test("registry requires both locales and rejects duplicate cases and slugs", () => {
  assert.doesNotThrow(() => validateRegistry(projects, papers, [], cases));
  assert.throws(
    () => validateRegistry(projects, papers, [], cases.slice(0, 1)),
    /Missing vi case/,
  );
  assert.throws(
    () => validateRegistry(projects, papers, [], [...cases, cases[0]]),
    /Duplicate case/,
  );
  assert.throws(
    () => validateRegistry([...projects, ...projects], papers, [], cases),
    /Duplicate project/,
  );
  assert.throws(
    () => validateRegistry(projects, [...papers, ...papers], [], cases),
    /Duplicate publication/,
  );
});
test("registry rejects broken project, paper, case and news references", () => {
  assert.throws(
    () =>
      validateRegistry(
        [{ slug: "project", publications: ["missing"] }],
        papers,
        [],
        cases,
      ),
    /Unknown publication/,
  );
  assert.throws(
    () =>
      validateRegistry(
        projects,
        [{ slug: "paper", project: "missing" }],
        [],
        cases,
      ),
    /Unknown project/,
  );
  assert.throws(
    () =>
      validateRegistry(
        projects,
        papers,
        [{ slug: "update", publications: ["missing"] }],
        cases,
      ),
    /Unknown news publication/,
  );
  assert.throws(
    () =>
      validateRegistry(
        projects,
        papers,
        [],
        [{ project: "missing", locale: "en" }],
      ),
    /Unknown case project/,
  );
});
test("content rejects missing translations and unsafe links", () => {
  const news = {
    slug: "update",
    date: "2026-06-23",
    precision: "day",
    text: { en: "Update", vi: "Cập nhật" },
    source: "https://example.com",
    event: "announcement",
  };
  assert.equal(newsSchema.safeParse(news).success, true);
  assert.equal(
    newsSchema.safeParse({ ...news, text: { en: "Update" } }).success,
    false,
  );
  assert.equal(
    newsSchema.safeParse({ ...news, source: "javascript:alert(1)" }).success,
    false,
  );
  assert.equal(projectSchema.safeParse({ slug: "bad" }).success, false);
  assert.equal(
    publicationSchema.safeParse({ slug: "bad", kind: "preprint" }).success,
    false,
  );
});
test("clipboard reports success and graceful failure", async () => {
  let copied = "";
  assert.equal(
    await copyCitation("@article{sample}", {
      writeText: async (text) => {
        copied = text;
      },
    }),
    true,
  );
  assert.equal(copied, "@article{sample}");
  assert.equal(await copyCitation("text", undefined), false);
  assert.equal(
    await copyCitation("text", {
      writeText: async () => {
        throw new Error("denied");
      },
    }),
    false,
  );
  assert.equal(
    await copyCitation("", {
      writeText: async () => {
        throw new Error("must not call");
      },
    }),
    false,
  );
});
