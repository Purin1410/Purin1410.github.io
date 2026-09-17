# CV sources

`content.json` is the shared, editable English content for the one-page and full CV.
Certificates and verification links come from `src/data/credentials.mjs`.

## Rebuild

Create a Python virtual environment and install `scripts/requirements-cv.txt`, then:

```sh
python scripts/build-cv.py
```

Requires Node.js and the Liberation Serif TTF family. Set `CV_FONT_DIR` if fonts are
not in `/usr/share/fonts/truetype/liberation`.

The builder requires exactly one and three pages, checks key text and exclusions,
and only then copies outputs to `public/cv.pdf` and `public/cv-full.pdf`.
Named deliverables are also stored in `output/pdf/`. Render every page with
`pdftoppm` after changes and check for clipping, bad breaks and tiny text.
The original public CV is preserved once in `cv/archive/`.

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
