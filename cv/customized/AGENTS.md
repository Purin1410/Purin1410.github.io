# CV tailoring workspace

Read `WORKFLOW.md`, `TAILORING_NOTES.md` and `CV_VOICE.md` before editing a CV. This is the shared instruction set for all agents, including Codex, Gemini and Claude Code; no plugin installation is required.

## Scope

- Default target: a tailored English one-page LaTeX CV.
- Global default: use the user-approved three-project master `Nguyen-Minh-Khoa-CV-1page.tex`, synchronized with `../latex_source/Nguyen-Minh-Khoa-CV-1page.tex` on 2026-10-02. Normally change only the subtitle to `Apply for <target job title>` (for example AI Engineer or AI Researcher); add `in <company name>` when appropriate. Keep actual employment titles unchanged. Change content/keywords only when a concrete JD need justifies it and existing evidence supports it; do not rewrite Profile/projects/Skills by default.
- Base: `Nguyen-Minh-Khoa-CV-1page.tex`. Original: `../latex_source/Nguyen-Minh-Khoa-CV-1page.tex`.
- Put each application in `jobs/<company-role>/`. Copy the base to `resume.tex` there; preserve the base and the portfolio sources.
- Edit content first. Preserve the base preamble and layout unless extraction or page-fit checks demonstrate a problem, or the user requests a format change. Record any layout change.
- Do not submit applications, upload personal data to resume checkers, publish PDFs, or update portfolio downloads as part of tailoring.

- Global punctuation rule: do not use em-dashes (U+2014 or LaTeX `---`) in any tailored CV. Use commas, semicolons, parentheses or ordinary hyphens as appropriate. Check the extracted PDF text as well as the TeX source.

- Global Education rule: NEVER show GPA in the Education section for any tailored CV. The owner removed the academic-requirements/expected-conferral sentence on 2026-10-02; do not restore it by default.

- Global Layout & Typography rule: Strictly preserve the base 1-page aesthetic, comfortable line spacing (`\linespread{1.08}` to `1.105`), standard margins, and readable 10pt body font from `Nguyen-Minh-Khoa-CV-1page.tex`. Do NOT over-compress line spacing or shrink font sizes; to fill whitespace at the bottom of the page, keep comfortable line height, adjust geometry margins slightly (`top=0.90cm`, `bottom=0.40cm` in the approved master), and increase section/category spacing (`\par\vspace{2.0pt-2.4pt}`), keeping lines uncrowded and easy to read.

- Global Publications rule: Preserve the approved master’s three selected full citations in `SELECTED PUBLICATIONS` (the full CV retains all five), The owner explicitly requested the five accepted/published paper count in Research Experience and the Selected Publications heading on 2026-10-02. Keep those annotations and the three research fields; do not add another count to Profile.

- Global Folder Structure rule: All job-specific artifacts, TeX sources, logs, and compiled PDFs MUST reside exclusively inside `jobs/<company-role>/` (and its `build/` directory). Never place loose PDF/TeX files in the root `customized/` folder.

- Global User Communication rule: When delivering tailored CVs to the user, keep the final report concise and direct, focusing primarily on the compiled PDF link and key delivery status, without verbose breakdowns unless explicitly requested.

## Evidence

- The base CV is an approved starting reference, not an exhaustive career database.
- Read `EVIDENCE.md` and maintain job-specific `evidence.md`. Every added or materially changed claim needs a source locator and supporting text.
- Keep actual titles, employers, dates, authorship, publication status and contribution scope exact. Never invent months, metrics, skills, seniority, production use or ownership.
- JD requirements and external company research are context, never evidence of the candidate's abilities.
- Ask only for missing facts that materially affect the CV. Continue supported edits while waiting; omit unresolved claims from the final draft.

## Writing voice

- Write confidently about supported work: concrete personal action, delivered capability and relevant result. Use `Built`, `Developed`, `Integrated` or `Led` when supported; do not weaken confirmed contributions because the candidate is early-career or worked in a team.
- Keep audit/provenance details, agent receipts, unsupported requirements and verification caveats in the supporting Markdown. Do not put SHA-256 checks or audit status in the CV as evidence of diligence. Choose technical details for their value to the target role.
- State necessary scope once in the project label where possible, then describe the actual work directly. Keep benchmark and publication status where they affect meaning. Omit unfinished features instead of adding defensive footnotes.
- Tailor project selection, ordering and emphasis. Do not recast molecular model alignment as RAG, experiment tracking as regression testing, telemetry as AIOps, or coauthorship as model implementation without additional evidence.
- Preserve supported strengths such as Python, meaningful project metrics and engineering outcomes. Avoid self-praise, keyword chains and repetitive disclaimers. Read `CV_VOICE.md` for examples and distinctions.
- Review both factual inflation and unnecessary weakening before delivery; document this briefly in `review.md`. A technically valid PDF is not proof that its content passes either review.

## Delivery

- Global PDF filename rule: deliver `<candidate_name>_<position>_<company>.pdf`. Use `NguyenMinhKhoa` for the candidate name; concise, recognizable role/company abbreviations are allowed. Prefer ASCII, no spaces, underscores between the three parts. Example: `NguyenMinhKhoa_MiddleAIEngineerAppliedAI_Umbalabs.pdf`. Compile/extract using intermediate `build/resume.pdf` if convenient, then rename the final PDF before delivery; record its final path in `review.md`.

Follow `ATS_CHECKLIST.md`. When using an external checker report, read `JOBSCAN_NOTES.md` and separate wording fixes from genuine experience gaps. Compile twice, check exit status/log, exactly one page, extracted PDF text and rendered layout. A nonempty PDF alone is not success.
Deliver `resume.tex`, compiled PDF, `resume.txt`, `analysis.md`, `evidence.md`, `change_log.md` and `review.md` per job. User review is the final acceptance step; no automatic submission.
For multi-part work, append progress to this folder's `CHECKPOINT.md`.
