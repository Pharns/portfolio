# Secure Intake & Evidence Portal
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

<!-- Tags: grc, compliance, automation, intake, cloud -->

**TL;DR:** Nextcloud + n8n + SuiteCRM + remote MySQL, hardened with TLS, IAM role matrix, email security, and retention/audit trails. Demonstrates compliance intake, evidence handling, and automation for SOC 2/NIST-style controls.

**Target roles:** Security Compliance Engineer/Analyst, GRC Engineer, Compliance Automation.

## Why it matters (GRC fit)
- Evidence-first intake for client documents and remediation artifacts.
- Access governance with role matrix and provisioning/deprovisioning runbook.
- Logging, retention, and integrity checks aligned to audit expectations.
- AI-assisted policy/runbook drafting to speed delivery while preserving control quality.
- Delivered as anonymized consulting work; client details removed for privacy.

## Problem → Action → Result
- **Problem:** Intake and evidence handling lacked access control, integrity guarantees, and auditability.
- **Action:** Deployed Nextcloud portal behind TLS/reverse proxy, integrated n8n workflows and SuiteCRM with remote MySQL; enforced IAM roles, email security, and retention; scripted provisioning and access reviews.
- **Result:** Auditable intake flow with role-scoped access, logged workflows, and documented retention/provisioning; ready to hand to auditors.

## Architecture (high level)
- **Edge/Access:** Reverse proxy + TLS + DNS/email hardening.
- **Portal & Workflow:** Nextcloud + n8n automation + SuiteCRM with remote MySQL.
- **Data & Integrity:** Checksums on upload, role-based folders, retention policies, and logged workflow steps.
- **Audit & Monitoring:** Nextcloud logs, workflow logs, and periodic access review checklist.

## Control mapping (SOC 2 / NIST-style examples)
- **Access control:** RBAC for portal/CRM; least-privilege folder ACLs.
- **Data in transit:** TLS enforcement; SMTP/DNS/email security hardened.
- **Integrity & retention:** Checksums on intake, retention schedule documented, deletion logged.
- **Provisioning/deprovisioning:** Runbook for account lifecycle; periodic access reviews.
- **Logging & monitoring:** Portal/workflow logs retained; alert on failed auth and unusual automation runs.

## Evidence checklist
- [ ] Redacted screenshots (portal, n8n flow, CRM roles)
- [ ] TLS/email security validation snippet
- [ ] Retention policy excerpt
- [ ] Intake JSON sample (sanitized)
- [ ] Access review record (redacted)

## Validation checklist
- [ ] TLS enforced at proxy; HSTS set.
- [ ] Role matrix applied to folders and CRM roles.
- [ ] Intake workflow logs stored and reviewed.
- [ ] Retention schedule documented and tested.
- [ ] Access review performed and recorded.
- [ ] Email security (SPF/DKIM/DMARC) validated.

## AI assist
- Generated and refined provisioning checklists, retention policy drafts, and access review prompts.
- Automated documentation updates for workflow changes.

## What this demonstrates
- Compliance-grade intake and evidence handling.
- IAM discipline and lifecycle control.
- Automation for repeatable audits and faster onboarding.

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
---
description: Security compliance intake portal case — IAM, TLS/email hardening, retention, and evidence logging for GRC/Compliance Analyst roles.
---
