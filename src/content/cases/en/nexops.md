---
project: nexops
locale: en
outcome:
  NexOps is an active local prototype. Its factory-wide views use deterministic demo scenarios, while the Bambu Lab
  control path has been exercised on real hardware over LAN. It is not a production deployment.
---

## The problem

Machine status, production plans, alarms and downtime often live in different screens, spreadsheets or paper records. NexOps puts them in one MES/SCADA interface so operators, maintenance staff and production managers work from the same state.

## Product scope

The prototype covers machine telemetry, production planning, work orders, alarms, event history and OEE by shift. The factory views run on repeatable local scenarios. They make the workflow easy to test, but they are still simulated factory data.

## My role

I lead the AI and simulation work. My part is the simulator and the data path around it: generating repeatable machine states, sending them through MQTT, and checking that the API, storage and operator screens agree.

- Built repeatable machine and shift scenarios for integration tests.
- Connected telemetry and simulator output to storage, APIs and dashboard state.
- Prepared the data path for anomaly-detection and predictive-maintenance experiments. Those experiments are not yet validated production features.

## Working prototype

Device and simulator events pass through MQTT/EMQX, then FastAPI writes time-series state to TimescaleDB. Redis and Celery handle background work. React and ECharts provide the operator screens. Separately, an edge process has sent commands to a Bambu Lab printer over the local network.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <a href="/media/nexops-andon.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-andon.webp" alt="NexOps factory overview with machine state, current shift output and OEE cards." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Factory overview · deterministic local demo data.</figcaption>
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

## What this does not prove

NexOps is still under development. The screenshots show a controlled demo; the hardware video shows a lab trial. Neither is evidence of a factory rollout, customer result or measured predictive-maintenance accuracy.
