---
description: "SDOS — Security Decision Operating System. Runtime AI governance framework cataloged in the NIST OLIR catalog as a Trifecta of Draft Informative References against AI RMF 1.0 (Ref 212), CSF 2.0 (Ref 215), and SP 800-53 Rev 5.2.0 (Ref 217). Infrastructure-layer policy enforcement, deny-all-default posture, patent-filed governed autonomous execution."
---

# SDOS™ — Security Decision Operating System

*Patent-Filed AI Governance Runtime · NIST OLIR Trifecta Cataloged (Refs 212/215/217) · U.S. Provisionals 64/029,300 + 64/049,300 + 64/067,427 + 64/069,200*

!!! success "For Hiring Managers — Security Architecture / AI Governance"

    **What I Built:** A production AI governance runtime that enforces policy at the infrastructure layer — before AI agents reason, select tools, or execute actions. Not prompt engineering. Not guardrails bolted on after the fact. Architectural containment.

    **Technical Stack:** Python 3.10+ · SQLite · REST API · MCP Protocol · Cryptographic Module Signing · Multi-Agent Governance Architecture

    **Security Engineering Skills Demonstrated:**

    - Deny-all-default policy enforcement across autonomous AI agents
    - Risk-classified policy enforcement at the infrastructure layer
    - Tamper-evident audit trails independent of model self-reporting
    - Production deployment with continuous health monitoring
    - Compliance mapping across NIST AI RMF (cataloged in the NIST OLIR catalog — Reference ID 212), NIST CSF 2.0 (Reference ID 215), NIST SP 800-53 Rev 5.2.0 (Reference ID 217), ISO 42001, and EU AI Act

    **Why This Matters:** The industry is deploying AI agents faster than it can govern them. I built the governance layer that contains them — and filed the patent on it.

---

## The problem no one is solving

AI agents are being deployed into enterprise environments at an accelerating rate. They select their own tools, decide which APIs to call, choose when to escalate, and determine what data to access. The governance model for most of these deployments amounts to one thing: trusting the model to police itself.

That is not governance. That is hope.

The current landscape of AI agent governance falls into a few categories, and none of them solve the actual problem:

**Prompt-level guardrails.** System prompts that say "don't do harmful things." These are suggestions to a statistical model, not enforceable policy. A sufficiently creative prompt injection, a model update that shifts behavior, or a multi-step reasoning chain that rationalizes an exception — any of these can bypass prompt-level controls. There is no enforcement mechanism. There is no audit trail that exists independent of the model's own reporting.

**API rate limiting.** Throttling how many calls an agent can make per minute does nothing to govern *what* it does with each call. An agent that exfiltrates data on its first API call is not governed by a rate limiter. This is capacity management masquerading as security.

**Framework-level guardrails.** Libraries and SDKs that wrap model calls with validation logic. These are better than prompts, but they operate at the same layer as the model itself. The agent's execution environment is the governance environment, which means the agent has potential access to the governance logic. More critically, these frameworks depend on developers implementing them correctly in every integration — a single missed wrapper and the governance evaporates.

**Post-hoc monitoring.** Log aggregation and anomaly detection after actions have already been executed. Valuable for forensics, insufficient for prevention. By the time the monitoring catches the problem, the data has been accessed, the API has been called, the action has been taken.

The missing piece is architectural. Governance must exist at a layer the agent cannot reach, cannot modify, and cannot reason its way around. It must enforce policy before execution, not after. And it must produce audit evidence that is independent of the model's self-assessment.

That is what SDOS does.

---

## What SDOS is

SDOS — the Security Decision Operating System — is a governance runtime that sits between AI agents and the actions they attempt to take. Every tool call, every data access request, every external API invocation passes through SDOS before it executes. Nothing runs unless SDOS explicitly permits it.

!!! info "Patent-filed"

    SDOS is protected under USPTO Provisional Patent Applications 64/029,300, 64/049,300, and 64/067,427, filed April 4, April 25, and May 16, 2026. The filings cover 44 patent families with 302 total claims across three provisionals. The intellectual property is held by a dedicated IP holding entity.

