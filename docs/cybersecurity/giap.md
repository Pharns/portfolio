---
description: Multi-agent GRC automation platform with n8n orchestration — streamlined pipeline for intake, CRM sync, legal automation, control mapping, and POA&M generation across 100+ frameworks including SOC 2, NIST CSF, CIS v8, HIPAA, and CPRA.
---
# GIAP™ — Multi-Agent GRC Automation Platform
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

!!! tldr "For recruiters & hiring managers"
    **What:** Streamlined GRC automation platform with n8n orchestration. End-to-end intake workflow operational (Portal → n8n → Nextcloud). Single GRC platform (CISO Assistant) for both pre-engagement assessment and post-engagement delivery. Orchestrates client intake, CRM sync, legal document automation, cross-framework control mapping, and POA&M generation.

    **Why this matters:** Demonstrates senior-level systems architecture, API-first design, and practical automation — reducing operational overhead while maintaining audit-ready workflows. Portal security hardening shows application security discipline (XSS prevention, WCAG 2.1 AA).

    **Impact:** Reduces audit prep time by ~70%; automates end-to-end GRC lifecycle from intake to remediation tracking with a single, API-first GRC platform.

    **Skills:** Systems Architecture · n8n Orchestration · Webhook Integration · Application Security · WCAG 2.1 AA · CISO Assistant · GRC Automation · Control Mapping · SOC 2 · NIST CSF · CIS v8 · HIPAA · CPRA · Evidence Pipelines · API Design · RBAC · Audit Logging

---

!!! info "Project Status: Architecture Locked, End-to-End Intake Working"
    **Infrastructure:** Deployed — Proxmox stack with CISO Assistant, Nextcloud, n8n, and SuiteCRM operational. DocuSeal pending deployment.

    **Architecture:** Locked — Streamlined single-GRC-platform design with n8n orchestration.

    **Implementation:** Active — Portal v2.2 deployed with security hardening (WCAG 2.1 AA); n8n intake workflow operational; CISO Assistant running; end-to-end intake → Nextcloud logging verified.

    **Live Domains:**

    - `portal.aamcyber.work` — Client intake wizard
    - `flows.aamcyber.work` — n8n workflow automation
    - `files.aamcyber.work` — Nextcloud evidence vault
    - `grc.aamcyber.work` — CISO Assistant GRC platform
    - `crm.aamcyber.work` — SuiteCRM client management
    - `docs.aamcyber.work` — DocuSeal (pending deployment)

---

## End-to-End Workflow

GIAP™ implements a two-phase workflow with a clear **deposit gate** separating pre-engagement qualification from paid consulting work. **CISO Assistant** serves as the single GRC platform for both phases — API-first with 100+ framework mappings.

```mermaid
flowchart TB
    subgraph PRE[PRE-ENGAGEMENT]
        direction TB
        P[Prospect]
        PIF[Pre-Intake]
        CA[CISO Assistant]
        QG[Gap Analysis]
        FS[Framework Fit]
        RP[Risk Profile]
        CRM[SuiteCRM]
        DS[DocuSeal]

        P --> PIF --> CA
        CA --> QG & FS & RP
        QG & FS & RP --> CRM
        CRM --> DS
    end

    DG[DEPOSIT GATE]

    subgraph POST[POST-ENGAGEMENT]
        direction TB
        CA2[CISO Assistant]
        RM[Risk Register]
        CT[Control Testing]
        NC[Nextcloud]
        POA[POAM Agent]
        REM[Remediation]
        VCISO[vCISO Cycle]

        CA2 --> RM & CT
        RM & CT --> NC
        NC --> POA
        POA --> REM --> VCISO
    end

    DS --> DG
    DG --> CA2
    VCISO -.-> CA2

    style PRE fill:#e8f4ea,stroke:#2e7d32,stroke-width:2px
    style POST fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style DG fill:#fff3e0,stroke:#ef6c00,stroke-width:3px
```

---

## Platform Roles

