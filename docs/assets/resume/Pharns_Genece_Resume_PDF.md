# PHARNS GENECE

**AI Security Engineer — Governed AI Systems · Detection Engineering · AI/LLM Pipelines**

Remote US | career@pharns.com | linkedin.com/in/pharns | portfolio.pharns.com

::: credentials
**5 USPTO Provisional Patents Filed** — AI Governance & Agent Security · **3 NIST OLIR Final Informative References** (AI RMF · CSF 2.0 · SP 800-53) · **M.S. Cybersecurity** (enrolled, starts late 2026) · **B.S. Cybersecurity** (NSA CAE) · PenTest+ · CySA+ · Security+ · Associate of ISC2 (SSCP) · U.S. Air Force Veteran · Held Secret Clearance (inactive) · TSA-vetted (TWIC)
:::

---

::: headline
AI Security & Governance  |  Detection Engineering  |  AI/LLM-Native Pipelines
:::

My perspective comes from working across the autonomy continuum: automation to autonomy to AI, from sUAS and physical autonomous systems to cybersecurity and digital AI agents. I governed machines that could hurt someone before I governed software, and the control problem turned out to be the same one — risk tiering, defined enforcement points, fail-safe defaults, and a human who holds authority at the moment of action.

AI security engineer who builds the runtime controls that keep autonomous AI systems safe — risk-tiered policy enforcement, egress governance, and tamper-evident audit, implemented in production Python. Strong engineering across detection logic, AI/LLM-native data pipelines, and MCP-server development that connects AI systems to external tools. Authored three governance control-mappings cataloged as Final Informative References on NIST's OLIR program (published, csrc.nist.gov), and filed five USPTO provisional patents on the methods. Multi-signal correlation background (RF, BLE, Wi-Fi, ADS-B) with quantified empirical results. Offensive-security trained (PenTest+, CySA+); held a Secret clearance (inactive), clearance-eligible, TWIC-vetted. U.S. Air Force veteran — I governed physical autonomous systems before governing digital ones.

---

## SKILLS

- **Languages:** Python (primary — detection logic, data pipelines, API integration, automation) · SQL · Bash · JSON/YAML
- **Data & Pipelines:** production data-pipeline orchestration (n8n — scheduled, monitored, server-side) · ingestion & enrichment · web scraping & normalization · API integration · vector embeddings / RAG · dbt (Core): staging→mart models with passing tests on live abuse.ch threat feeds
- **AI Systems:** LLM API integration (Claude, OpenAI, Gemini, Ollama) · MCP server development · LLM-assisted extraction & automation · edge AI (Gemma 4B)
- **Threat & Detection:** Indicators of Compromise (IOC) correlation · rule-based detection & pattern-matching (production rule/signature logic via TraceLock) · TTP extraction · MITRE ATT&CK · threat modeling · penetration testing · Kismet · SDR · Caldera
- **Infrastructure:** Linux administration · Proxmox · Docker · Tailscale · Git

---

## PROFESSIONAL EXPERIENCE

### Enterprise AI-Governance System — Architecture & Build · 2024 – Present
*Founder / Principal Architect · Python*
Architected and built an enterprise AI-governance system from the ground up — intake, risk tiering, dispatch-time policy enforcement, escalation, and tamper-evident audit. Implemented policy enforcement points governing agent actions, memory access, and egress; built governed vector memory with trust-weighted retrieval and contradiction detection. Authored governance control-mappings aligned to NIST AI RMF, ISO 42001, and the EU AI Act — **three cataloged as Final Informative References on NIST's OLIR program** (independent, publicly verifiable on csrc.nist.gov). Filed five USPTO provisional patents (AI governance & agent security) on the methods.

### Security, Privacy & AI-Compliance Consultant — External Clients (AAM Cyber) · Dec 2024 – Present
*Retained by external clients across multiple engagements — financial, legal, and senior-care sectors*
Engaged by external clients — including a mortgage-brokerage, a law firm, and senior-care organizations — to deliver security, privacy, and compliance work: control mapping across SOC 2, ISO 27001, and NIST CSF; audit-readiness and gap analysis. For the law firm, assessed AI-compliance posture and began remediation. Built and operate a production GRC-automation platform (automated intake → control mapping across 100+ frameworks → POA&M generation), cutting audit-prep effort ~70%.

### UAS Payload-Delivery Platform — Systems & Security Program (USOG) · 2018 – 2025
*Founder / Security & Systems Lead*
Designed a UAS payload-delivery platform integrating airframe, flight computer, a secondary avionics controller, and a cargo subsystem — deriving the interface requirements between them. Authored the safety rules, operational roles, and standard operating procedures for drone operations (a risk-tiering, escalation, and approval framework). Built the security program from scratch (CIS Controls v8 → NIST CSF / SOC 2); led program delivery and cross-functional teams from individual contributor to executive level.

---

## KEY PROJECTS

