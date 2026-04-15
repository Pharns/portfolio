---
description: "Patent portfolio covering governed AI execution, multi-domain threat detection, and security decision architecture. 9 families, 77 dependent claims."
---

# Patent portfolio overview

I don't just build security systems — I file patents on the novel architectures behind them.

This portfolio represents original work at the intersection of governed AI execution and multi-domain threat detection. Every claim is backed by production code running on real infrastructure. These are not theoretical constructs or academic exercises — they are working systems that happen to be novel enough to protect.

The work grew out of a practical problem: autonomous AI agents need enforceable governance at the infrastructure layer, and wireless threat detection needs to correlate signals across domains that most tools treat as separate. I built systems to solve both problems, then realized the architectures themselves were patentable.

---

## Filing details

!!! info "Patent-pending"

    | Field | Detail |
    |-------|--------|
    | **Application** | U.S. Provisional 64/029,300 |
    | **Filed** | April 4, 2026 |
    | **Patent families** | 9 |
    | **Independent claims** | 9 |
    | **Dependent claims** | 77 |
    | **Assignee** | Dedicated IP holding entity |
    | **Status** | Patent-pending (non-provisional in progress) |

---

## What the patents cover

The portfolio spans five distinct technical domains, each addressing gaps in how security systems operate today. Here is what they cover in plain terms.

### Governed AI agent execution

Autonomous AI agents are powerful but dangerous without guardrails. My architecture enforces policy on agents at the infrastructure layer — not through voluntary compliance or after-the-fact logging, but through mandatory governance checkpoints that agents cannot bypass. The system classifies risk before an agent acts, selects appropriate computational resources based on that risk classification, and prevents agents from escalating their own privileges. This is the difference between hoping an AI behaves and ensuring it does.

### Multi-domain wireless threat detection

Most RF security tools monitor a single domain: Wi-Fi or Bluetooth or SDR, each in its own silo. My system correlates signals across Wi-Fi, Bluetooth, software-defined radio, GPS, and ADS-B simultaneously, treating the wireless environment as one unified threat surface. A rogue device that looks benign on any single domain becomes visible when you see it operating across multiple domains at once. This is how you detect sophisticated wireless threats that evade single-domain tools.

### Security decision architecture

Raw telemetry is not intelligence. My architecture transforms unstructured sensor data into auditable, governed security decisions — with a clear chain from detection through classification to response. Every decision is traceable, every action is logged, and the system maintains forensic-grade evidence integrity throughout. This matters in environments where security decisions have legal or regulatory consequences.

### Case orchestration

Security investigations involve multiple analysts, evidence sources, and decision points. My case orchestration architecture manages the full lifecycle of a security investigation — from initial detection through evidence collection, analysis, and resolution — while maintaining evidence integrity and chain of custody at every step. The system enforces governance on who can take what actions and ensures that no evidence is modified without an audit trail.

### Pattern-of-life modeling

Point-in-time alerts miss behavioral patterns that only emerge over days or weeks. My architecture builds behavioral baselines from multi-domain telemetry and detects anomalies that deviate from established patterns. A device that appears once is an event. A device that appears at the same time every day, moves along a consistent path, and correlates with network probes — that is a pattern worth investigating. The system identifies these patterns automatically and classifies them according to governed risk tiers.

---

## Why this matters

For hiring managers and technical leaders evaluating candidates, a patent portfolio signals capabilities that are difficult to demonstrate any other way.

**Identifying novel technical approaches.** Patent claims require novelty — the architecture must do something that has not been done before. A granted or filed patent is external validation that the work is genuinely original, not a reimplementation of existing tools.

**Depth of architectural thinking.** Writing patent claims forces precision. Every component, interaction, and decision boundary must be defined with enough specificity to distinguish it from prior art. This is the same rigor required to design systems that survive production.

**Commitment to defensible IP.** Blog posts and conference talks demonstrate communication skills. Patents demonstrate the ability to create protectable intellectual property — the kind of asset that gives an organization competitive advantage.

**Production systems backing every claim.** Patent law distinguishes between theoretical inventions and reduction to practice — actually building the thing. Every claim in this portfolio is backed by running code on production infrastructure. The systems described in these patents are not proposals. They exist, they run, and they work.

---

## IP structure

All intellectual property is held by a dedicated IP holding entity with a clean chain of title. This structure separates IP ownership from operating entities, which is standard practice for protecting valuable patents from business liability exposure.

The entity structure ensures that the IP remains protected regardless of what happens at the operating company level — a governance decision that reflects the same architectural thinking applied to the technical work itself.

---

## What's next

The non-provisional filing is in progress, consolidating and expanding coverage from the provisional application. Additional provisional filings are extending the portfolio into new technical domains.

Patent prosecution is a multi-year process. The work continues — both in expanding the patent portfolio and in advancing the production systems that back every claim.

---

*For technical deep dives on the systems behind these patents, see [TraceLock RF threat detection](../cybersecurity/tracelock.md) and [AgenticOS AI orchestration](agenticos.md).*

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Patent Portfolio — Governed AI Execution & Multi-Domain Threat Detection",
  "description": "9 patent families covering governed AI agent execution, multi-domain wireless threat detection, security decision architecture, case orchestration, and pattern-of-life modeling. 77 dependent claims backed by production code.",
  "author": {"@type": "Person", "@id": "https://portfolio.pharns.com/#pharns"},
  "datePublished": "2026-04-04",
  "dateModified": "2026-04-15",
  "publisher": {"@type": "Person", "@id": "https://portfolio.pharns.com/#pharns"},
  "mainEntityOfPage": "https://portfolio.pharns.com/innovation/patent-portfolio/",
  "keywords": ["AI agent governance patents", "governed autonomous execution", "multi-domain threat detection", "security decision architecture", "RF threat detection patent", "SDOS patent", "AI governance intellectual property"],
  "about": [
    {"@type": "Thing", "name": "AI Agent Governance", "description": "Enforceable policy on autonomous AI agents at the infrastructure layer"},
    {"@type": "Thing", "name": "Multi-Domain RF Threat Detection", "description": "Correlated wireless monitoring across Wi-Fi, Bluetooth, SDR, GPS, and ADS-B"},
    {"@type": "Thing", "name": "Security Decision Architecture", "description": "Transforming sensor telemetry into auditable, governed security decisions"}
  ]
}
</script>