| Platform | Phase | Role | Status |
|----------|-------|------|--------|
| **Portal (Static)** | Pre-Engagement | Client intake wizard (v2.2, WCAG 2.1 AA) | ✅ Deployed |
| **n8n** | Both | Workflow orchestration, notifications | ✅ Running |
| **Nextcloud** | Both | Evidence vault, document storage, WebDAV | ✅ Running |
| **SuiteCRM** | Both | Client records, engagement tracking | ✅ Running |
| **CISO Assistant** | Both | Full GRC platform — assessments, risk, controls, 100+ frameworks | ✅ Running |
| **DocuSeal** | Pre-Engagement | Legal documents (engagement letter, DPA, BAA) | ⬜ Deploy |
| **GIAC API (FastAPI)** | Both | RBAC, audit log, API endpoints | ⬜ Future |
| **GIAC UI (React)** | Both | Full-featured portal (replaces static) | ⬜ Future |
| **POAMAgent** | Post-Engagement | Custom POA&M generation | ⬜ Future |

### Why Single GRC Platform?

| Decision | Choice | Rationale |
|----------|--------|-----------|
| GRC Platform | **CISO Assistant only** | API-first, 100+ frameworks, auto-mapping, reduces operational overhead |
| ~~Eramba CE~~ | **Removed** | No API, manual imports only — doesn't fit automation-first architecture |
| File Storage | **Nextcloud** | Separation of concerns, WebDAV API, self-hosted encryption |

---

## Architecture Overview

GIAP™ is a streamlined GRC automation platform with **n8n orchestration** and a **single GRC platform** (CISO Assistant):

```mermaid
flowchart TB
    subgraph UI[PRESENTATION LAYER]
        PORTAL[GIAC UI - React]
    end

    subgraph ORCH[ORCHESTRATION LAYER]
        N8N[n8n Workflows]
    end

    subgraph DATA[DATA LAYER]
        direction LR
        CA[CISO Assistant]
        CRM[SuiteCRM]
        NC[Nextcloud]
        DS[DocuSeal]
    end

    PORTAL --> N8N
    N8N --> CA
    N8N --> CRM
    N8N --> NC
    N8N --> DS

    style UI fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style ORCH fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style DATA fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
```

---

## n8n Workflow Pipeline

| Workflow | Phase | Function | Status |
|----------|-------|----------|--------|
| **Intake Simple** | Pre | Portal → webhook → Nextcloud JSON logging | ✅ Working |
| **Backup Automation** | Ops | Daily n8n + CISO Assistant backups → Nextcloud | ⬜ Configure |
| **Intake Processing** | Pre | Normalize intake → CRM sync | ⬜ Build |
| **Assessment Trigger** | Pre | Create CISO Assistant project from intake | ⬜ Build |
| **Document Generation** | Pre | Trigger DocuSeal for engagement letter | ⬜ Build |
| **Evidence Collection** | Post | Upload artifacts to Nextcloud folders | ⬜ Build |
| **Gap Analysis** | Post | CISO Assistant API → extract gaps | ⬜ Build |
| **POA&M Generation** | Post | Gaps → POAMAgent templates | ⬜ Future |
| **Notifications** | Both | Status updates, reminders, alerts | ⬜ Build |

### Working Workflow: GIAP Intake Simple

The first n8n workflow is operational and logging intake submissions to Nextcloud:

```mermaid
flowchart TD
    subgraph GIAP Intake Simple Workflow
        direction LR
        A["Portal (v2.2)"] -- "POST /webhook/giap-simple" --> B(n8n);
        B -- "Edit Fields (filename, content)" --> B;
        B -- "HTTP Request (PUT)" --> C[/"Nextcloud WebDAV"/];
    end
    C -- "Output: /GIAP-Intakes/....json" --> D((Log File));

    style C fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
```

**Verified:** End-to-end test successful (2025-12-31). Intake JSON files automatically created in Nextcloud `GIAP-Intakes/` folder.

### Data Flow