### TraceLock — Multi-Domain Signal Detection & Correlation
*Python · Kismet · SDR · 2024 – Present*
Multi-protocol detection platform fusing RF, BLE, Wi-Fi, and ADS-B telemetry with behavioral analytics and baseline anomaly detection. **Detected all target events across three controlled runs vs. 43% with the manual baseline; 57% time reduction; fully reproducible** — KPI-driven, with SHA-256 integrity validation on all captured evidence. Runs in production on a Raspberry Pi sensor; undergraduate capstone extended into an ongoing system. **Governed under the same control model I apply to software agents** — defined detection thresholds, escalation criteria, evidence integrity, and the human-decision boundary.

### Governance for Autonomous Physical Systems — FAA UAS/AAM Control Alignment
*Published reference · aamcyber.com*
Published a principles-mapped control alignment for FAA-regulated autonomous UAS and AAM operations, built from first principles against FAA source material because no single enforceable federal AI governance standard covers that domain yet. **Writing controls where the standard does not exist is a different skill than mapping to one that does** — and it is the same position frontier AI is in now. Antecedent: commercial drone-delivery operations flying automated and autonomous missions under FAA Part 107, where the remote-pilot-in-command requirement is a regulator-mandated human-in-the-loop control on an autonomous system.

### AJR — LLM-Assisted Signal Ingestion & Routing Pipeline
*Python · n8n · Claude API · 2025 – Present*
Production detection-and-enrichment pipeline ingesting ~170–193 items/run from 28+ web sources, RSS feeds, and three aggregators (dedup, normalization, enrichment), twice daily. Uses Claude to extract structured TTP-style indicators and generate hunting/triage queries from unstructured text — the same architecture as a CTI enrichment pipeline. Scheduled, server-side, monitored.

### MCP Server Development — AI-to-Tool Connectors
*Python · Node · Model Context Protocol · 2025 – Present*
Designed and operate MCP servers exposing external infrastructure and data as governed AI-callable tools: a Proxmox server in daily use across a 48-VM homelab, and a multi-module governance server (61 tools across 10 signed modules) spanning threat-hunt, compliance, and OSINT — with signed-module identity verification and hot-reload for safe runtime tool management.

---

## EARLIER EXPERIENCE & MILITARY SERVICE

### Aeromedical Evacuation Aircrew — U.S. Air Force
Non-rated flight crew delivering in-flight patient care and medical evacuation — regulated clinical operations under strict medical protocol, documentation, and safety standards. Mastered the aircraft and all emergency systems at crew level across multiple heterogeneous airframes (C-130, C-17, C-9); reconfigured aircraft for the aeromedical mission and executed ongoing in-flight risk management with zero margin for error. Regulated-healthcare and safety-critical systems background that predates — and informs — the governance work above. Held Secret clearance (inactive).

### Audio Engineer — The Walt Disney Company
Integrated audio, stage lighting, stage movement, and live performance into a single synchronized real-time production — systems integration under strict timing and safety constraints.

---

## EDUCATION

- **M.S. Cybersecurity & Information Assurance** — Western Governors University *(enrolled, starts late 2026)*
- **B.S. Cybersecurity & Information Assurance** — Western Governors University *(conferred March 2026; NSA&nbsp;CAE&#8209;validated)*
    - Relevant coursework: Data Management — Foundations & Applications (relational schema design, SQL querying, normalization) · Programming in Python · Digital Forensics · Penetration Testing & Vulnerability Analysis
    - Capstone: *TraceLock* — RF threat detection & forensic analysis; empirical study with quantified outcomes (above)

- **ROV/Drone Operator Technician Program** — MiraCosta College, Technology Career Institute (Carlsbad, CA)
    - Certificate of Accomplishment, **486 hours**; initial cohort of the program
    - Remotely operated underwater vehicles and unmanned aircraft: machine design, submersible robotics, ROV and UAV piloting, programmable controllers, data acquisition and control, GIS, FAA licensing requirements and regulations
    - Included OSHA-10, Career Readiness, and Leadership Training

---

## CERTIFICATIONS

Associate of ISC2 (SSCP) · ISC2 CC · CompTIA PenTest+ · CySA+ · Security+ · Network+ · A+ · Project+ · ITIL 4 · LPI Linux Essentials · CNSP · CNVP  *(active industry certifications across security, networking, and operations — independently verifiable on Credly; CompTIA stackable credentials additional.)*

**OSHA 30-Hour General Industry Safety and Health** — OSHA Training Institute Education Center, UC San Diego; completed at MiraCosta College, Technology Career Institute *(card number available on request; does not expire)*

**FAA Remote Pilot Certificate** — small Unmanned Aircraft Systems (Part 107)

**TSA-vetted (TWIC)** *(current)* · **Arizona DPS Level One Fingerprint Clearance Card** *(current)*  

**FCC Amateur Radio License** — Technician class *(active through 2031)* · **FCC General Mobile Radio Service (GMRS) License** *(active through 2033)*  

---

---

*U.S. Citizen · Veteran · Targeting remote roles · Open to 25% in-office / relocation*