The core design principle is simple: **deny all by default.** An AI agent operating under SDOS has zero permissions until policy explicitly grants them. This inverts the typical AI deployment model, where agents start with broad access and teams scramble to restrict it after incidents occur.

SDOS classifies every agent action by risk level before execution. Classification happens at the infrastructure layer, not inside the model. The agent does not decide its own risk level. The agent does not know what classification a given action receives until SDOS returns a permit or deny decision. This is the distinction between self-governance (which is not governance) and architectural governance (which is).

Multiple independent enforcement points evaluate each action across the governance pipeline. An agent cannot route around them because they exist at a layer below the agent's execution environment.

### Tamper-evident audit trails

Every policy decision — permit, deny, escalate — is logged at the infrastructure layer with tamper-evident properties. This audit trail is not generated by the model. It is not a summary of what the model says it did. It is an independent record of what SDOS actually allowed and blocked.

This distinction matters enormously for compliance. Regulators, auditors, and security teams need evidence of governance that does not depend on the governed system's self-reporting. SDOS produces exactly that.

---

## How SDOS differs from everything else

Most AI governance approaches operate at the same layer as the AI itself. SDOS operates below it. The agent cannot modify, bypass, or reason around infrastructure-layer policy any more than a Docker container can modify its host kernel. This is not a philosophical difference — it is an architectural one with direct security implications.

Where prompt-level governance is security by suggestion, and application-level governance is security by retrospection, SDOS provides security by architecture. Policy enforcement happens before the model receives the task, not after the model has already acted.

This means SDOS survives prompt injection, model updates, and multi-agent coordination scenarios that defeat approaches operating at the model layer. The governance layer is structurally independent of the governed system.

---

## Operational evidence

SDOS is not a whitepaper or a roadmap. It is running in production today, governing a multi-agent system.

The platform governs tool modules spanning security operations domains, with cryptographically signed module manifests preventing unauthorized modification of the tool definitions that agents consume. Production module updates deploy without service interruption.

!!! tip "Why module signing matters"

    Without signed module manifests, a compromised or misconfigured module could present a tool that bypasses governance. Cryptographic signing ensures that the tools SDOS presents to agents are exactly the tools that were approved. This is supply-chain security applied to AI tool ecosystems.

### Compliance alignment

SDOS maps directly to established governance frameworks through tested control implementations:

| Framework | Coverage | NIST OLIR Status |
|-----------|----------|------------------|
| **NIST AI RMF 1.0** | Risk management functions mapped to SDOS enforcement points | Cataloged (Reference ID 212) |
| **NIST CSF 2.0** | Cybersecurity governance functions mapped to SDOS controls | Cataloged (Reference ID 215) |
| **NIST SP 800-53 Rev 5.2.0** | Federal control catalog mapped to SDOS operational controls | Cataloged (Reference ID 217) |
| **ISO 42001** | AI management system controls aligned to SDOS governance architecture | Not applicable (non-NIST) |
| **EU AI Act** | High-risk AI system requirements addressed through risk classification and audit trails | Not applicable (non-NIST) |
| **SOC 2 Type II** | Trust service criteria addressable through SDOS audit evidence | Not applicable (non-NIST) |

These are not aspirational mappings. Compliance control mappings are implemented and testable in the current production deployment.

---

## NIST OLIR catalog recognition