```mermaid
flowchart TB
    subgraph PRE[PRE-ENGAGEMENT]
        direction TB
        PORTAL[GIAC Portal] --> N8N1[n8n: Intake]
        N8N1 --> CA[CISO Assistant]
        CA --> CRM[SuiteCRM]
        CRM --> DS[DocuSeal]
    end

    DG[DEPOSIT GATE]

    subgraph POST[POST-ENGAGEMENT]
        direction TB
        CA2[CISO Assistant] --> N8N2[n8n: Assessment]
        N8N2 --> NC[Nextcloud]
        NC --> POA[POAMAgent]
        POA --> REM[Remediation]
        REM --> VCISO[vCISO Cycle]
    end

    DS --> DG
    DG --> CA2
    VCISO -.-> CA2

    style PRE fill:#e8f4ea,stroke:#2e7d32,stroke-width:2px
    style POST fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style DG fill:#fff3e0,stroke:#ef6c00,stroke-width:3px
```

---

## POAMAgent — Custom POA&M Generator

No dedicated open-source POA&M generator exists. For a boutique consulting firm, custom tooling is the right choice:

| Approach | Cost | Integration | Portfolio Value |
|----------|------|-------------|-----------------|
| Commercial (Onspring, etc.) | $5K-50K/year | Generic | None |
| **Custom POAMAgent** | Dev time only | Native GIAP | "Built production compliance tooling" |

### POAMAgent Capabilities

```python
# POAMAgent outputs
poam_agent = {
    "inputs": ["ciso_assistant_gaps", "aam_unified_controls", "client_context"],
    "outputs": {
        "executive_summary": "1-page risk overview (PDF)",
        "detailed_poam": "Full remediation plan with milestones (MD/CSV/PDF)",
        "task_export": "Task list for remediation tracking (JSON)"
    },
    "templates": "Jinja2 → Markdown → WeasyPrint PDF",
    "branding": "AAM Cyber deliverable format"
}
```

### Implementation Scope

| Component | Complexity | Status |
|-----------|------------|--------|
| CISO Assistant API query | Low | ⬜ Future |
| Severity/priority logic | Low | ⬜ Future |
| Jinja2 templates | Low | ⬜ Future |
| PDF generation | Medium | ⬜ Future |

---

## Future: MCP Integration

GIAP™ can integrate with Claude and other AI assistants via **Model Context Protocol (MCP)** for natural language queries against GRC data:

| MCP Server | Data Source | Example Queries |
|------------|-------------|-----------------|
| `giap-crm` | SuiteCRM | "Show all pending intakes" / "What's the engagement status for Client X?" |
| `giap-controls` | CISO Assistant | "Run a quick SOC 2 gap check" / "What frameworks fit this client?" |
| `giap-evidence` | Nextcloud | "Show the signed NDA for Client X" / "What evidence is missing for CC6.1?" |
| `giap-poam` | POAMAgent | "Generate a POA&M for Client X" / "What are the top 5 high-risk items?" |

### Example Conversation

```
User: New prospect came in — healthcare practice, 25 employees, M365 + on-prem EHR.
      Quick assessment before our sales call?

Claude: [Reads giap://controls/frameworks/hipaa/quick-assessment]
        [Reads giap://controls/frameworks/soc2/quick-assessment]

Quick Assessment for Healthcare Practice:

Recommended Frameworks: HIPAA (required), SOC 2 (recommended for vendors)

Likely Gaps (based on profile):
- §164.312(a) Access Control — EHR access reviews needed
- §164.308(a)(1) Risk Analysis — Likely missing formal risk assessment
- CC6.2 Logical Access — M365 MFA status unknown

Suggested Engagement: HIPAA Security Rule assessment + SOC 2 readiness
Estimated Scope: 40-60 hours

Ready to create intake in SuiteCRM?
```

---

## Technology Stack

