---
description: "Detection and incident response lab: Security Onion SIEM, TheHive case management, Cortex enrichment. Alert tuning, IR playbooks, and SOC workflow practice."
---

# Detection & IR Lab (Security Onion + TheHive/Cortex)

**TL;DR:** Small SOC lab to practice finding alerts, triaging cases, and enriching evidence (Security Onion + TheHive/Cortex). Shows clear playbooks, tuned detections, and easy-to-read reports for non-technical stakeholders. Outcome: cut false positives ~20% in lab drills with documented runbooks.

## Scenario (example)
- Injected malicious document download and suspicious outbound callback from a test endpoint.
- Security Onion alerted on DNS anomalies + HTTP egress; Sigma-style rule authored/tuned to reduce noise.
- TheHive case created with Cortex enrichment (VT/AbuseIPDB); playbook executed and documented.

## Process
- **Detect:** Security Onion IDS/SIEM rules for DNS/HTTP anomalies; tuned thresholds to cut false positives.
- **Triage:** TheHive case creation; artifact enrichment via Cortex analyzers; pivot to host/network logs.
- **Contain/Eradicate:** Blocked outbound domain, isolated host in lab, rescanned to verify.
- **Lessons:** Tightened alert thresholds; added watchlist for similar domains; updated playbook.

## What this demonstrates
- Detection engineering and FP tuning in a SOC stack.
- IR workflow discipline: detect → triage → enrich → contain → document.
- Use of AI to draft/update playbooks and investigation checklists.

## Evidence (to include/redact)
- Alert screenshots and rule snippets (with sanitized IPs/domains).
- TheHive case timeline and enrichment results.
- Before/after metrics on FP reduction and time-to-triage.
