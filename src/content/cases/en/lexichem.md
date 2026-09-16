---
project: lexichem
locale: en
outcome:
  The capstone is complete, and the LexiChem paper was announced as accepted at APWeb-WAIM 2026. The
  recorded demo shows the local product surface; there is no public live deployment or code repository.
---

## Overview

LexiChem turns a natural-language molecule description into an inspectable chemical structure. The capstone combines generation with validation, 2D/3D visualization, experiment history and supporting chemistry workflows.

This was a three-person team. I worked on AI-core data processing, SMILES/SELFIES conversion, research methods and ablations, and model/backend inference optimization. The application surface was shared team work.

## Research and product scope

The application includes Dashboard, Experiments, Simulation and Knowledge. The APWeb-WAIM paper focuses on aligning text and SELFIES representations in a shared latent space, evaluated on L+M-24, ChEBI-20 and Mol-Instructions using sequence and structure metrics.

LexiChem supports generating and exploring molecular candidates. Biological activity and synthesis feasibility require further experimental evaluation.

## My role

I developed research ideas and evaluated them through experiments and ablations. For the capstone report, I wrote the Introduction and the full Results & Discussion, and co-wrote Methods with a teammate.

On the data path, I combined Mol-Instructions, L+M-24 and ChEBI-20; used RDKit for parsing and valence checks; canonicalized SMILES; removed duplicates; and converted retained structures to SELFIES for training.

For the application layer, I connected the Experiments flow to the backend: validating intent, normalizing prompts, dispatching models through FastAPI and Triton, checking returned SMILES with RDKit, and saving run history in MongoDB. The wider product was built with the team.

## Product evidence

The screenshots below are local thesis evidence. In this capstone, RAG/Knowledge is still under development; the remaining functions can be run in practice. Values visible in the recording and screenshots are interface state, not independently validated metrics.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <img src="/media/lexichem-experiments.png" alt="Local LexiChem Experiments Workbench screenshot showing prompt comparison, a 3D molecule view and multi-model results." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Experiments Workbench · local functional test.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-dashboard.png" alt="Local LexiChem Dashboard screenshot showing run activity, validity overview and a selected molecule." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Dashboard · local functional test.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-simulation.png" alt="Local LexiChem Docking Console screenshot showing ligand, target protein and interaction sections." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Docking Console · local screenshot; affinity and interaction values are displayed state.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-knowledge.png" alt="Local LexiChem Knowledge Relay screenshot showing a chemistry question, answer and source labels." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Knowledge Relay · prototype interface; RAG/Knowledge remains under development.</figcaption>
  </figure>
</div>
