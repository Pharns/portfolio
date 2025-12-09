# GIAP™ — GRC Intake & Evidence Automation

<span class="tag-chip">Updated: {{ page.meta.git_revision_date_localized or "" }}</span>

**GIAP™ (GRC Intake Automation Platform):** Intake and evidence automation for small orgs/law firms. Nextcloud + n8n + SuiteCRM + remote MySQL with role matrix, retention, consent, and control mapping. Designed as a pipeline into evidence review with audit-ready outputs.

## Scope
- Intake client documents and remediation artifacts with consent.
- Enforce IAM roles, retention, and integrity checks.
- Automate workflow steps (notifications, routing, logging) via n8n.
- Map outputs to SOC 2/NIST-style controls; feed a structured intake JSON for downstream processing.

## Architecture (public-safe)
- **Edge/Access:** Reverse proxy + TLS + DNS/email hardening.
- **Portal & Workflow:** Nextcloud for intake, n8n automation for routing/notifications, SuiteCRM with remote MySQL for case data.
- **Data & Integrity:** Checksums on upload, role-based folders, retention policies, logged workflow steps.
- **Audit & Monitoring:** Portal/workflow logs retained; access review checklist; consent banners on intake flows.
- **Export:** Structured intake JSON (schema stub) to evidence pipeline (GIAP).

## Controls & mapping (examples)
| Control area | Implementation | Frameworks |
| --- | --- | --- |
| Access control | RBAC on portal/CRM; least-privilege folders | SOC 2 CC6, NIST PR.AC |
| Data in transit | TLS enforcement; email security | SOC 2 CC6, NIST PR.DS |
| Integrity & retention | Checksums, retention schedule, logged deletion | SOC 2 CC3/CC8, NIST PR.DS |
| Provisioning/deprovisioning | Runbook and periodic access review | SOC 2 CC6, NIST PR.AC |
| Logging/monitoring | Workflow and portal logs retained; alerts on failed auth/unusual runs | SOC 2 CC7, NIST DE.CM |

## Evidence checklist
- [ ] Intake JSON sample (sanitized)
- [ ] Redacted screenshots of intake flow and CRM roles
- [ ] TLS/email security validation snippet
- [ ] Retention policy excerpt
- [ ] Access review record (redacted)

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

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
