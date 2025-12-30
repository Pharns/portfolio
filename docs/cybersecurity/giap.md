---
description: Multi-agent GRC automation platform with MCP integration — 7-agent pipeline orchestrating intake, CRM sync, legal automation, control mapping, and POA&M generation across SOC 2, NIST CSF, CIS v8, and CPRA frameworks.
---
# GIAP™ — Multi-Agent GRC Automation Platform
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

!!! tldr "For recruiters & hiring managers"
    **What:** 7-agent GRC automation platform with AI/LLM integration via Model Context Protocol (MCP). Orchestrates client intake, CRM sync, legal document automation, cross-framework control mapping, POA&M generation, and remediation task creation.

    **Why this matters:** Demonstrates senior-level systems architecture, multi-agent orchestration, API-first design, and AI integration — the kind of automation that transforms manual GRC processes into scalable, audit-ready workflows.

    **Impact:** Reduces audit prep time by ~70% through natural language queries; automates end-to-end GRC lifecycle from intake to remediation tracking.

    **Skills:** Multi-Agent Architecture · MCP/LLM Integration · FastAPI · React · GRC Automation · Control Mapping · SOC 2 · NIST CSF · CIS v8 · CPRA · Evidence Pipelines · API Design · RBAC · Audit Logging

---

!!! info "Project Status: Architecture Complete, Implementation Active"
    **Infrastructure:** Deployed — Multi-VM Proxmox stack with Nextcloud, n8n, SuiteCRM, DocuSeal, and CISO Assistant.

    **Architecture:** Complete — 7-agent pipeline designed, MCP integration specified, API scaffolded.

    **Implementation:** Active — FastAPI backend and React frontend in development; agent integration in progress.

---

## Architecture Overview

GIAP™ is a modular, multi-agent GRC automation platform that converts unstructured client onboarding into structured, audit-ready outputs:

```
┌─────────────────────────────────────────────────────────────────────┐
│                     Claude / AI Assistant                            │
└─────────────────────────────────────────────────────────────────────┘
                                 │ MCP Protocol
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       MCP Server Layer                               │
│  ┌───────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │ giap-crm  │  │giap-controls │  │giap-evidence │  │ giap-poam  │  │
│  └─────┬─────┘  └──────┬───────┘  └──────┬───────┘  └─────┬──────┘  │
└────────┼───────────────┼─────────────────┼────────────────┼─────────┘
         │               │                 │                │
         ▼               ▼                 ▼                ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐
│  SuiteCRM   │  │    CISO     │  │  Nextcloud  │  │ GIAP Database   │
│  (Clients,  │  │  Assistant  │  │  (Evidence, │  │ (POA&M, Gaps,   │
│   Intakes)  │  │ (Frameworks)│  │  Documents) │  │  Tasks)         │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────────┘
```

---

## Multi-Agent Pipeline (7 Agents)

| Agent | Function | Input | Output |
|-------|----------|-------|--------|
| **BrainAgent** | Orchestrator — routes work, validates data, maintains state | Triggers (form, CRM, webhook) | Job routing decisions |
| **IntakeAgent** | Normalizes form inputs → structured JSON | Raw form data | Industry, risk profile, frameworks, tech stack |
| **CRMAgent** | SuiteCRM sync — single source of truth | Structured intake | Account/Contact/Intake records |
| **DocuSealAgent** | Engagement letter + DPA automation | CRM client data | Signed PDFs via e-signature |
| **MapperAgent** | Intake → AAM Unified Controls → CISO Assistant YAML | Intake JSON | Cross-framework gap analysis |
| **POAMAgent** | Generates prioritized POA&M | Mapped controls | MD/CSV/PDF remediation plan |
| **RemediationAgent** | Creates actionable tasks and SOPs | POA&M items | CRM tasks, evidence checklists |

### Data Flow

```
[BrainAgent] → [IntakeAgent] → [CRMAgent] ⇆ SuiteCRM
                                    ↓
                            [DocuSealAgent] ⇆ DocuSeal → Nextcloud
                                    ↓
                            [MapperAgent] ⇆ AAM Controls ⇆ CISO Assistant
                                    ↓
                              [POAMAgent]
                                    ↓
                          [RemediationAgent] ⇆ CRM Tasks
```

---

## AI/LLM Integration (MCP Protocol)

GIAP™ integrates with Claude and other AI assistants via **Model Context Protocol (MCP)**, enabling natural language queries against GRC data:

