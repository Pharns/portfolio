---
description: "Full-stack GRC engineering: cloud governance, endpoint compliance, automation workflows, and framework mapping. NIST, CIS, PCI-DSS implementation."
---

# GRC & Compliance Engineering

I build audit-ready control frameworks, evidence pipelines, and compliance automation systems for cloud and hybrid environments. Unlike traditional GRC roles focused on policy and documentation, I implement the technical controls being audited.

---

## Production experience

<div class="section-panel" markdown>

### USOG — Enterprise Security Infrastructure (7 Years)

As CEO and Systems Administrator of a $5.6M drone logistics company (18 employees), I built the entire IT security infrastructure from scratch — not inherited, not delegated:

| What I Built | Framework Alignment |
|--------------|---------------------|
| Self-hosted email, calendar, contacts | CIS v8: 4.1, 4.2 (Email Security) |
| Nextcloud file storage with encryption | CIS v8: 3.1-3.14 (Data Protection) |
| Remote access (VPN, secure RDP) | CIS v8: 12.1-12.8 (Network Security) |
| Endpoint protection and EDR | CIS v8: 10.1-10.7 (Malware Defenses) |
| Backup systems with offsite replication | CIS v8: 11.1-11.5 (Data Recovery) |
| Security monitoring and alerting | CIS v8: 8.1-8.12 (Audit Logging) |
| Vulnerability scanning and remediation | CIS v8: 7.1-7.7 (Vuln Management) |
| Access controls and MFA | CIS v8: 5.1-5.6, 6.1-6.8 (Access Control) |

**Framework implementation:** CIS Controls v8 (IG1-IG2) mapped to NIST CSF and SOC 2 trust criteria.

**Scale:** 15,000+ vulnerabilities identified and remediated over 7 years of continuous operation.

**This wasn't a lab project** — it was production infrastructure supporting 18 employees and $5.6M in business operations.

</div>

---

## Client engagements

<div class="stat-grid" markdown>
<div class="stat-tile" markdown>
**Healthcare MSP (25 employees)**
HIPAA + SOC 2 readiness assessment. Identified 12 control gaps across access management, logging, and data protection. Delivered prioritized remediation roadmap with 90-day implementation timeline.
<span class="tag-chip">HIPAA</span> <span class="tag-chip">SOC 2</span> <span class="tag-chip">Healthcare</span>
</div>

<div class="stat-tile" markdown>
**Financial Services SMB**
PCI-DSS Windows 11 endpoint hardening. 47 controls mapped to CIS benchmarks, complete evidence pack with screenshots, GPO exports, and configuration validation. Delivered in <48 hours.
<span class="tag-chip">PCI-DSS</span> <span class="tag-chip">CIS</span> <span class="tag-chip">Endpoint</span>
</div>

<div class="stat-tile" markdown>
**Law Firm Security Assessment**
Comprehensive vulnerability assessment and remediation across infrastructure. Dark web monitoring, M365 hardening, endpoint protection deployment.
<span class="tag-chip">Assessment</span> <span class="tag-chip">Remediation</span> <span class="tag-chip">M365</span>
</div>

<div class="stat-tile" markdown>
**SMB Mortgage Company**
Windows 11 baseline hardening for compliance-sensitive environment. BitLocker enforcement, Defender configuration, patch automation, and audit logging.
<span class="tag-chip">Compliance</span> <span class="tag-chip">Hardening</span> <span class="tag-chip">Financial</span>
</div>
</div>

<small>*Client engagements via AAM Cyber, LLC. References available upon request.*</small>

---

## What makes full-stack GRC engineering different

**Traditional GRC:**
- Write policies and control narratives
- Maintain compliance spreadsheets
- Coordinate with technical teams for evidence
- Document what others built

**Full-Stack GRC Engineering (what I do):**
- Design AND implement the technical controls
- Build automation for evidence collection
- Architect cloud governance and logging pipelines
- Create the systems being audited, then document them with evidence

