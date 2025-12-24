---
description: GRC intake and evidence automation case — Nextcloud+n8n+SuiteCRM with IAM, retention, consent, and control mapping for Cloud GRC and Security Compliance roles.
---
# GIAP™ — GRC Intake & Evidence Automation
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

!!! tldr "For recruiters & hiring managers"
    **What:** AI-powered GRC intake automation platform with Nextcloud + n8n + SuiteCRM — structured workflows with consent management, retention policies, role-based access control, and NIST/SOC 2 control mapping.

    **Why this matters for GRC:** Demonstrates governance automation, evidence pipeline architecture, compliance framework mapping, and AI-augmented workflow generation.

    **Impact:** Transforms manual intake processes into automated, audit-ready workflows with structured JSON outputs and complete control traceability.

    **Skills:** GRC Automation · Workflow Orchestration (n8n) · IAM/RBAC · Data Retention · Control Mapping · SOC 2 · NIST CSF · Evidence Collection · AI-Assisted Development

---

!!! warning "Project Status: In Progress"
    **Infrastructure:** Deployed — Nextcloud, n8n, SuiteCRM, and MySQL running on self-hosted Proxmox VMs.

    **Integration:** Q1 2026 — Workflow automation, system integration, and evidence pipelines in progress.

    **What's here now:** Live infrastructure, control design, architecture documentation, partial intake wizard, and framework mapping. Integration evidence coming soon.

---

## Target metrics

| Metric | Current State | Target | Expected Improvement |
|--------|---------------|--------|----------------------|
| Intake processing time | 2-3 hours manual | 15 min automated | ~85% reduction |
| Evidence completeness | 70% (missing fields) | 100% (enforced schema) | ~30% improvement |
| Audit prep time | 4+ hours per case | 30 min export | ~87% reduction |
| Data integrity verification | Manual spot-check | Automatic hashing | 100% coverage |

*Metrics represent design targets — actual measurements pending implementation.*

---

**GIAP™ (GRC Intake Automation Platform):** Intake and evidence automation for small orgs/law firms. Nextcloud + n8n + SuiteCRM + remote MySQL with clear roles, retention, consent, and control mapping. Outcome: ready-to-hand auditors clean, consistent packages with structured JSON outputs.

**Target roles:** GRC Engineer, Security Compliance Engineer/Analyst, GRC Automation Engineer, Cloud Security Engineer (GRC focus).

## Scope
- Intake client documents and remediation artifacts with consent.
- Enforce IAM roles, retention, and integrity checks.
- Automate workflow steps (notifications, routing, logging) via n8n.
- Map outputs to SOC 2/NIST-style controls; feed a structured intake JSON for downstream processing.

## Architecture (deployed on self-hosted Proxmox)
- **Infrastructure:** Self-hosted Proxmox hypervisor with dedicated VMs for each service component.
- **Edge/Access:** Reverse proxy + TLS + DNS/email hardening.
- **Portal & Workflow:** Nextcloud for intake, n8n automation for routing/notifications, SuiteCRM with MySQL for case data.
- **Data & Integrity:** Checksums on upload, role-based folders, retention policies, logged workflow steps.
- **Audit & Monitoring:** Portal/workflow logs retained; access review checklist; consent banners on intake flows.
- **Export:** Structured intake JSON (schema stub) to evidence pipeline (GIAP™).

## Controls & mapping (examples)
| Control area | Implementation | Frameworks |
| --- | --- | --- |
| Access control | RBAC on portal/CRM; least-privilege folders | SOC 2 CC6, NIST PR.AC |
| Data in transit | TLS enforcement; email security | SOC 2 CC6, NIST PR.DS |
| Integrity & retention | Checksums, retention schedule, logged deletion | SOC 2 CC3/CC8, NIST PR.DS |
| Provisioning/deprovisioning | Runbook and periodic access review | SOC 2 CC6, NIST PR.AC |
| Logging/monitoring | Workflow and portal logs retained; alerts on failed auth/unusual runs | SOC 2 CC7, NIST DE.CM |

