---
description: "SDOS — Security Decision Operating System. Patent-pending AI governance runtime with risk-tiered dispatch and deny-all-default policy enforcement."
---

# SDOS — Security Decision Operating System

*Patent-Pending AI Governance Runtime · Filed April 4, 2026 · Obsidian Foundry, LLC*

!!! success "For Hiring Managers — Security Architecture / AI Governance"

    **What I Built:** A production AI governance runtime that enforces risk-tiered policy at the infrastructure layer — before AI agents reason, select tools, or execute actions. Not prompt engineering. Not guardrails bolted on after the fact. Architectural containment.

    **Technical Stack:** Python 3.10+ · SQLite · MQTT · HMAC-SHA256 Module Signing · REST API (16 Endpoints) · MCP Protocol · Multi-Agent Swarm Architecture

    **Security Engineering Skills Demonstrated:**

    - Deny-all-default policy enforcement across autonomous AI agents
    - Risk-tiered dispatch classification (R1/R2/R3) at the infrastructure layer
    - Tamper-evident audit trails independent of model self-reporting
    - Production dual-gateway deployment with continuous health monitoring
    - Compliance mapping across NIST AI RMF, ISO 42001, and EU AI Act

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

!!! info "Patent-pending"

    SDOS is protected under USPTO Provisional Patent Application 64/029,300, filed April 4, 2026. The filing covers 9 patent families with 77 dependent claims. The intellectual property is held by Obsidian Foundry, LLC.

The core design principle is simple: **deny all by default.** An AI agent operating under SDOS has zero permissions until policy explicitly grants them. This inverts the typical AI deployment model, where agents start with broad access and teams scramble to restrict it after incidents occur.

### Risk-tiered dispatch

Every action an agent attempts is classified into one of three risk tiers before it can execute:

| Tier | Classification | Behavior |
|------|---------------|----------|
| **R1** | Safe | Executes immediately under policy. Read-only operations, pre-approved tool calls, bounded queries. |
| **R2** | Review | Requires additional validation before execution. May trigger human-in-the-loop approval, elevated logging, or secondary policy checks. |
| **R3** | Blocked | Cannot execute without explicit override from a governance authority. High-risk operations, sensitive data access, irreversible actions. |

This classification happens at the infrastructure layer, not inside the model. The agent does not decide its own risk tier. The agent does not know what tier a given action falls into until SDOS returns a permit or deny decision. This is the distinction between self-governance (which is not governance) and architectural governance (which is).

### Seven policy enforcement points

SDOS places seven policy enforcement points across the decision pipeline. These are not optional middleware — they are structural gates that every action must pass through. An agent cannot route around them because they exist at a layer below the agent's execution environment.

Each enforcement point evaluates policy independently. A tool call that passes the first gate can still be blocked at the third. This defense-in-depth approach means that a single misconfiguration does not collapse the entire governance posture.

### Tamper-evident audit trails

Every policy decision — permit, deny, escalate — is logged at the infrastructure layer with tamper-evident properties. This audit trail is not generated by the model. It is not a summary of what the model says it did. It is an independent record of what SDOS actually allowed and blocked.

This distinction matters enormously for compliance. Regulators, auditors, and security teams need evidence of governance that does not depend on the governed system's self-reporting. SDOS produces exactly that.

---

## How SDOS differs from everything else

The comparison below captures where SDOS sits relative to the governance approaches most organizations are currently using:

| Capability | SDOS | Model-layer guardrails | API rate limiting | Framework guardrails |
|-----------|------|----------------------|-------------------|---------------------|
| Enforcement layer | Infrastructure (below agent) | Model (same layer as agent) | Network (capacity only) | Application (same layer as agent) |
| Deny-all default | Yes | No — permissive by default | No — allows all within rate | Depends on implementation |
| Risk classification at dispatch | R1/R2/R3 before execution | Post-hoc or self-assessed | None | Varies |
| Independent audit trail | Yes — infrastructure-generated | No — model self-reports | Partial — call logs only | Partial — depends on wrapper |
| Tamper-evident logging | Yes — cryptographic integrity | No | No | No |
| Survives prompt injection | Yes — agent cannot reach policy layer | No — prompt is the policy | N/A | Partially — if well-isolated |
| Survives model updates | Yes — policy is external to model | No — behavior may shift | Yes | Partially |
| Human-in-the-loop integration | Native (R2 tier) | Bolted on | None | Bolted on |
| Multi-agent governance | Native — governs agent swarms | Per-agent only | Per-endpoint only | Per-integration only |

