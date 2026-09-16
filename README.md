# Khoa Nguyen — professional portfolio

An Astro static portfolio for AI engineering roles and research opportunities. English is the default; Vietnamese lives under `/vi/`. The public site is deployed to `https://purin1410.github.io` through GitHub Actions.

## Run locally

Requires Node 22 and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 4323
```

For the production build:

```sh
pnpm check
pnpm test
pnpm build
pnpm verify
pnpm preview --host 127.0.0.1 --port 4323
```

The production build uses absolute canonical, alternate-language and Open Graph URLs. Public indexing is enabled. No analytics or backend is included.

## Update content

Recognition, earlier activities, contributions and Gallery are maintained in `src/data/extras.ts`. Credentials are in `src/data/credentials.mjs`. AiTA and the explicitly upcoming TA schedule are in `src/components/Experience.astro`; update the schedule only after user confirmation, not automatically by date.

For each Gallery group, add real images to `photos` with local path, dimensions, bilingual alt/caption and optional crop position. Gallery contains six approved APWeb, capstone and ICDAR photos; APWeb conference videos are not embedded.

Awards use year-level dates where months are uncertain. Participation without an award and the 2021 mathematics medal live in a compact disclosure below the main awards. Hover/focus previews can be pinned by clicking or tapping; Escape or an outside click closes them. The existing downloadable CV is unchanged.

| Content           | Location                                          | Instructions                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profile and links | `src/data/profile.ts`                             | Update both `en` and `vi` fields. Background text is in `src/components/HomePage.astro`.                                                                                                                                                                             |
| Projects          | `src/content/projects/*.yaml`                     | Use a unique stable `slug`. `order` controls display order; `featured` selects homepage projects. `publications` contains existing publication slugs.                                                                                                                |
| Case studies      | `src/content/cases/en/*.md`, `vi/*.md`            | Every project needs both locales. Frontmatter must include `project`, `locale` and translated `outcome`; the body is Markdown.                                                                                                                                       |
| Publications      | `src/content/publications/*.yaml`                 | Preserve verified full title and author order. Mark exactly one author `self: true`. Keep `kind` (`conference`/`journal`) separate from `status`. `featuredOrder` selects and orders homepage publications.                                                          |
| News              | `src/content/news/*.yaml`                         | Use a real event date with `precision: day`, `month` or `year`, matching `YYYY-MM-DD`, `YYYY-MM` or `YYYY`. Add source URL, event kind and both translations. Newest three display first; older records expand inline. No records means no News section or nav item. |
| Media             | `public/media/` + project YAML                    | Add actual project media with translated alt text and caption, correct width/height and `type: image` or `video`. Use a local `/media/...` path. Video can include a `poster`. Images open at full size on case pages.                                               |
| Demo / source     | Project `links.demo`, `links.code`, `links.paper` | Use working HTTPS URLs. Omit unavailable fields; no placeholder controls are rendered.                                                                                                                                                                               |
| CV / portrait     | `public/cv.pdf`, `public/khoa.jpg`                | These appear automatically on rebuild only when the files exist.                                                                                                                                                                                                     |

LexiChem's stack is grouped by Frontend, Backend & API, ML & inference, Data & knowledge, Chemistry & scientific, Visualization and Infrastructure & runtime. Brand marks that have a maintained Simple Icons entry are vendored as local SVGs under `public/media/tech/`; protocols and specialist chemistry tools retain a neutral text fallback when no official mark is available.

Optional publication fields: `abstractExcerpt` (short sourced excerpt), `bibtex`, `thumbnail` (same media shape), and real `links.pdf`, `arxiv`, `doi`, `code`. Omit unavailable data. Disclosures appear only when content exists. Clipboard failure leaves the citation selectable and announces a manual-copy fallback.

Data validation lives in `src/lib/content-schema.mjs`; build verification checks generated routes, internal anchors/assets and key display order. Internal planning and source-audit notes are intentionally excluded from the public repository.

## Content provenance and current gaps

Research Ops remains a personal, unfinished project and is intentionally presented without project imagery. LexiChem has a 1:47 recorded product demo and thesis screenshots: RAG/Knowledge remains under development, while the other functions can be run in practice. Screenshot values are not independently validated scientific results. No live deployment or replacement source repository is implied.

## Photos and certifications

The approved portrait is at `public/khoa.jpg`; the sidebar displays it directly below the name on desktop and mobile.

Six credentials are featured: AIO 2024 (four expandable modules) plus five selected Coursera credentials. Thirteen more Coursera credentials are grouped inside a disclosure. Edit exact titles, issuers, dates, verification URLs and `featured` in `src/data/credentials.mjs`; update the count assertions if intentionally changing the collection.

`node scripts/prepare-portfolio-assets.mjs` regenerates approved derivatives using Sharp, Poppler (`pdftoppm`) and FFmpeg. It uses an explicit source allowlist, strips image metadata, renders certificate PDFs to WebP and converts the approved demo to H.264 MP4 without audio. Originals are not modified. The video is loaded only on demand (`preload="none"`).

Do not publish the raw `PORTFOLIO/` directory, ZIP, invitation emails or private screenshots. They are ignored for future Git use; only reviewed derivatives in `public/` enter the static build. Ignoring does not untrack files already committed: check repository status before first publication. Event photos may show teammates without Khoa; captions explicitly distinguish these from personal attendance.
