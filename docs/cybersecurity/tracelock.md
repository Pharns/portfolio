# TraceLock™ — Evidence-First RF/SDR Telemetry

**TL;DR:** Multi-sensor RF/wireless telemetry (Kismet, rtl_433, ADS-B) with AI-assisted parsing and evidence logging. Demonstrates RF security specialization, detection engineering, hardening, and compliance-minded logging for high-signal roles.

## Scenario (capstone-safe)
- **Client context:** Centurion Shield Response (CSR), 230-person protective services firm (EOD sweeps + executive protection).
- **Problem:** 12–18 minute RF gaps during EOD cordon sweeps; EP teams lack a unified view of BLE/Wi-Fi/SDR/ISM/ADS-B emitters to spot rogue trackers or aerial threats.
- **Goal:** TraceLock™ Rapid Response Kit that detects trigger signals in real time, maintains an allowlist, and cuts on-scene triage time by 50–70%.

## Design goals and current state (public-safe)
- Multi-domain coverage: Wi-Fi, BLE, rtl_433 ISM, ADS-B (toggle-mode stable), GPS correlation.
- Unified RF analyzer: mode-aware dispatcher for Wi‑Fi/ISM/Meshtastic with Markdown/JSON reports and KML visualizations.
- Persistence detection: temporal + location correlation, probe analysis, and configurable thresholds.
- Secure plumbing: parameterized DB access, encrypted credentials, validated ignore lists, input validation, and audit logging.
- CI/quality: minimal GitHub Actions workflow (deps, compileall, smoke tests on key entrypoints).
- Evidence outputs: structured logs, reports, KML maps with redaction; “safe share” export planned.

## Problem → Action → Result
- **Problem:** RF/GPS/SDR environments lacked auditable detection and evidence pipelines for review and forensics.
- **Action:** Built telemetry pipeline for BLE/Wi-Fi/ADS-B/GPS/rtl_433, normalized logs with AI-assisted parsers, added IAM-like mode toggles, and authored detections with tuning.
- **Result:** Evidence-grade log schema, reduced parsing errors/FPs, stable toggle-mode operation across sensors, and repeatable audit/export workflow suitable for compliance narratives.

## Architecture (public-safe)
- **Sensors:** Kismet, rtl_433, ADS-B feed (read-only), GPS.
- **Ingest/Parsing:** Normalizers with AI-assisted pattern extraction; mode toggles for role-aware collection.
- **Storage/Export:** Structured log store with retention; export path for evidence review.
- **Alerting/Detection:** Rules for rogue SSID/BSSID patterns, unexpected ADS-B beacons, and anomalous BLE device classes.
- **Visualization:** Dashboards for counts, locations (where safe), and trend anomalies.

## Control & detection mapping
- **Access / modes:** Mode toggles emulate RBAC for capture profiles.
- **Logging & integrity:** Structured schema, checksum/export workflow for evidence.
- **Detections:** Rogue APs, unusual BLE device classes, noisy beacon rates, unexpected ADS-B messages.
- **Framework alignment:** NIST CSF (PR.AC, PR.DS, DE.CM); CIS logging emphasis for telemetry sources.

## Hardware/software scope (rapid response kit)
- Pelican-cased unit: Raspberry Pi 4B, dual SDRs, dual-band Wi-Fi, Bluetooth 5, GPS/LTE modem, Ubertooth, optional battery.
- Mode-aware software: `main_logic.py`, `surveillance_analyzer.py`, `tracelock_gui.py`; custom classifiers for RCIED signatures; allowlist; MQTT/KML exports to C2/SOC.
- Watchdogs to auto-launch services; KML/MQTT for mobile C2; sprint demos showing end-to-end collection, alerting, and allowlist remediation.

## Security and hardening
- Parameterized SQL and validated inputs; encrypted credential storage.
- Secure ignore-list loading (data files, no code exec).
- Mode controller for capture profiles (e.g., lab/demo/field) to avoid over-collection.
- Plans: run under dedicated system user, log rotation, and “safe share” export with redaction.

## Quality and CI
- Minimal CI pipeline: dependency install, Python compileall, smoke tests (`tracelock.py`, `surveillance_analyzer.py --help`), import checks.
- Roadmap: unit tests for parsers/WiGLE client, golden sample fixtures, RF analyzer correlation tests without hardware.

## Phased validation (capstone)
- **Phase 1:** Hardware assembly + integration (waterfall) — build/document the Rapid Response Kit.
- **Phase 2:** Software/data integration (agile sprints) — configure modes/classifiers, allowlist, MQTT/KML exports; sprint demos for end-to-end collection/alert/remediation.
- **Phase 3:** Field validation — range tests (BLE replays, rogue Wi-Fi injects, SDR trigger simulators); convoy drill (HQ ↔ airport) for allowlisting, rogue tracking, ADS-B awareness; capture correlated logs/screens/response times.

## Outcomes and deliverables (capstone)
- Man-portable TraceLock™ prototype for continuous multi-band monitoring and correlation.
- Forensic integrity: 100% validation and reproducible event logs.
- Measured triage-time reduction; KPI tables/screenshots targeting ~95% detection across RF domains.
- Deliverables: operational Pi system, automation/config files, architecture + Zero Trust segmentation diagrams, validation results/KPIs, final report.

## Compliance & ethics
- Operates within FCC Part 15/97 (RF) and FAA Part 107 (UAV); within licensed privileges (Amateur, GMRS, Part 107).
- Provisional patent covers correlation/automation; no restricted data.
- IRB: not human subjects research (per WGU).

## AI assist
- Assisted parser generation for noisy RF payloads; reduced manual regex iterations.
- Drafted detection templates and self-checks; tuned thresholds with replay data.
- Auto-documented schema and export steps for auditors/interviewers.

## What this demonstrates
- RF/wireless security with evidence-grade logging.
- Detection engineering and tuning with AI assistance.
- Compliance-aware telemetry design (retention, export, role-aware modes).

## Evidence (add sanitized artifacts)
- Architecture sketch (no sensitive endpoints).
- Sample log schema and redacted alert screenshots.
- Replay/test data description and FP tuning notes.
- KML visualization samples with sanitized locations.
- Detector-to-control mapping snippet (e.g., rogue AP → DE.CM, CIS logging).
- [TraceLock diagram (public-safe)](trace-lock-diagram.md)

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