!!! warning "The critical distinction"

    Most AI governance operates at the same layer as the AI itself. SDOS operates below it. The agent cannot modify, bypass, or reason around infrastructure-layer policy any more than a Docker container can modify its host kernel. This is not a philosophical difference — it is an architectural one with direct security implications.

---

## Operational evidence

SDOS is not a whitepaper or a roadmap. It is running in production today, governing a multi-agent system across dual-gateway infrastructure.

### Production runtime

| Component | Metric |
|-----------|--------|
| API endpoints | 16 production endpoints |
| Runtime health | Continuous monitoring with automated alerting |
| Gateway architecture | Dual-gateway deployment with independent governance |
| Agent swarm | 4 agents operating under continuous SDOS governance |

### SDOS MCP server

The SDOS MCP (Model Context Protocol) Server extends governance into the tool ecosystem that AI agents consume. This is where deny-all-default becomes operationally concrete — every tool an agent might invoke is wrapped in governance.

| Component | Metric |
|-----------|--------|
| Total governed tools | 53 across 6 operational modules |
| Module signing | HMAC-SHA256 on all 6 module manifests |
| Test coverage | 86 tests passing |
| Compliance mappings | 95 control mappings across 10 frameworks |
| Module lifecycle | Hot-swap reload without service interruption |

The six modules span governed retrieval and memory, RF threat detection, edge AI, threat hunting, compliance automation, and open-source intelligence. Each module's manifest is cryptographically signed, preventing unauthorized modification of the tool definitions that agents consume.

!!! tip "Why module signing matters"

    Without signed module manifests, a compromised or misconfigured module could present a tool that bypasses governance. HMAC-SHA256 signing ensures that the tools SDOS presents to agents are exactly the tools that were approved. This is supply-chain security applied to AI tool ecosystems.

### Compliance alignment

SDOS maps directly to established governance frameworks, not as a theoretical exercise but through tested control implementations:

| Framework | Coverage |
|-----------|----------|
| **NIST AI RMF** | Risk management functions mapped to SDOS enforcement points |
| **ISO 42001** | AI management system controls aligned to SDOS governance architecture |
| **EU AI Act** | High-risk AI system requirements addressed through risk-tiered dispatch and audit trails |
| **NIST SP 800-53** | Security and privacy controls mapped to SDOS operational controls |
| **SOC 2 Type II** | Trust service criteria addressable through SDOS audit evidence |

These are not aspirational mappings. The 95 compliance control mappings are implemented and testable in the current production deployment.

---

## The competitive landscape

I have conducted competitive analysis across the AI governance space. The landscape broadly divides into three categories:

**Governance toolkits and frameworks.** These provide libraries, templates, and guidelines for teams to build their own governance. They are useful as starting points but require significant implementation effort and do not enforce anything at the infrastructure layer. The governance exists only if the development team implements it correctly — and continues to maintain it.

**Gateway and proxy solutions.** These sit between AI agents and external APIs, filtering requests. They address network-level concerns but do not govern internal tool selection, risk classification at dispatch, or multi-agent coordination. They are perimeter controls for a problem that requires interior enforcement.

**Model-layer safety tools.** These include constitutional AI approaches, RLHF-based alignment, and output filtering. They improve model behavior in aggregate but cannot guarantee enforcement on any individual action. They are statistical, not deterministic.

No competitor I have identified combines all of the following in a single architecture:

- Risk-tiered classification at dispatch (before the agent acts)
- Deny-all-default policy enforcement
- Tamper-evident audit trails at the infrastructure layer
- Cryptographically signed module manifests
- Governed memory with trust-weighted retrieval
- Multi-agent swarm governance from a unified policy engine
- Edge enforcement for distributed and mobile deployments

This is the gap SDOS fills. It is not an incremental improvement on existing approaches — it is a different architectural layer entirely.

---

## Patent status

!!! info "Intellectual property"

    **Provisional Patent Application:** USPTO 64/029,300
    **Filed:** April 4, 2026
    **Coverage:** 9 patent families, 77 dependent claims
    **Assignee:** Obsidian Foundry, LLC
    **Status:** Non-provisional filing in preparation (accelerated timeline)

