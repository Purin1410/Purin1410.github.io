---
project: research-ops
locale: en
outcome:
  Research Ops is a local pre-alpha workspace for keeping sources, evidence, work sessions, decisions and manuscript
  revisions connected. It is still under development; model execution and GPU evaluation remain unfinished.
---

## What it is

Research Ops is a system I am building so AI agents can support research continuously, even when I am away from the computer, without turning the process into a black box. It keeps questions, hypotheses, runs, evidence and decisions in a durable record, so the work can continue across interrupted experiments, ended sessions and changes in AI tools. AI handles execution and brings decisions back for review; research direction and scientific conclusions remain under human control.

## Why I am building it

Research work tends to spread across PDFs, browser tabs, notebooks, chats and experiment folders. Reconstructing that context takes time and makes decisions harder to audit. Research Ops treats the context itself as part of the research record, while leaving approval and interpretation to the researcher.

## What works locally

The current build includes a research library, PDF and citation handling, work sessions, evidence links, exports and resumable study state. PostgreSQL stores the state; FastAPI serves the application; browser updates stream through SSE.

Source files are stored by SHA-256 digest, cited spans stay tied to that digest, and manuscript exports pin the revision they came from. In a local check, the system imported an 18-page PDF, verified one evidence span, then exported and compiled a manuscript artifact pinned to revision 2.

Runtime changes also need a pinned bundle, a matching revision, budget, reservation and human approval. The latest GPU receipt is still `MANUAL_ACTION_REQUIRED`; it contains no training result.

The local acceptance record has 299 tests with 4 skips. Frontend and API checks add 40 tests across 9 files. These figures describe local software coverage, not research quality or productivity.

## Limits

Research Ops is a personal pre-alpha project. It has no public deployment and no measured long-term benefit yet. The next useful test is to repeat a full research cycle with real sources while retaining its revisions, human decisions and outputs.
