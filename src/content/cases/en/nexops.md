---
project: nexops
locale: en
outcome:
  NexOps operates as an active local prototype with repeatable shop-floor scenarios for demonstration and evaluation.
---

## The problem

On many factory floors, machine telemetry, production schedules, alarms, and downtime logs are scattered across separate screens, spreadsheets, and paper notes. NexOps brings these into a single local MES/SCADA interface for operators, maintenance engineers, and plant managers.

## What it covers

The prototype brings together live machine telemetry, work-order scheduling, alarm routing, and shift OEE. Deterministic simulation scenarios let us replay standardized shifts to verify telemetry ingestion, alarms, and OEE calculations.

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

NexOps is an active working prototype built for investor demonstrations and technical evaluation. As AI, Simulation & Platform Lead, I lead the software architecture, simulation engine, and integration adapters, while coordinating MQTT/EMQX messaging with our IoT hardware teammate.

- Designed and implemented deterministic machine and shift simulations to verify production schedules, alarms, and OEE calculations.
- Built the backend data pipeline ingesting MQTT/EMQX events through FastAPI into TimescaleDB and streaming live state to dashboards.
- Developed the local network adapter for a Bambu Lab 3D printer, demonstrating local device control in a recorded trial.

## Working prototype

Telemetry from devices and simulators streams over MQTT through EMQX. FastAPI saves time-series data into TimescaleDB, while React, Apache ECharts, and PixiJS render shift schedules, andon boards, alarms, and OEE reports. The Bambu Lab integration shows local hardware control working alongside the simulation runtime.

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
