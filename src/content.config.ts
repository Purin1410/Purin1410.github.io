import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  projectSchema,
  publicationSchema,
  newsSchema,
  caseSchema,
} from "./lib/content-schema.mjs";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "./src/content/projects" }),
    schema: projectSchema,
  }),
  publications: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "./src/content/publications" }),
    schema: publicationSchema,
  }),
  news: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "./src/content/news" }),
    schema: newsSchema,
  }),
  cases: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
    schema: caseSchema,
  }),
};