!!! success "Cataloged in the NIST OLIR catalog — Trifecta of Draft Informative References"

    **Listings cataloged:**

    - **SDOS-RuntimeGov-to-AI-RMF-v1.0** — Reference ID 212 · Focal: NIST AI Risk Management Framework 1.0 (NIST AI 100-1) · 49 AI RMF subcategories mapped · Posted 2026-05-13 · Public review through ~2026-06-12 · [View catalog](https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=212){target=_blank}
    - **SDOS-RuntimeGov-to-CSF-2.0-v1.0** — Reference ID 215 · Focal: NIST Cybersecurity Framework 2.0 (NIST CSWP 29) · 76 of 106 CSF 2.0 subcategories mapped · Posted 2026-05-21 · Public review through ~2026-06-20 · [View catalog](https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=215){target=_blank}
    - **SDOS-RuntimeGov-to-SP-800-53-Rev-5.2.0-v1.0** — Reference ID 217 · Focal: NIST Special Publication 800-53 Revision 5.2.0 · 269 of 622 SP 800-53 controls mapped across 10 control families · Posted 2026-05-21 · Public review through ~2026-06-20 · [View catalog](https://csrc.nist.gov/projects/olir/informative-reference-catalog/details?referenceId=217){target=_blank}

    **Relationship type (all three):** Concept Crosswalk — Supportive
    **Status (all three):** Draft Informative Reference in public review

OLIR — the NIST Online Informative References Program — is the federal registry of frameworks that map to NIST core standards. Inclusion is an informative reference, not a NIST endorsement of the framework. The Trifecta listing means any organization implementing NIST AI RMF 1.0, NIST Cybersecurity Framework 2.0, or NIST SP 800-53 Rev 5.2.0 has a publicly cataloged pathway to a runtime governance layer that enforces policy at the infrastructure layer.

The mappings are concrete and reviewable. Every one of the 49 AI RMF subcategories, 76 CSF 2.0 subcategories, and 269 SP 800-53 controls that SDOS addresses is documented in the corresponding OLIR submission with the SDOS control and the rationale for the relationship type. Organizations evaluating AI RMF, CSF 2.0, or SP 800-53 alignment can read the crosswalks directly from the catalog rather than from a vendor whitepaper.

The submissions were prepared and accepted under standard NIST OLIR Program review — solo authorship, no consortium, no co-author institutional backing. Each crosswalk was screened by the OLIR program, formatted to NISTIR 8278Ar1 standards, and accepted into the catalog under the standard review process. The public review windows invite public comment through NIST's official channels. Any reviewer with substantive concerns about the crosswalks is invited to submit them there.

The Trifecta is the first dispatch-time enforcement framework cataloged in the NIST OLIR program at the runtime layer across all three of these federal references — distinct from the process and accountability frameworks also in the catalog. The catalog currently spans three architectural layers of AI governance. **Layer 1 — Process/Adoption** covers methodology frameworks that govern how organizations adopt AI. **Layer 2 — Operational/Accountability** covers control overlays that govern accountability, traceability, and audit response across the AI lifecycle. **Layer 3 — Runtime** covers frameworks that classify risk, bound authority, and enforce policy at the moment of agent action. SDOS occupies Layer 3 — alone in the OLIR catalog at this layer across all three federal references.

A fourth submission (SDOS-RuntimeGov-to-AI-600-1-v1.0, filed 2026-05-17 against the NIST AI 600-1 GenAI Profile) was declined by the OLIR Program pending NIST's focal-document inclusion of AI 600-1 — the framework's AI 600-1 mapping (345 mapped action IDs) remains published on the SDOS reference site.

---

## The competitive landscape

I have conducted competitive analysis across the AI governance space. The landscape broadly divides into three categories:

**Governance toolkits and frameworks.** These provide libraries, templates, and guidelines for teams to build their own governance. They are useful as starting points but require significant implementation effort and do not enforce anything at the infrastructure layer. The governance exists only if the development team implements it correctly — and continues to maintain it.

**Gateway and proxy solutions.** These sit between AI agents and external APIs, filtering requests. They address network-level concerns but do not govern internal tool selection, risk classification at dispatch, or multi-agent coordination. They are perimeter controls for a problem that requires interior enforcement.

**Model-layer safety tools.** These include constitutional AI approaches, RLHF-based alignment, and output filtering. They improve model behavior in aggregate but cannot guarantee enforcement on any individual action. They are statistical, not deterministic.

SDOS fills a gap that none of these categories address: infrastructure-layer governance that enforces policy before the agent acts, produces tamper-evident audit evidence, and scales across multi-agent deployments from a unified policy engine.

---

## Patent status

!!! info "Intellectual property"

    **Provisional Patent Applications:** USPTO 64/029,300 + 64/049,300
    **Filed:** April 4, 2026 + April 25, 2026
    **Coverage:** 44 patent families, 302 total claims across 3 provisionals
    **Assignee:** Dedicated IP holding entity
    **Status:** Non-provisional filing in preparation (accelerated timeline)

The patent portfolio covers the full governance architecture — from risk classification at the core through modular tool governance, edge enforcement, and multi-agent coordination. The breadth of the filing reflects the scope of the problem: governing AI agents is not a single-feature solution, it is an architectural system that must address every layer where an agent can act.

---

## Who needs this

SDOS is relevant to any organization deploying AI agents beyond simple chatbot interfaces. The moment an AI agent can take actions — call APIs, access databases, modify files, communicate with external systems — governance becomes a security requirement, not a nice-to-have.

**Enterprise AI deployments.** Organizations running multi-agent systems, AI-powered automation, or LLM-integrated workflows need governance that scales with agent count and does not depend on per-agent configuration. SDOS provides centralized policy enforcement across agent fleets.

**Federal and defense.** Government environments require audit-grade evidence of AI governance, deterministic policy enforcement, and compliance with emerging AI executive orders and NIST frameworks. SDOS produces the audit trail that procurement officers and inspectors general need to see.

**Regulated industries.** Healthcare, financial services, and critical infrastructure operators face regulatory requirements that will increasingly extend to AI systems. The EU AI Act is already in effect with enforcement beginning August 2026. SDOS provides the governance architecture these regulations demand.

**AI platform companies.** Any company building platforms that host third-party AI agents needs infrastructure-layer governance to prevent one agent from compromising another's data or exceeding its authorized scope. Multi-tenant AI governance is not optional — it is the table stakes for platform trust.

**Security teams.** CISOs and security architects evaluating AI deployments need a governance model they can defend to auditors, regulators, and boards. "We told the model to be safe" is not a defensible position. "We enforce policy at the infrastructure layer with tamper-evident audit trails" is.

---

## What this demonstrates

1. **I build governance architectures, not guardrails.** SDOS is infrastructure-layer enforcement — the kind of security architecture that survives adversarial conditions, not just cooperative ones.
2. **I understand the AI governance gap.** The industry is deploying agents faster than governance frameworks can keep up. I identified that gap and built a production system to close it.
3. **I operate at the intersection of security and AI.** This is not a security project that happens to involve AI, or an AI project that adds security as an afterthought. It is a system where security *is* the product.
4. **I ship production systems.** Production deployment, governed tool modules, compliance mappings across major frameworks, continuous health monitoring. This is operational, not theoretical.
5. **I protect intellectual property.** 44 patent families, 302 total claims across 3 provisionals, filed and prosecuting. I understand the value of what I build and I secure it accordingly.

---

## Related projects

- [AgenticOS — AI orchestration](agenticos.md) — Deterministic agent routing and execution layer that operates under SDOS governance
- [Agentic infrastructure audit](agentic-infrastructure-audit.md) — Multi-machine governance audit with drift detection and canonical architecture standards
- [TraceLock RF threat detection](../cybersecurity/tracelock.md) — Patent-filed multi-domain RF surveillance detection, governed by SDOS
- [Governed security architecture](../architecture/governed-security-architecture.md) — System-of-systems view showing how SDOS integrates across the full security stack

---

[Connect on LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button .md-button--primary }
[Contact Me](../contact.md){ .md-button }

---

## Frequently asked questions

### What is SDOS?

SDOS — the Security Decision Operating System — is a runtime AI governance framework that classifies every autonomous AI agent action by risk tier and enforces policy at the infrastructure layer before execution. It produces tamper-evident audit trails independent of model self-reporting. SDOS is cataloged in the NIST OLIR catalog as a Trifecta of Draft Informative References against AI RMF 1.0 (Reference ID 212), CSF 2.0 (Reference ID 215), and SP 800-53 Rev 5.2.0 (Reference ID 217).

### Is SDOS endorsed by NIST?

No. OLIR catalog inclusion is an informative reference, not a NIST endorsement. The cataloging means SDOS has been formally screened by the OLIR program and accepted as documented crosswalks to three federal references — AI Risk Management Framework 1.0 (Ref 212), Cybersecurity Framework 2.0 (Ref 215), and Special Publication 800-53 Rev 5.2.0 (Ref 217). It is federal infrastructure recognizing the mappings, not federal approval of the framework.

### How is SDOS different from AI guardrails or constitutional AI?

Guardrails and constitutional AI operate at the model layer. They are advisory — they shape model behavior but cannot deterministically prevent an action. SDOS operates at the infrastructure layer, below the model. It enforces policy before the agent executes, produces audit evidence independent of model self-assessment, and survives prompt injection, model updates, and multi-agent coordination scenarios that defeat model-layer approaches.

### What does the NIST OLIR mapping cover?

49 NIST AI RMF 1.0 subcategories across the GOVERN, MAP, MEASURE, and MANAGE functions are mapped to 24 SDOS controls across 9 governance domains. The full crosswalk is published in the OLIR catalog entry, with per-subcategory rationale for the supportive relationship type.

### When can organizations adopt SDOS?

SDOS is operational and governs a multi-agent production system today. The NIST OLIR listing provides a publicly reviewable reference for organizations evaluating AI RMF alignment. Commercial availability and licensing are managed through AAM Cyber. [Contact](../contact.md) for evaluation and engagement inquiries.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SDOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SDOS is a runtime AI governance framework that classifies every autonomous AI agent action by risk tier and enforces policy at the infrastructure layer before execution. It is listed in the NIST OLIR catalog as a draft informative reference mapping to AI RMF 1.0 (Reference ID 212)."
      }
    },
    {
      "@type": "Question",
      "name": "Is SDOS endorsed by NIST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. OLIR catalog inclusion is an informative reference, not a NIST endorsement. The listing means SDOS has been screened by the OLIR program and accepted as a documented crosswalk to AI Risk Management Framework 1.0."
      }
    },
    {
      "@type": "Question",
      "name": "How is SDOS different from AI guardrails or constitutional AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guardrails and constitutional AI operate at the model layer and are advisory. SDOS operates at the infrastructure layer below the model. It enforces policy before the agent executes and produces audit evidence independent of model self-assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What does the NIST OLIR mapping cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "49 NIST AI RMF 1.0 subcategories across GOVERN, MAP, MEASURE, and MANAGE are mapped to 24 SDOS controls across 9 governance domains. The full crosswalk is published in the OLIR catalog entry."
      }
    },
    {
      "@type": "Question",
      "name": "When can organizations adopt SDOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SDOS is operational and governs a multi-agent production system today. The NIST OLIR listing provides a publicly reviewable reference for organizations evaluating AI RMF alignment. Commercial availability and licensing are managed through AAM Cyber."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "SDOS — Security Decision Operating System",
  "description": "Runtime AI governance framework listed in the NIST OLIR catalog as a draft informative reference mapping to AI RMF 1.0. Patent-filed infrastructure-layer policy enforcement, deny-all-default posture, and tamper-evident audit trails. Governs autonomous AI agents before they act, not after.",
  "author": {
    "@type": "Person",
    "name": "Pharns Genece",
    "url": "https://portfolio.pharns.com"
  },
  "datePublished": "2026-04-13",
  "dateModified": "2026-05-14",
  "publisher": {
    "@type": "Person",
    "name": "Pharns Genece"
  },
  "mainEntityOfPage": "https://portfolio.pharns.com/innovation/sdos-governance-framework/",
  "keywords": ["runtime AI governance", "AI agent governance", "SDOS", "NIST OLIR", "NIST AI RMF", "security architecture", "patent-filed", "policy enforcement", "autonomous agents", "ISO 42001", "EU AI Act", "governed autonomous execution"],
  "about": {
    "@type": "SoftwareApplication",
    "name": "SDOS — Security Decision Operating System",
    "applicationCategory": "Security Software",
    "operatingSystem": "Linux"
  }
}
</script>
