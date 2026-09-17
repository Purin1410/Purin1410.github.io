---
project: nexops
locale: en
outcome:
  NexOps runs locally with repeatable factory scenarios for the production workflow.
---

## The problem

Machine status, production plans, alarms and downtime often sit in different screens, spreadsheets or paper records. NexOps brings them into one MES/SCADA interface for operators, maintenance staff and production managers.

## What it covers

The prototype covers machine telemetry, production planning, work orders, alarms, event history and OEE by shift. Repeatable local scenarios let me run the same workflow again and compare the resulting telemetry, alarms and OEE.

<section class="case-section nexops-flow">
  <h2>How it works</h2>
  <ol class="flow">
    <li><span class="step-index">01</span><span>Device or deterministic simulator</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">02</span><span>MQTT messaging through EMQX</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">03</span><span>FastAPI services and TimescaleDB</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">04</span><span>Dashboards, alarms and OEE</span></li>
  </ol>
</section>

## My role

I lead the AI, simulation and platform work. I built the simulator, the factory scenarios around it, and the telemetry path that carries those scenarios into the operator views.

- Built repeatable machine and shift scenarios for planning, alarms and OEE to run as one workflow.
- Designed the path from simulator and edge events through MQTT/EMQX into FastAPI, TimescaleDB and dashboard state.
- Implemented the local Bambu Lab control integration used in the hardware trial.

## Working prototype

Simulator and device events travel through MQTT/EMQX. FastAPI stores the time-series state in TimescaleDB; React, ECharts and PixiJS turn it into the planning, alarm, OEE and factory-floor screens. The Bambu Lab LAN path is one hardware integration inside that local runtime.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <a href="/media/nexops-andon.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-andon.webp" alt="NexOps factory overview with machine state, current shift output and OEE cards." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Factory overview from a repeatable local scenario.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-planning.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-planning.webp" alt="NexOps production planning screen with scheduling, validity and execution states." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Production planning and scheduling workflow.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-machine-hub.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-machine-hub.webp" alt="NexOps Machine Hub showing CNC telemetry, work-order context and read-only safety status." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Machine Hub · telemetry and operating context in the control-room view.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-oee.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-oee.webp" alt="NexOps OEE report showing availability, performance, quality and a seven-day trend." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Shift OEE breakdown and seven-day trend.</figcaption>
  </figure>
</div>
