---
project: research-ops
locale: en
outcome:
  Research Ops is a local pre-alpha workspace for keeping sources, evidence, work sessions, decisions and manuscript
  revisions connected. It is still under development; model execution and GPU evaluation remain unfinished.
---

## What it is

Research Ops is a pre-alpha workspace designed to reduce the attention required to keep trustworthy research moving. It keeps questions, hypotheses, runs, evidence, checkpoints and decisions in a durable record, so interrupted experiments and ended sessions do not erase their context. Agents take on bounded execution and return decisions for review; the researcher retains control of direction, approval, interpretation and scientific conclusions.

## Why I am building it

Research work tends to spread across PDFs, browser tabs, notebooks, chats and experiment folders. Reconstructing that context takes time and makes decisions harder to audit. Research Ops treats the context itself as part of the research record, while leaving approval and interpretation to the researcher.

## What works locally

The current build includes a research library, PDF and citation handling, work sessions, evidence links, exports and resumable study state. PostgreSQL stores the state; FastAPI serves the application; browser updates stream through SSE.

Source files are stored by SHA-256 digest, cited spans stay tied to that digest, and manuscript exports pin the revision they came from. In a local check, the system imported an 18-page PDF, verified one evidence span, then exported and compiled a manuscript artifact pinned to revision 2.

Runtime changes also need a pinned bundle, a matching revision, budget, reservation and human approval. The latest GPU receipt is still `MANUAL_ACTION_REQUIRED`; it contains no training result.

## Limits

Research Ops is a personal pre-alpha project. It has no public deployment and no measured long-term benefit yet. The next useful test is to repeat a full research cycle with real sources while retaining its revisions, human decisions and outputs.
