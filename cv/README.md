# CV sources

The active sources are `latex_source/Nguyen-Minh-Khoa-CV-1page.tex` and
`latex_source/Nguyen-Minh-Khoa-CV-full-project.tex`. They preserve the original
pdfLaTeX / Latin Modern layout. Edit their text directly and keep the preamble,
margins, section styles and spacing unchanged. `content.json` remains a factual
reference; it does not control the PDF layout.

## Rebuild

Install pdfLaTeX (with `lmodern`, `enumitem`, `titlesec`, `tabularx`, `microtype`,
`hyperref` and `needspace`) and the Python dependencies in
`scripts/requirements-cv.txt`, then:

```sh
python scripts/build-cv.py
```

The builder compiles both LaTeX sources twice, checks the original Letter size,
exactly one and three pages, layout overflow, required text and exclusions. It
validates both PDFs before copying them into `output/pdf/`, `public/cv.pdf` and
`public/cv-full.pdf`. Render every page with `pdftoppm` and inspect after editing.
Do not replace the original layout with a ReportLab template.

## Editorial record, 17 September 2026

- User confirmed name, degree title, academic completion, expected November 2026
  conferral, AiTA dates and permission to use the portfolio as the factual source.
- General portfolio download, not a job-specific application. One-column Harvard-inspired
  serif layout with navy accents. No GPA in the one-page version.
- No open-source contributions, upcoming Olympic AI TA appointment or PSRB submission.
- AIO / AI VIET NAM and its four modules lead the certificate section in both versions,
  per user follow-up; retain this priority in future edits.
- TrendRadar is the project behind both 2025 team award/funding amounts. Innovation
  Quest's VND 40M includes its VND 10M team reward; do not add them together.
- Five accepted/published papers. Local HMER PDFs confirm the method descriptions;
  distinguish ICDAR 2025 from the Mask CoMER proceedings publication year (2026).
- One-page Selected Publications prioritizes LexiChem, Mask CoMER and the MTL + CBARM
  journal article; ChemAligner-T5 remains in the full publication list.
- Author roles follow the user-approved portfolio. Do not infer individual ownership
  of an entire paper method from coauthorship or add unsupported performance claims.
- Certificate types are course/specialization/professional certificate credentials;
  AWS Cloud Technical Essentials is not an AWS certification exam.
- Research Ops remains pre-alpha; NexOps is a local prototype. No production adoption
  or business-impact claims have been added.

Writing guidance: `career-ops-poferraz/references/resume.md` and
`career-ops-santifer/modes/pdf.md` in the sibling repositories, adapted to the user's
explicit request for a general CV and an extended project/publication version.

## Achievement-focused editing

The opening description is an explicit exception: use the four English About
paragraphs from `src/data/profile.ts` verbatim, in first person, per user request.
Do not replace this personal introduction with an achievement summary.

Apply Poferraz's achievement reframing and anti-slop checks alongside Santifer's
`modes/heuristics/recruiter-side.md`: lead with personal action, name the delivered
capability or publication, and connect the technical work to what it enabled.
Avoid general duty statements and method summaries where personal contributions
are known. Keep prototype/pre-alpha scope in the project label; omit unfinished
features that the CV does not claim to deliver. Preserve exact coauthorship scope.
Never turn a team award into an individual award, invent performance improvements,
or claim industrial deployment. This is a general portfolio CV, so no JD keyword
matching or unsupported business-impact figures are appropriate.

## Owner-confirmed refresh, 30 September 2026

Issues #7–#9 override earlier editorial facts: no public GPA or Research Ops; Mask CoMER co-author; CorrTie published; LexiChem accepted/presented pending publication. ORCID added. NexOps active investment/demo prototype with application-side ownership and IoT coordination. ChemAligner uses Springer abstract absolute L+M-24 metrics; unverified historical deltas omitted. Legacy LaTeX exports archived outside public assets.

Metric sources checked for this refresh:
- Mask CoMER: https://link.springer.com/chapter/10.1007/978-3-032-04624-6_22 (abstract supports up to +5 over CoMER).
- ChemAligner-T5: https://link.springer.com/chapter/10.1007/978-3-032-21625-0_16 (abstract reports BLEU 69.77% and Levenshtein distance 31.28% on L+M-24; exact BioT5+ deltas not verified).
- CorrTie DOI and publication state follow owner-confirmed issue #8; publisher fetch was unavailable during this refresh.

Editorial update: Gemini Flash 3.7 High revised public EN/VI copy in an isolated worktree; Codex reviewed factual logic and corrected semantic inflation before integration. CV opening paragraphs remain identical to the website. Both regenerated PDFs retain their 1/3-page layouts.

## Original format restored, 30 September 2026

The owner requested restoration of the original CV format with only necessary
factual corrections. This supersedes the four-paragraph website introduction
requirement for these PDFs: retain the original compact profile and original
sections, font, colors, margins and spacing. The original source recompilation
matched the old one-page PDF pixel-for-pixel before text edits. Corrected stale
MTL/ChemAligner metrics, publication roles/statuses and NexOps scope; removed
Research Ops. Existing capstone metrics stay explicitly scoped to ChEBI-20
experiments, separately from the LexiChem paper evaluated on L+M-24.
