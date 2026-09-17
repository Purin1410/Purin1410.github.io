---
project: lexichem
locale: en
outcome:
  The capstone is complete, and the LexiChem paper was announced as accepted at APWeb-WAIM 2026. The
  recorded demo shows the locally running product; there is no public deployment or code repository.
---

## Overview

LexiChem turns a natural-language molecule description into a structure that can be viewed, checked and explored further. Rather than stopping at a model demo, the team built the full flow into an application: enter a brief, generate candidates, validate structures, compare results and revisit earlier experiments.

We were a team of three. I focused on the AI data pipeline, SMILES/SELFIES conversion, method development, ablations and the inference path between the model and backend. The interface and product workflows were shared across the team.

<section class="case-section lexichem-flow">
  <h2>How it works</h2>
  <ol class="flow">
    <li><span class="step-index">01</span><span>Description</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">02</span><span>Model inference</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">03</span><span>Molecular structure</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">04</span><span>2D / 3D exploration</span></li>
  </ol>
  <figure class="case-evidence">
    <a href="/media/lexichem-design-workflow.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the molecule design illustration at full size">
      <img src="/media/lexichem-design-workflow.webp" width="2752" height="1536" loading="lazy" decoding="async" alt="A scientist describes desired properties; AI generates molecular candidates, which are screened before laboratory synthesis and testing." />
    </a>
    <figcaption>LexiChem handles generation and computational exploration. Laboratory synthesis and testing come next, outside the application. Select the image to enlarge.</figcaption>
  </figure>
</section>

## From research to product

The application has four areas: Dashboard, Experiments, Simulation and Knowledge. The APWeb-WAIM paper goes deeper on one part of that system: aligning text and SELFIES representations in a shared latent space. We evaluated the method on L+M-24, ChEBI-20 and Mol-Instructions with both sequence and structure metrics.

LexiChem supports early, computational exploration of molecular candidates. Biological activity and synthesis feasibility still need experimental validation.

## What I built

On the research side, I developed method ideas and tested them through experiments and ablations. I wrote the Introduction and the full Results & Discussion, and co-wrote Methods with a teammate.

For the data pipeline, I combined Mol-Instructions, L+M-24 and ChEBI-20; used RDKit to parse structures, check valence and canonicalize SMILES; removed duplicates; then converted the remaining structures to SELFIES for training.

On the product side, I connected Experiments to the backend. The flow validates intent, normalizes the prompt, calls models through FastAPI and Triton, checks returned SMILES with RDKit and saves each run to MongoDB. The rest of the application was built with the team.

## The product in use

The screenshots and video below come from the locally running capstone build. Dashboard, Experiments and Simulation work; RAG/Knowledge remains in development. Numbers visible in the screenshots capture the demo state, not independent benchmark results.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <img src="/media/lexichem-experiments.png" alt="Local LexiChem Experiments Workbench screenshot showing prompt comparison, a 3D molecule view and multi-model results." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Experiments Workbench · comparing prompts and results across models.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-dashboard.png" alt="Local LexiChem Dashboard screenshot showing run activity, validity overview and a selected molecule." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Dashboard · run history and the currently selected molecule.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-simulation.png" alt="Local LexiChem Docking Console screenshot showing ligand, target protein and interaction sections." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Docking Console · exploring a ligand, target protein and their interactions.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-knowledge.png" alt="Local LexiChem Knowledge Relay screenshot showing a chemistry question, answer and source labels." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Knowledge Relay · prototype interface for the RAG/Knowledge area in development.</figcaption>
  </figure>
</div>