## Implementation Roadmap

| Phase | Status | Target |
|-------|--------|--------|
| Architecture design | ✅ Complete | — |
| Control framework mapping | ✅ Complete | — |
| Nextcloud deployment | ✅ Complete | — |
| n8n deployment | ✅ Complete | — |
| SuiteCRM + MySQL deployment | ✅ Complete | — |
| Intake wizard UI | 🔄 Partial | Q1 2026 |
| n8n workflow automation | 🔄 In Progress | Q1 2026 |
| System integration | ⏳ Pending | Q1 2026 |
| Evidence capture & validation | ⏳ Pending | Q1 2026 |

## Current Artifacts

| Component | Design | Implementation |
|-----------|--------|----------------|
| Proxmox VM infrastructure | ✅ Complete | ✅ Deployed |
| Nextcloud file portal | ✅ Complete | ✅ Running |
| n8n automation server | ✅ Complete | ✅ Running |
| SuiteCRM + MySQL | ✅ Complete | ✅ Running |
| Intake wizard (HTML/JS) | ✅ Complete | 🔄 Partial |
| RBAC role matrix | ✅ Complete | 🔄 In Progress |
| n8n workflow definitions | ✅ Designed | 🔄 In Progress |
| Retention policy template | ✅ Complete | ⏳ Pending |
| JSON output schema | ✅ Complete | ⏳ Pending |

## Evidence checklist
- [ ] Intake JSON output (actual system output)
- [ ] Redacted screenshots of intake flow and CRM roles
- [ ] TLS/email security validation snippet
- [ ] Retention policy excerpt
- [ ] Access review record (redacted)

## Designed output schema

```json
{
  "intake_id": "GIAP-2025-XXXX",
  "timestamp": "2025-XX-XXTXX:XX:XXZ",
  "client_type": "small_business",
  "consent_captured": true,
  "consent_timestamp": "2025-XX-XXTXX:XX:XXZ",
  "documents_received": 4,
  "integrity_hashes": {
    "doc_001": "sha256:...",
    "doc_002": "sha256:...",
    "doc_003": "sha256:...",
    "doc_004": "sha256:..."
  },
  "workflow_status": "intake_complete",
  "retention_policy": "7_years",
  "access_tier": "case_manager",
  "controls_mapped": ["SOC2_CC6.1", "SOC2_CC6.3", "NIST_PR.AC-1"],
  "audit_trail": [
    {"action": "intake_started", "user": "system", "timestamp": "..."},
    {"action": "consent_captured", "user": "client", "timestamp": "..."},
    {"action": "documents_uploaded", "user": "client", "timestamp": "..."},
    {"action": "integrity_verified", "user": "system", "timestamp": "..."},
    {"action": "workflow_complete", "user": "system", "timestamp": "..."}
  ]
}
```

*Schema design — actual system outputs will be captured after deployment.*

## Validation checklist
- [ ] TLS enforced (HSTS) and email security validated.
- [ ] Role matrix applied to folders and CRM roles.
- [ ] Intake workflow logs stored and reviewed.
- [ ] Retention schedule documented and tested.
- [ ] Access review performed and recorded.
- [ ] Intake JSON schema finalized and validated against samples.

## AI assist
- Drafted retention and access review policies, intake prompts, and runbooks.
- Generated schema stubs and validation checks for intake JSON.
- Automated documentation updates for workflow changes.

## What this demonstrates
- Compliance-grade intake/evidence handling with automation.
- IAM discipline and lifecycle control for client data.
- Audit-ready outputs that hand off cleanly to evidence review pipelines.
- Pairs with cloud controls ([Cloud Control Pack](aws-control-pack.md)) and endpoint evidence collection ([Baseline Evidence Drop](baseline-evidence-drop.md)) for end-to-end GRC coverage.

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
