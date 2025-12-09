# TraceLock — Evidence-First RF/SDR Telemetry

**TL;DR:** Multi-sensor RF/wireless telemetry (Kismet, rtl_433, ADS-B) with AI-assisted parsing and evidence logging. Demonstrates RF security specialization, detection engineering, and compliance-minded logging for high-signal roles.

## Problem → Action → Result
- **Problem:** RF/GPS/SDR environments lacked auditable detection and evidence pipelines for review and forensics.
- **Action:** Built telemetry pipeline for BLE/Wi-Fi/ADS-B/GPS/rtl_433, normalized logs with AI-assisted parsers, added IAM-like mode toggles, and authored detections with tuning.
- **Result:** Evidence-grade log schema, reduced parsing errors/FPs, and repeatable audit/export workflow suitable for compliance narratives.

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
