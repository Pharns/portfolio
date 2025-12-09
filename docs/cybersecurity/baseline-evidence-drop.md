---
description: Consent-first Windows evidence collector with hashes, manifest, and control mapping for Security Compliance Analyst/GRC roles.
---
# Baseline Evidence Drop (Consent-First Collector)
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

<!-- Tags: grc, compliance, evidence, automation, windows -->

**TL;DR:** Automated, consent-first Windows evidence collector (ethical BadUSB + scripts). Captures key settings (encryption, firewall, patches, admins, AV), hashes everything, and outputs a simple report for auditors plus a manifest for control mapping.

**Target roles:** Security Compliance Analyst/Engineer, GRC Automation Engineer, Cloud Security Engineer (GRC focus).

## Problem → Action → Result
- **Problem:** Need quick, auditable endpoint evidence for GRC assessments without installing agents.
- **Action:** Built consent-bannered collector (PowerShell) that gathers core artifacts, hashes them, logs runs, and tags control IDs in the manifest; prepares an intake JSON for pipeline handoff.
- **Result:** Repeatable, audit-ready evidence bundle with integrity data and control mapping; ready for intake into GIAP or manual review.

## Artifacts (current)
- OS/build/patch metadata and recent KBs.
- BitLocker status, Secure Boot state.
- Local administrators membership.
- Firewall profile status.
- Audit/logging policy snapshot.
- Time sync status.
- EDR/AV presence check.
- Listening ports snapshot.
- Run log, hashes file, manifest with control IDs; intake JSON stub.

## Control mapping (examples)
- CIS v8: 1.4/7.3 (patch), 4.1/4.4/4.11 (encryption/firewall/boot), 5.1/5.3 (accounts), 8.2/8.5 (logging/time), 10.1/10.6 (malware), 4.6 (exposure).
- NIST 800-53: CM-8, SI-2, MP-4, SI-7, AC-2/AC-6, AU-2/12, AU-8, SI-3/4, SC-7.
- ISO 27001 Annex A: A.8.1/8.8, A.8.24, A.8.20, A.5.18/8.2, A.8.15, A.8.7.

## Privacy/ethics guardrails
- Consent banner required (dry-run skips consent during build only).
- Scope limited to host posture (no user document collection).
- Hashes and manifest included; optional signing/encryption planned.
- “Safe share” bundle planned with redaction and integrity data.

## Validation checklist
- [ ] Consent prompt active outside build phase.
- [ ] Hashes recorded for every artifact and manifest.
- [ ] Manifest populated with control IDs and run metadata.
- [ ] Intake JSON validated against schema once finalized.
- [ ] Report generator adds pass/fail/unknown per control (planned).

## Evidence checklist
- [ ] Manifest + hashes excerpt (redacted)
- [ ] Control-mapped intake JSON sample (sanitized)
- [ ] Report generator sample with pass/fail/unknown
- [ ] Screenshots/logs from a collection run (redacted)

## AI assist
- Drafted control mappings, manifest schema, and consent/runbook text.
- Generated intake JSON stub and validation steps.
- Authored report-generation outline for status evaluation.

## What this demonstrates
- Compliance and audit mindset with integrity and consent built in.
- Evidence automation aligned to CIS/NIST/ISO.
- Quick-start assessment capability that feeds downstream intake/review.
- Works alongside intake automation ([GIAP](giap.md)) and cloud controls ([Cloud Control Pack](aws-control-pack.md)) for complete evidence coverage.

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