**Result:** Faster delivery, deeper technical accuracy, and audit-ready packages with less back-and-forth.

---

## GRC engineering domains

### 🛡️ Cloud Governance & Security

**What I deliver:**
- IAM least-privilege policies and role design
- S3 secure defaults (encryption, versioning, lifecycle, public access blocks)
- GuardDuty export pipelines with scoped access controls
- CloudTrail analysis and log retention strategies
- Resource tagging and cost allocation frameworks
- Multi-account security baselines

**Tools & frameworks:**
AWS (IAM, S3, GuardDuty, CloudTrail, Config), Terraform, CloudFormation, CIS AWS Benchmarks, NIST CSF

**Project examples:**
[AWS Cloud Control Pack](../cybersecurity/aws-control-pack.md) — S3 baseline, GuardDuty export, scoped IAM with CIS/NIST mapping

---

### 🔒 Endpoint Compliance & Hardening

**What I deliver:**
- PCI-DSS / CIS / NIST-aligned endpoint builds
- BitLocker encryption with TPM enforcement
- GPO hardening (password policy, service lockdown, audit logging)
- Firewall rule implementation (domain/private/public profiles)
- Patch automation and vulnerability remediation workflows
- EDR integration and monitoring

**Tools & frameworks:**
Windows GPO, BitLocker, Defender, GlassWire, Patch My PC, Macrium Reflect, PCI-DSS v4.0, CIS Benchmarks

**Project examples:**
[PCI-DSS Windows 11 Hardening](../cybersecurity/pci-dss/index.md) — Complete endpoint hardening with evidence pack in <48 hours

---

### 🤖 Compliance Automation & Workflows

**What I deliver:**
- Intake and evidence collection automation
- Workflow orchestration (notifications, routing, approvals)
- RBAC implementation with provisioning/deprovisioning runbooks
- Retention policies and data lifecycle management
- Consent management and audit trail generation
- Structured data outputs (JSON schemas for evidence pipelines)

**Tools & frameworks:**
n8n, Python automation, Nextcloud, SuiteCRM, NIST CSF, SOC 2 control mapping

**Project examples:**
[GIAP™ — GRC Integrated Automation](../cybersecurity/giap.md) — Production platform with 100+ frameworks, HMAC webhooks, end-to-end automation
[Secure Intake Portal](../cybersecurity/intake-portal.md) — Nextcloud + n8n + SuiteCRM with IAM and audit trails
[Baseline Evidence Drop](../cybersecurity/baseline-evidence-drop.md) — Agentless Windows evidence collector

---

### 📊 Logging, Monitoring & Evidence Pipelines

**What I deliver:**
- Evidence pipeline architecture for compliance data
- SIEM ingestion and log forwarding configuration
- Log retention policies aligned with frameworks
- Audit trail design for governance workflows
- Alert tuning and false positive reduction
- Structured logging schemas (JSON, CEF)

**Tools & frameworks:**
Security Onion, TheHive/Cortex, CloudTrail, event forwarding, structured logging, NIST CSF (DE.CM), CIS logging controls

**Project examples:**
[TraceLock™ RF/SDR Telemetry](../cybersecurity/tracelock.md) — Evidence-grade wireless detection with audit logging (demonstrates evidence pipeline skills)
[Detection & IR Lab](../cybersecurity/incident-response.md) — SIEM tuning, alert engineering, IR playbooks

---

### 🔐 Access Control & Identity Management

**What I deliver:**
- Role-based access control (RBAC) matrix design
- Least-privilege implementation and validation
- Provisioning/deprovisioning workflows and runbooks
- MFA enforcement strategies
- Access review automation and reporting
- Credential rotation and secrets management

**Tools & frameworks:**
RBAC design patterns, access review workflows, credential rotation, directory services, AWS IAM, principle of least privilege

**Project examples:**
Implemented across all projects: AWS Control Pack (IAM roles), GIAP™ (portal RBAC), Intake Portal (multi-tier access)

---

### 📋 Framework Mapping & Attestation