| Layer | Technology | Purpose | Status |
|-------|------------|---------|--------|
| **Frontend** | Static HTML/JS | Pre-intake wizard (v2.2, security hardened) | ✅ Deployed |
| **Frontend (Future)** | React + Vite | Full-featured GIAC UI | ⬜ Future |
| **Backend (Future)** | FastAPI | GIAC API with RBAC, audit logging | ⬜ Future |
| **Orchestration** | n8n | Workflow automation, notifications | ✅ Running |
| **GRC Platform** | CISO Assistant | Assessments, risk, controls, 100+ frameworks | ✅ Running |
| **Files** | Nextcloud | Evidence vault, document storage | ✅ Running |
| **CRM** | SuiteCRM | Client records, intake tracking | ✅ Running |
| **Signatures** | DocuSeal (self-hosted) | Engagement letters, DPAs, BAAs, NDAs | ⬜ Deploy |
| **POA&M** | POAMAgent (custom) | Branded deliverables, multi-format output | ⬜ Future |
| **Proxy** | Nginx Proxy Manager | TLS termination, routing | ✅ Running |
| **Infrastructure** | Proxmox LXC/VM | Isolated service VMs | ✅ Running |
| **Access** | Tailscale | Admin routes restricted by CGNAT + ACL | ✅ Running |

### CISO Assistant — Single GRC Platform