The patent portfolio covers the full governance architecture — from risk-tiered dispatch at the core through modular tool governance, edge enforcement, and multi-agent coordination. The breadth of the filing reflects the scope of the problem: governing AI agents is not a single-feature solution, it is an architectural system that must address every layer where an agent can act.

---

## Who needs this

SDOS is relevant to any organization deploying AI agents beyond simple chatbot interfaces. The moment an AI agent can take actions — call APIs, access databases, modify files, communicate with external systems — governance becomes a security requirement, not a nice-to-have.

**Enterprise AI deployments.** Organizations running multi-agent systems, AI-powered automation, or LLM-integrated workflows need governance that scales with agent count and does not depend on per-agent configuration. SDOS provides centralized policy enforcement across agent swarms.

**Federal and defense.** Government environments require audit-grade evidence of AI governance, deterministic policy enforcement, and compliance with emerging AI executive orders and NIST frameworks. SDOS produces the audit trail that procurement officers and inspectors general need to see.

**Regulated industries.** Healthcare, financial services, and critical infrastructure operators face regulatory requirements that will increasingly extend to AI systems. The EU AI Act is already in effect with enforcement beginning August 2026. SDOS provides the governance architecture these regulations demand.

**AI platform companies.** Any company building platforms that host third-party AI agents needs infrastructure-layer governance to prevent one agent from compromising another's data or exceeding its authorized scope. Multi-tenant AI governance is not optional — it is the table stakes for platform trust.

**Security teams.** CISOs and security architects evaluating AI deployments need a governance model they can defend to auditors, regulators, and boards. "We told the model to be safe" is not a defensible position. "We enforce policy at the infrastructure layer with tamper-evident audit trails" is.

---

## What this demonstrates

1. **I build governance architectures, not guardrails.** SDOS is infrastructure-layer enforcement — the kind of security architecture that survives adversarial conditions, not just cooperative ones.
2. **I understand the AI governance gap.** The industry is deploying agents faster than governance frameworks can keep up. I identified that gap and built a production system to close it.
3. **I operate at the intersection of security and AI.** This is not a security project that happens to involve AI, or an AI project that adds security as an afterthought. It is a system where security *is* the product.
4. **I ship production systems.** Dual-gateway deployment, 53 governed tools, 86 passing tests, 95 compliance mappings, continuous health monitoring. This is operational, not theoretical.
5. **I protect intellectual property.** 9 patent families, 77 dependent claims, filed and prosecuting. I understand the value of what I build and I secure it accordingly.

---

## Related projects

- [AgenticOS — AI orchestration](agenticos.md) — Deterministic agent routing and execution layer that operates under SDOS governance
- [Agentic infrastructure audit](agentic-infrastructure-audit.md) — Multi-machine governance audit with drift detection and canonical architecture standards
- [TraceLock RF threat detection](../cybersecurity/tracelock.md) — Patent-pending multi-domain RF surveillance detection, governed by SDOS
- [Governed security architecture](../architecture/governed-security-architecture.md) — System-of-systems view showing how SDOS integrates across the full security stack

---

[Connect on LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button .md-button--primary }
[Contact Me](../contact.md){ .md-button }

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "SDOS — Security Decision Operating System",
  "description": "Patent-pending AI governance runtime with risk-tiered dispatch, deny-all-default policy enforcement, and tamper-evident audit trails at the infrastructure layer. Governs autonomous AI agents before they act, not after.",
  "author": {
    "@type": "Person",
    "name": "Pharns Genece",
    "url": "https://portfolio.pharns.com"
  },
  "datePublished": "2026-04-13",
  "dateModified": "2026-04-13",
  "publisher": {
    "@type": "Person",
    "name": "Pharns Genece"
  },
  "mainEntityOfPage": "https://portfolio.pharns.com/innovation/sdos-governance-framework/",
  "keywords": ["AI governance", "SDOS", "security architecture", "patent-pending", "risk-tiered dispatch", "policy enforcement", "autonomous agents", "NIST AI RMF", "ISO 42001", "EU AI Act"],
  "about": {
    "@type": "SoftwareApplication",
    "name": "SDOS — Security Decision Operating System",
    "applicationCategory": "Security Software",
    "operatingSystem": "Linux"
  }
}
</script>
