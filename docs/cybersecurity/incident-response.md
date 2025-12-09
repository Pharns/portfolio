# Detection & IR Lab (Security Onion + TheHive/Cortex)

**TL;DR:** Proxmox-based SOC lab for simulated incidents. Authored detections, triaged in TheHive, enriched with Cortex, and documented lessons. Demonstrates detection engineering, IR playbook execution, and AI-supported runbooks.

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