| MCP Server | Data Source | Example Queries |
|------------|-------------|-----------------|
| `giap-crm` | SuiteCRM | "Show all pending intakes" / "What's the engagement status for Client X?" |
| `giap-controls` | CISO Assistant | "What's the status of access controls for Client X?" / "Show SOC 2 gaps" |
| `giap-evidence` | Nextcloud | "Show the signed NDA for Client X" / "What evidence is missing for CC6.1?" |
| `giap-poam` | GIAP Database | "Generate a POA&M for Client X" / "What are the top 5 high-risk items?" |

### Example Conversation

```
User: I have a SOC 2 audit coming up for Bloomfield Law. Help me prepare.

Claude: [Reads giap://controls/clients/bloomfield-law/status]
        [Reads giap://evidence/clients/bloomfield-law]
        [Reads giap://poam/clients/bloomfield-law]

Based on my review:
- 47 of 52 SOC 2 controls are fully implemented
- 5 controls have gaps (CC6.2, CC6.3, CC7.1, CC7.2, CC8.1)
- Evidence is complete for 44 controls

Priority actions before audit:
1. Close POAM-012: Access review documentation (CC6.2)
2. Upload firewall change logs for CC7.1
3. Complete vendor assessment for CC7.2
```

**Impact:** Reduces audit prep time by ~70% through conversational GRC queries.

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Backend** | Python 3.11 + FastAPI | API-first GRC primitives, RBAC, audit logging |
| **Frontend** | React + Vite | Thin UI consuming API (security logic server-side) |
| **Database** | PostgreSQL / SQLite | Intake data, POA&M, audit trails |
| **ORM** | SQLAlchemy + Alembic | Schema management, migrations |
| **Automation** | n8n | Workflow orchestration, notifications |
| **CRM** | SuiteCRM (remote MySQL) | Client records, intake tracking |
| **Signatures** | DocuSeal (self-hosted) | Engagement letters, DPAs, NDAs |
| **Files** | Nextcloud | Evidence vault, document storage |
| **GRC Platform** | CISO Assistant | Framework management, control tracking |
| **Proxy** | Nginx Proxy Manager | TLS termination, routing |
| **Infrastructure** | Proxmox LXC/VM | Isolated service VMs |
| **Access** | Tailscale | Admin routes restricted by CGNAT + ACL |
| **CI/CD** | GitHub Actions | Lint, test, build validation |

---

## Framework Coverage

| Framework | Status | Integration |
|-----------|--------|-------------|
| **SOC 2** | Full mapping | CISO Assistant import |
| **NIST CSF v2.0** | Full mapping | CISO Assistant import |
| **CIS Controls v8** | Full mapping | CISO Assistant import |
| **CPRA** | Full mapping | CISO Assistant import |
| **ISO 27001** | Partial | Planned |
| **AAM Unified Controls** | Proprietary | Cross-framework master mapping |

### AAM Unified Controls

Proprietary control framework that normalizes intake responses and maps to all supported frameworks:

```yaml
framework: AAM-Custom-GRC
client: Law Firm A
version: 1.0
controls:
  - id: AAM.ACCESS-01
    status: partial
    notes: Offboarding not documented
    frameworks:
      SOC2: CC6.2
      NIST-CSF: PR.AC-1
      CISv8: 6.2
```

---

## Control Mapping Examples

| Control Area | Implementation | Mapped Frameworks |
|--------------|----------------|-------------------|
| Access Control | RBAC on portal/CRM; least-privilege folders; MFA enforcement | SOC 2 CC6, NIST PR.AC, CIS 5.x/6.x |
| Data Protection | TLS enforcement; encryption at rest; email security (DKIM/DMARC) | SOC 2 CC6, NIST PR.DS, CIS 3.x |
| Integrity & Retention | SHA-256 checksums on upload; retention schedule; logged deletion | SOC 2 CC3/CC8, NIST PR.DS |
| Audit Logging | Append-only logs; immutable audit trail; workflow step logging | SOC 2 CC7, NIST DE.CM, CIS 8.x |
| Provisioning | Onboarding/offboarding runbooks; periodic access review | SOC 2 CC6, NIST PR.AC |

---

## Target Metrics

| Metric | Manual Process | GIAP™ Automated | Improvement |
|--------|----------------|-----------------|-------------|
| Intake processing | 2-3 hours | 15 minutes | ~85% reduction |
| POA&M generation | 4+ hours | 10 minutes | ~95% reduction |
| Audit prep | 4+ hours | 30 minutes | ~87% reduction |
| Control mapping | Manual spreadsheet | Auto YAML export | 100% coverage |
| Evidence retrieval | Navigate folders | Natural language query | ~70% time saved |
| Data integrity | Manual spot-check | Automatic SHA-256 | 100% coverage |

*Metrics represent design targets based on architecture specifications.*

---

## vCISO Continuous Compliance

GIAP™ supports 90-day recurring assessment cycles for vCISO engagements:

1. **IntakeAgent** → Mini-assessment questionnaire
2. **MapperAgent** → Updated control YAML (delta analysis)
3. **POAMAgent** → Updated POA&M (new gaps vs. closed items)
4. **RemediationAgent** → Task updates, evidence requests
5. **CRMAgent** → Timestamped audit trail

**Business Impact:** Enables recurring vCISO engagements with automated quarterly reviews and continuous compliance monitoring.

---

## Implementation Status

| Phase | Status | Notes |
|-------|--------|-------|
| Architecture design | ✅ Complete | 7-agent pipeline, MCP integration spec |
| Infrastructure deployment | ✅ Complete | Proxmox VMs running all services |
| Framework mapping | ✅ Complete | SOC 2, NIST CSF, CIS v8, CPRA |
| FastAPI backend scaffold | ✅ Complete | giac-api with Poetry, Makefile |
| React frontend scaffold | ✅ Complete | giac-ui with pnpm, Makefile |
| MCP server architecture | ✅ Complete | 4 servers specified |
| Agent implementation | 🔄 In Progress | BrainAgent, IntakeAgent first |
| System integration | 🔄 In Progress | CRM ↔ DocuSeal ↔ CISO Assistant |
| MCP server implementation | ⏳ Pending | Post-core agent completion |

---

## Security Architecture

| Control | Implementation |
|---------|----------------|
| **Admin Access** | Tailscale CGNAT allowlist (100.64.0.0/10) + ACL tags |
| **RBAC** | Server-side enforcement in FastAPI; UI is presentation-only |
| **Audit Logging** | Append-only, immutable audit trail |
| **PII Protection** | Masked/truncated in MCP responses; never exposed in full |
| **TLS** | Enforced everywhere; HSTS enabled |
| **Secrets** | Environment variables; never in code or logs |

---

## Output Artifacts

### POA&M Example

```json
{
  "poam_items": [
    {
      "id": "POAM-001",
      "control": "AAM.ACCESS-01",
      "issue": "No documented offboarding process",
      "severity": "High",
      "recommended_action": "Implement offboarding checklist and admin access revocation SOP",
      "target_date": "2025-02-01",
      "frameworks": ["SOC2_CC6.2", "NIST_PR.AC-1", "CIS_6.2"]
    }
  ]
}
```

### Intake JSON Schema

```json
{
  "intake_id": "GIAP-2025-0042",
  "client": "Law Firm A",
  "industry": "Legal Services",
  "size": 25,
  "tech_stack": ["M365", "Nextcloud"],
  "risk_profile": "HNWI-heavy",
  "frameworks": ["SOC2", "NIST-CSF", "CPRA"],
  "consent_captured": true,
  "integrity_hashes": { "doc_001": "sha256:..." },
  "controls_mapped": ["AAM.ACCESS-01", "AAM.DATA-01"],
  "audit_trail": [
    {"action": "intake_started", "timestamp": "2025-01-15T10:00:00Z"},
    {"action": "consent_captured", "timestamp": "2025-01-15T10:02:00Z"},
    {"action": "documents_uploaded", "timestamp": "2025-01-15T10:15:00Z"},
    {"action": "integrity_verified", "timestamp": "2025-01-15T10:15:01Z"}
  ]
}
```

---

## Skills Demonstrated

| Category | Skills |
|----------|--------|
| **Architecture** | Multi-agent orchestration, API-first design, event-driven workflows, MCP protocol |
| **GRC** | Framework mapping, control assessment, POA&M generation, evidence pipelines, vCISO delivery |
| **AI/LLM** | MCP server design, natural language GRC queries, LLM-assisted documentation |
| **Backend** | FastAPI, SQLAlchemy, Alembic migrations, RBAC enforcement, audit logging |
| **Frontend** | React, Vite, API consumption patterns |
| **DevOps** | Proxmox virtualization, Tailscale networking, GitHub Actions CI |
| **Security** | Append-only audit logs, PII protection, TLS enforcement, least-privilege design |

---

## What This Demonstrates

- **Senior-level systems architecture** — Multi-agent orchestration with clear separation of concerns
- **AI/LLM integration expertise** — MCP protocol for natural language GRC queries
- **Production-grade security** — RBAC, audit logging, PII protection, network segmentation
- **GRC domain depth** — Cross-framework mapping, POA&M generation, evidence pipelines
- **Full-stack capability** — FastAPI + React + infrastructure automation
- **Consulting delivery model** — Productized vCISO service with 90-day cycles

Pairs with [Cloud Control Pack](aws-control-pack.md) for cloud governance and [TraceLock™](tracelock.md) for RF/physical security — demonstrating end-to-end security engineering capability.

---

[Contact](../contact.md){ .md-button .md-button--primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button }