**What I deliver:**
- Control matrix development (framework → implementation → evidence)
- Gap analysis and remediation roadmaps
- Evidence mapping for audits
- Attestation support and audit liaison
- Compliance narrative authoring
- AI-assisted control mapping at scale

**Frameworks:**
NIST Cybersecurity Framework, CIS Controls v8, PCI-DSS v4.0, ISO 27001 (foundational), SOC 2 (foundational)

**Approach:**
Every project includes control matrices linking requirements to implementation artifacts and evidence files.

---

### 🛠️ Vulnerability & Risk Management

**What I deliver:**
- Vulnerability scanning and assessment
- Remediation tracking and prioritization
- Risk assessment workflows (likelihood × impact)
- Patch management automation
- Exposure validation and validation testing
- Compliance exception management

**Tools & frameworks:**
Nessus, vulnerability databases, CVSS scoring, patch automation, risk matrices

**Project examples:**
[Vulnerability Assessment](../cybersecurity/vulnerability-assessment.md) — Nessus scanning with remediation workflows

---

### 🔍 Vendor & Third-Party Risk Management

**What I deliver:**
- Vendor security assessment and due diligence
- Privacy policy analysis and data sharing evaluation
- Control gap identification (vendor capabilities vs compliance requirements)
- Third-party risk documentation and risk memos
- Compliance exception requests with technical justification
- Evidence preservation and audit trail maintenance

**Tools & frameworks:**
Privacy policy review, vendor questionnaires, control mapping, NIST/CIS/SOC2 alignment, IoT/PropTech security evaluation

**Approach:**
Translate compliance requirements into concrete vendor control criteria. Document gaps between vendor architecture and required controls. Maintain defensible evidence trails for governance decisions.

---

### 🚨 Incident Response & Detection

**What I deliver:**
- IR playbooks and runbooks
- Detection engineering (SIEM rules, correlation)
- Triage workflows with evidence preservation
- Post-incident review templates
- Chain-of-custody procedures
- Integration with ticketing (TheHive/Cortex)

**Tools & frameworks:**
Security Onion, TheHive, Cortex, SIEM rule authoring, forensics tools, NIST CSF (RS.AN)

**Project examples:**
[Detection & IR Lab](../cybersecurity/incident-response.md) — Active lab with custom detections and incident drills

---

### 🌐 Network Security & Segmentation

**What I deliver:**
- Network segmentation design
- Firewall rule implementation and validation
- Zero Trust architecture pilots (ZTNA evaluation)
- Remote access hardening (no exposed WAN)
- Traffic monitoring and anomaly detection
- VPN alternatives and modern access patterns

**Tools & frameworks:**
Tailscale, Twingate, Nginx reverse proxy, network monitoring, firewall platforms, Zero Trust principles

**Project examples:**
[Remote Access & Zero-WAN](../cybersecurity/remote-access-zero-wan.md) — Tailscale/RustDesk with no WAN exposure
[Homelab Infrastructure](../cybersecurity/homelab-infrastructure.md) — Multi-component stack with hardened access

---

### 📝 Documentation & Knowledge Management

**What I deliver:**
- Runbook authoring (operational procedures)
- Control narratives and compliance documentation
- Evidence packs with screenshots and logs
- Architecture diagrams (network, data flow, system)
- Compliance reports and executive summaries
- AI-assisted documentation at scale

**Tools & approaches:**
Markdown, diagrams-as-code, screenshot workflows, Git for version control, AI-assisted drafting with human review

**Approach:**
Every project includes comprehensive documentation designed for auditors, not just technical teams.

---

## AI-assisted GRC delivery

Traditional GRC work is documentation-heavy: control matrices, policy drafting, evidence collection, runbooks. I use LLM tools to accelerate without sacrificing quality:

- **Draft policies and control mapping** — Faster first drafts with thorough human review and technical validation
- **Generate evidence documentation** — Structured outputs from logs, screenshots, and configuration exports
- **Produce audit-ready runbooks** — Consistent formatting, complete procedures, tested steps
- **Maintain living documentation** — Version-controlled, evolves with infrastructure changes

