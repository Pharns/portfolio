# AJR: Opportunity intelligence decision architecture

**One-line summary:** AJR (Agentic Job Radar) is a personal decision-architecture system that reduces job-market noise into a shortlist of high-fit cybersecurity opportunities through explainable scoring, gating, and human review.

!!! warning "Draft placeholder"
    This page is a placeholder draft for a future portfolio case study. It is intentionally not linked in public navigation yet. Screenshots, metrics, and an architecture diagram may be added later before publication.

## Problem

Cybersecurity job markets generate high-volume, unevenly structured listings across multiple sources. Raw feeds create noise faster than they create clarity, which makes daily review inefficient and increases the risk of missing high-fit roles.

The practical challenge was not collecting more postings. It was building a system that could normalize inconsistent data, remove duplicates, apply explicit decision logic, and surface a reviewable shortlist fast enough to support a daily operating rhythm.

## Objective

AJR was built to turn noisy external job data into a disciplined decision-support workflow. The goal was to prioritize likely-fit cybersecurity opportunities, suppress low-value listings, and preserve human judgment at the final decision point.

This makes AJR less of a job-search utility and more of a compact example of decision architecture: ingesting external signals, scoring them transparently, constraining them through policy logic, and delivering an operational output that supports fast daily review.

## Architecture overview

AJR currently follows this workflow pattern:

```text
Job Sources
→ Normalize
→ Score
→ Gate
→ Deduplicate
→ Persist
→ Digest
→ Human Decision
```

At a high level, the system ingests listings from job boards and APIs, standardizes the data model, applies explainable scoring, filters against defined role criteria, removes duplicate opportunities, stores the resulting records in PostgreSQL, and sends a plaintext digest for human review.

## Core workflow

1. **Ingestion**
   Collect job data from external sources, including Greenhouse-backed listings and other job-board inputs.
2. **Normalization**
   Convert uneven source data into a consistent internal representation that supports downstream scoring and gating.
3. **Scoring**
   Apply explainable logic to rank opportunities by fit rather than volume.
4. **Gating**
   Filter results based on target function, role stage, and decision rules such as IC-vs-manager discrimination.
5. **Deduplication**
   Collapse repeated or overlapping listings so review time is spent on distinct opportunities.
6. **Persistence**
   Store normalized records and workflow outputs in PostgreSQL for continuity and iteration.
7. **Digest generation**
   Produce a plaintext email digest optimized for fast daily review.
8. **Human decision**
   Keep the final action loop human-in-the-loop: review, shortlist, ignore, or investigate further.

## Key features

- **Explainable scoring and gating:** AJR favors transparent ranking logic over opaque automation, so the output can be reviewed and adjusted.
- **Target-function gating:** Filters for roles aligned to intended cybersecurity function rather than treating all security postings as equivalent.
- **Role-stage gating:** Suppresses listings that do not fit the intended seniority or trajectory.
- **IC-vs-manager discrimination:** Separates individual contributor and management tracks to reduce mismatched recommendations.
- **Hiring velocity detection:** Uses posting activity as a signal to identify organizations actively moving on hiring.
- **Company reputation bonus:** Adds a controlled weighting factor for organizations with stronger strategic relevance or professional fit.
- **Human-in-the-loop review:** The system prioritizes decision support, not autonomous application behavior.
- **Fast-review output:** Plaintext digest delivery keeps the daily review loop lightweight and operationally sustainable.

## Why it matters

AJR reduced raw job-market noise into a smaller set of high-fit opportunities that could be reviewed quickly and consistently. That matters because the underlying problem is common well beyond job data: large volumes of weakly structured external signals need to be transformed into explainable priorities.

The same pattern appears in broader security work. Detection pipelines, governance workflows, and architecture decision processes all depend on reducing noise, applying explicit logic, preserving traceability, and keeping humans in control of consequential actions.

## Technical stack

| Component | Role |
|-----------|------|
| **n8n** | Workflow orchestration and step sequencing |
| **PostgreSQL** | Persistent storage for normalized records and workflow state |
| **Greenhouse APIs** | Structured job-source ingestion |
| **SMTP digest delivery** | Plaintext summary output for daily review |
| **Tailscale** | Secured access to the running environment |

## Security and design considerations

- **Human judgment remains final:** AJR supports prioritization, but the decision to pursue or ignore an opportunity remains manual.
- **Explainability over black-box ranking:** Scoring and gating are designed to be understandable and adjustable.
- **Operational simplicity:** Plaintext email output was chosen for speed, portability, and low-friction review.
- **Access control:** Tailscale-secured access limits unnecessary exposure of the underlying workflow environment.
- **Data discipline:** Normalization and deduplication reduce drift, repeated review effort, and inconsistent downstream handling.
- **Scope control:** The system is framed as personal decision support, not as a public-facing recruiting product or autonomous application engine.

## Planned enhancements

- Add a public-safe architecture diagram for the ingestion-to-decision pipeline.
- Add 2-3 screenshots showing digest output, scoring logic, or review workflow.
- Capture a small metrics snapshot after sustained real-world use.
- Expand source coverage while preserving normalization quality.
- Refine scoring weights based on observed review outcomes.
- Add better explanation artifacts for why specific roles were surfaced or excluded.

## Portfolio framing

AJR is included here because it demonstrates the same decision-architecture thinking used in broader security strategy work: noisy inputs, explicit logic, constrained automation, and human-in-the-loop action.

The project aligns with a portfolio narrative centered on security architecture, governance-aware automation, and explainable systems. In that context, AJR is not the story of a job-search shortcut. It is a compact, real operating example of workflow design, prioritization logic, and practical automation under clear constraints.

## Activation notes

Before this page is added to public navigation, it should be upgraded with:

- one architecture diagram
- two to three screenshots
- a short metrics snapshot after one to two weeks of use
- a final review to tighten public-facing language and remove any placeholder phrasing that is no longer needed

This page should remain unlinked until those artifacts are ready.