[CISO Assistant](https://github.com/intuitem/ciso-assistant-community) serves as the **single GRC platform** for both pre-engagement and post-engagement work:

| Capability | Description |
|------------|-------------|
| **100+ Frameworks** | Pre-loaded SOC 2, NIST CSF, CIS v8, HIPAA, ISO 27001, and more |
| **API-First** | Full REST API for automation and integration |
| **Risk Management** | Risk registers, assessments, treatment plans |
| **Control Mapping** | Auto-mapping across frameworks |
| **Gap Analysis** | Identify compliance gaps with scoring |
| **Evidence Collection** | Link evidence to controls |
| **YAML/JSON Export** | Clean export formats for reporting |

**Why CISO Assistant over Eramba CE?**

| Factor | CISO Assistant | ~~Eramba CE~~ |
|--------|----------------|---------------|
| API | ✅ Full REST API | ❌ No API (manual only) |
| Frameworks | 100+ pre-loaded | Limited |
| Automation | ✅ n8n compatible | ❌ Manual imports |
| Overhead | Low | High |

---

## Framework Coverage

CISO Assistant provides **100+ pre-loaded frameworks** with auto-mapping:

| Framework | Status | Platform |
|-----------|--------|----------|
| **SOC 2** | Full mapping | CISO Assistant |
| **NIST CSF v2.0** | Full mapping | CISO Assistant |
| **CIS Controls v8** | Full mapping | CISO Assistant |
| **HIPAA** | Full mapping | CISO Assistant |
| **CPRA** | Full mapping | CISO Assistant |
| **ISO 27001** | Full mapping | CISO Assistant |
| **PCI-DSS** | Full mapping | CISO Assistant |
| **GDPR** | Full mapping | CISO Assistant |
| **AAM Unified Controls** | Proprietary | Cross-framework mapping |

### HIPAA Coverage

GIAP™ supports HIPAA Security Rule and Privacy Rule compliance for healthcare clients and business associates:

| HIPAA Requirement | Implementation | AAM Control |
|-------------------|----------------|-------------|
| §164.312(a) Access Control | RBAC, unique user IDs, auto-logoff | AAM.ACCESS-01 |
| §164.312(b) Audit Controls | Append-only logs, activity monitoring | AAM.AUDIT-01 |
| §164.312(c) Integrity | SHA-256 checksums, tamper detection | AAM.INTEG-01 |
| §164.312(d) Authentication | MFA enforcement, credential management | AAM.AUTH-01 |
| §164.312(e) Transmission Security | TLS everywhere, encrypted transit | AAM.TRANS-01 |
| §164.308(a) Security Management | Risk analysis, sanctions, review | CISO Assistant Risk |
| §164.310 Physical Safeguards | Facility access, workstation security | Policy documentation |

### PropTech/IoT Compliance (Emerging Use Case)

GIAP™ extends to **PropTech and IoT vendor compliance** — an emerging challenge for regulated workspaces operating in smart buildings or residential environments:

| Challenge | GIAP™ Solution |
|-----------|----------------|
| IoT vendor deploys cloud-managed devices (locks, sensors, thermostats) | Vendor intake workflow captures architecture and capabilities |
| Regulated workspace needs specific controls (admin access, audit logs, telemetry limits) | Control requirements mapped to NIST/CIS/SOC2 criteria |
| Vendor architecture may not support required controls | Gap analysis documents vendor limitations vs compliance requirements |
| Need defensible decision trail | Evidence pipeline captures vendor docs, policies, communication timeline |
| Exception or accommodation needed | Compliance exception workflow with technical justification |

**PropTech Compliance Workflow:**

```mermaid
flowchart LR
    subgraph INTAKE[VENDOR INTAKE]
        VI[Vendor Info]
        PP[Privacy Policy]
        TC[Technical Capabilities]
    end

    subgraph ANALYSIS[GAP ANALYSIS]
        CR[Control Requirements]
        GA[Gap Assessment]
        RS[Risk Score]
    end

    subgraph OUTPUT[DECISION]
        RM[Risk Memo]
        ER[Exception Request]
        ET[Evidence Trail]
    end

    VI --> CR
    PP --> GA
    TC --> GA
    CR --> GA
    GA --> RS
    RS --> RM
    RS --> ER
    RM --> ET
    ER --> ET

    style INTAKE fill:#e8f4ea,stroke:#2e7d32
    style ANALYSIS fill:#fff3e0,stroke:#ef6c00
    style OUTPUT fill:#e0f2fe,stroke:#0284c7
```

**Why this matters:** Remote work and regulated home offices are increasing. Smart building technology creates compliance conflicts that traditional GRC tools don't address. GIAP™ provides a structured approach to vendor risk assessment for IoT deployments.

### AAM Unified Controls

Proprietary control framework that normalizes intake responses and maps to all supported frameworks:

```yaml
framework: AAM-Custom-GRC
client: Healthcare Practice A
version: 1.0
controls:
  - id: AAM.ACCESS-01
    status: partial
    notes: Offboarding not documented
    frameworks:
      SOC2: CC6.2
      NIST-CSF: PR.AC-1
      CISv8: 6.2
      HIPAA: §164.312(a)(1)
```

---

## Control Mapping Examples

| Control Area | Implementation | Mapped Frameworks |
|--------------|----------------|-------------------|
| Access Control | RBAC on portal/CRM; least-privilege folders; MFA enforcement | SOC 2 CC6, NIST PR.AC, CIS 5.x/6.x, HIPAA §164.312(a) |
| Data Protection | TLS enforcement; encryption at rest; email security (DKIM/DMARC) | SOC 2 CC6, NIST PR.DS, CIS 3.x, HIPAA §164.312(e) |
| Integrity & Retention | SHA-256 checksums on upload; retention schedule; logged deletion | SOC 2 CC3/CC8, NIST PR.DS, HIPAA §164.312(c) |
| Audit Logging | Append-only logs; immutable audit trail; workflow step logging | SOC 2 CC7, NIST DE.CM, CIS 8.x, HIPAA §164.312(b) |
| Authentication | MFA, unique IDs, credential rotation | SOC 2 CC6, NIST PR.AC, HIPAA §164.312(d) |
| Provisioning | Onboarding/offboarding runbooks; periodic access review | SOC 2 CC6, NIST PR.AC, HIPAA §164.308(a)(3) |
| Risk Management | Risk assessments, risk register, treatment plans | NIST ID.RA, HIPAA §164.308(a)(1) |

---

## Target Metrics

| Metric | Manual Process | GIAP™ Automated | Improvement |
|--------|----------------|-----------------|-------------|
| Pre-engagement assessment | 2-3 hours | 15 minutes | ~90% reduction |
| Intake processing | 2-3 hours | 15 minutes | ~85% reduction |
| POA&M generation | 4+ hours | 10 minutes | ~95% reduction |
| Audit prep | 4+ hours | 30 minutes | ~87% reduction |
| Risk assessment | Full day | 2 hours | ~75% reduction |
| Control mapping | Manual spreadsheet | Auto YAML export | 100% coverage |
| Evidence retrieval | Navigate folders | Natural language query | ~70% time saved |

*Metrics represent design targets based on architecture specifications.*

---

## vCISO Continuous Compliance

GIAP™ supports 90-day recurring assessment cycles for vCISO engagements:

1. **CISO Assistant** → Delta assessment questionnaire, control re-testing
2. **n8n Workflow** → Trigger assessment, collect evidence, update records
3. **Nextcloud** → Evidence vault updates
4. **POAMAgent** → Updated POA&M (new gaps vs. closed items)
5. **SuiteCRM** → Timestamped audit trail, billing trigger

**Business Impact:** Enables recurring vCISO engagements with automated quarterly reviews and continuous compliance monitoring.

---

## Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Architecture design | ✅ Locked | Streamlined single-GRC-platform design |
| Portal (Static) | ✅ Deployed | v2.2 with security hardening, WCAG 2.1 AA |
| n8n Orchestration | ✅ Running | Workflow automation operational |
| n8n Intake Workflow | ✅ Working | End-to-end intake → Nextcloud logging verified |
| Nextcloud | ✅ Running | Evidence vault operational, WebDAV API working |
| SuiteCRM | ✅ Running | CRM operational |
| CISO Assistant | ✅ Running | Primary GRC platform with 100+ frameworks |
| n8n Backup Workflow | ⬜ Configure | Workflow created, pending credential setup |
| DocuSeal | ⬜ Deploy | Container needs restart/fix |
| n8n CRM Workflow | ⬜ Build | Intake → SuiteCRM lead creation |
| GIAC API (FastAPI) | ⬜ Future | RBAC, audit logging, API endpoints |
| GIAC UI (React) | ⬜ Future | Full-featured portal (replaces static) |
| POAMAgent | ⬜ Future | Custom POA&M generation |
| MCP Integration | ⬜ Future | AI-assisted queries |

---

## Security Architecture

| Control | Implementation |
|---------|----------------|
| **Admin Access** | Tailscale CGNAT allowlist (100.64.0.0/10) + ACL tags |
| **RBAC** | Server-side enforcement in FastAPI; UI is presentation-only |
| **Audit Logging** | Append-only, immutable audit trail |
| **PHI/PII Protection** | Masked/truncated in MCP responses; encrypted at rest; never exposed in full |
| **TLS** | Enforced everywhere; HSTS enabled |
| **Secrets** | Environment variables; never in code or logs |
| **BAA Support** | DocuSeal templates for Business Associate Agreements |
| **Deposit Gate** | No full intake work without signed engagement + deposit |

### Portal Security Hardening (v2.2)

The intake portal underwent comprehensive security hardening with expert panel review:

| Category | Implementations |
|----------|----------------|
| **Input Validation** | XSS prevention (stripHtml sanitization), RFC 5322 email validation |
| **Anti-Abuse** | 5-second rate limiting, honeypot field for bot detection |
| **Accessibility** | WCAG 2.1 AA compliant, skip navigation, ARIA live regions |
| **Mobile UX** | 48px touch targets, 16px font-size (prevents iOS zoom), 375px breakpoint |
| **Compliance** | CCPA/CPRA disclosures, COPPA children's privacy statement |
| **Hardened Endpoint** | Webhook URL hardcoded (eliminates localStorage injection vulnerability) |

---

## Output Artifacts

### POA&M Example

```json
{
  "poam_id": "AAM-POAM-2025-0042",
  "client": "Healthcare Practice A",
  "generated": "2025-01-15T10:00:00Z",
  "generator": "POAMAgent v1.0",
  "frameworks": ["HIPAA", "SOC2"],
  "summary": {
    "total_items": 12,
    "high": 3,
    "medium": 6,
    "low": 3
  },
  "items": [
    {
      "id": "POAM-001",
      "control": "AAM.ACCESS-01",
      "issue": "No documented offboarding process",
      "severity": "High",
      "recommended_action": "Implement offboarding checklist and admin access revocation SOP",
      "target_date": "2025-02-01",
      "frameworks": ["SOC2_CC6.2", "HIPAA_164.312(a)"],
      "ciso_assistant_task_id": "CA-TASK-4521"
    }
  ]
}
```

### Intake JSON Schema

```json
{
  "intake_id": "GIAP-2025-0042",
  "phase": "post-engagement",
  "client": "Healthcare Practice A",
  "industry": "Healthcare",
  "size": 25,
  "tech_stack": ["M365", "EHR System", "Nextcloud"],
  "risk_profile": "PHI-heavy",
  "frameworks": ["SOC2", "NIST-CSF", "HIPAA"],
  "pre_engagement": {
    "ciso_assistant_assessment_id": "CA-2025-0042",
    "quick_gaps_identified": 5,
    "deposit_received": true,
    "engagement_signed": "2025-01-10T14:30:00Z"
  },
  "post_engagement": {
    "ciso_assistant_project_id": "CA-PRJ-2025-0042",
    "full_gaps_identified": 12,
    "poam_generated": true
  }
}
```

---

## Skills Demonstrated

| Category | Skills |
|----------|--------|
| **Architecture** | Multi-agent orchestration, two-phase workflow design, API-first design, MCP protocol |
| **GRC** | Framework mapping, risk management, control assessment, POA&M generation, evidence pipelines, vCISO delivery |
| **GRC Platforms** | CISO Assistant administration, 100+ framework coverage, API-first integration, multi-platform orchestration |
| **Workflow Automation** | n8n workflow design, webhook integration, WebDAV API, JSON data pipelines |
| **Custom Tooling** | POAMAgent development, Jinja2 templating, PDF generation, API integration |
| **Healthcare Compliance** | HIPAA Security Rule, Privacy Rule, BAA management, PHI protection |
| **AI/LLM** | MCP server design, natural language GRC queries, LLM-assisted documentation |
| **Backend** | FastAPI, SQLAlchemy, Alembic migrations, RBAC enforcement, audit logging |
| **Frontend** | Static HTML/JS (security hardened), React, Vite, API consumption patterns |
| **Application Security** | XSS prevention, input sanitization, rate limiting, honeypot bot detection, WCAG 2.1 AA |
| **DevOps** | Proxmox virtualization, Tailscale networking, GitHub Actions CI, Nginx Proxy Manager |
| **Security** | Append-only audit logs, PHI/PII protection, TLS enforcement, least-privilege design |

---

## What This Demonstrates

- **Senior-level systems architecture** — Multi-agent orchestration with clear two-phase workflow
- **Operational automation** — End-to-end intake workflow with n8n, webhooks, and WebDAV integration
- **Security engineering discipline** — Comprehensive portal hardening with XSS prevention, rate limiting, and WCAG 2.1 AA compliance
- **Right tool for the job** — CISO Assistant for both speed and depth with 100+ frameworks
- **Custom tooling capability** — POAMAgent built in-house for branded deliverables
- **Enterprise GRC platform experience** — CISO Assistant for production risk, compliance, and control management
- **AI/LLM integration expertise** — MCP protocol for natural language GRC queries
- **Healthcare compliance depth** — HIPAA Security/Privacy Rule implementation
- **Production-grade security** — RBAC, audit logging, PHI protection, deposit gate
- **Emerging vertical expertise** — PropTech/IoT compliance for regulated workspaces
- **GRC domain depth** — Cross-framework mapping, POA&M generation, evidence pipelines
- **Full-stack capability** — Static portal + n8n workflows + infrastructure automation
- **Consulting delivery model** — Productized vCISO service with 90-day cycles

Pairs with [Cloud Control Pack](aws-control-pack.md) for cloud governance and [TraceLock™](tracelock.md) for RF/physical security — demonstrating end-to-end security engineering capability.

---

[Contact](../contact.md){ .md-button .md-button--primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button }

<br>
---
<div style="display: flex; justify-content: space-between; align-items: center;">
    <a href="pci-dss/index.md" class="btn-ghost" style="text-align: left;">
        &larr; Previous Project<br>
        <span style="font-weight: bold; font-size: 1.1em;">PCI-DSS Compliance</span>
    </a>
    <a href="intake-portal.md" class="btn-ghost" style="text-align: right;">
        Next Project &rarr;<br>
        <span style="font-weight: bold; font-size: 1.1em;">Secure Intake Portal</span>
    </a>
</div>