**Result:** Same rigor and quality as traditional approaches, with faster turnaround. More time for high-value work: architecture, implementation, and validation.

---

## Framework experience

**Primary frameworks:**
- **NIST Cybersecurity Framework** — Applied across cloud (AWS), endpoint (Windows), and intake automation. Controls mapped: PR.AC (access control), PR.DS (data security), DE.CM (continuous monitoring), RS.AN (analysis)
- **CIS Controls v8** — Cloud benchmarks (AWS), endpoint hardening, logging/monitoring, IAM discipline
- **PCI-DSS v4.0** — Complete endpoint hardening case study with control matrix and evidence pack

**Foundational experience:**
- **ISO 27001** — Control mapping for access control, data governance, logging (intake automation projects)
- **SOC 2** — Trust service criteria for governance workflows, RBAC, retention, audit logging

---

## What hiring managers should know

**I'm not a typical GRC analyst.** I don't just maintain spreadsheets and coordinate with technical teams for evidence.

**I architect the systems, implement the controls, and document with evidence** — all in one workflow. This means:

- **Faster delivery** — No waiting for other teams; I build and document simultaneously
- **Technical accuracy** — Controls aren't theoretical; they're implemented and validated
- **Audit readiness** — Evidence is collected during implementation, not retroactively
- **Cost efficiency** — One person covering policy, implementation, and documentation
- **Proven client work** — Healthcare, financial services, and legal sector engagements delivered

**Ideal roles:**
- GRC Engineer (technical implementation focus)
- Cloud Compliance Automation Engineer
- Security Controls Implementation Specialist
- Cloud Security Engineer (GRC focus)
- Detection Engineering (compliance-adjacent)

**Future expansion:**
- Penetration Testing (active lab, CySA+/PenTest+ Jan 2026)
- Offensive security with compliance lens (purple team)

---

## Featured GRC projects

<div class="stat-grid" markdown>
<div class="stat-tile" markdown>
**🤖 GIAP™ — GRC Integrated Automation** ⭐ *(MVP Complete)*
Production GRC platform with [live demo](https://portal.aamcyber.work/){target=_blank}. 100+ frameworks, HMAC webhooks, end-to-end automation.
[View Project](../cybersecurity/giap.md)
</div>

<div class="stat-tile" markdown>
**📡 TraceLock™ — RF Threat Detection**
Patent-pending 6-domain wireless monitoring. Evidence-grade logging and detection engineering.
[View Project](../cybersecurity/tracelock.md)
</div>

<div class="stat-tile" markdown>
**📋 PCI-DSS Windows 11 Hardening**
Complete endpoint hardening with evidence pack in <48 hours
[View Project](../cybersecurity/pci-dss/index.md)
</div>

<div class="stat-tile" markdown>
**🏢 PropTech RF Governance & Scope Control**
Governance-focused RF assessment of a smart-building deployment with disciplined scope control and privacy risk guidance for regulated work-from-home roles.
[View Project](../cybersecurity/proptech-compliance-article.md)
</div>

<div class="stat-tile" markdown>
**🛡️ AWS Cloud Control Pack** *(In Progress)*
S3 default-deny, GuardDuty export, scoped IAM with CIS/NIST mapping
[View Project](../cybersecurity/aws-control-pack.md)
</div>

<div class="stat-tile" markdown>
**🔐 Secure Intake Portal**
Nextcloud + n8n + SuiteCRM with RBAC and audit trails
[View Project](../cybersecurity/intake-portal.md)
</div>

<div class="stat-tile" markdown>
**📦 Baseline Evidence Drop**
Agentless Windows evidence collector with hashes and manifest
[View Project](../cybersecurity/baseline-evidence-drop.md)
</div>
</div>

---

[View All Projects](../projects.md){ .btn-primary } [Contact](../contact.md){ .btn-ghost }
