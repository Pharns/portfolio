---
description: TraceLock™ — Multi-domain RF threat detection platform with real-time monitoring across wireless domains. Detection engineering with Python automation and forensic-grade logging.
---
# TraceLock™ — Multi-Domain RF Threat Detection Platform

*WGU BSCSIA Capstone · Degree Conferred March 2026*

**Role:** Sole developer | Security-hardened fork | ~12,500 LOC (25 Python modules, 81 shell scripts) | 6 RF domains

!!! success "For Hiring Managers — Detection Engineer / Security Automation"

    **What I Built:** Real-time RF surveillance detection system that monitors 6 wireless domains simultaneously, correlates threats across sensors, and produces forensic-grade evidence logs.

    **Technical Stack:** Python 3.10+ · ARM SBC · RF Monitoring Framework · SDR Receivers · BLE Adapters · SQLite · GitHub Actions CI

    **Detection Engineering Skills Demonstrated:**

    - Multi-domain threat correlation (Wi-Fi + Bluetooth + SDR + GPS + ADS-B)
    - Custom detection rule authoring with tunable thresholds
    - False positive reduction through AI-assisted pattern extraction
    - Real-time alerting with structured logging pipelines
    - Security hardening (parameterized queries, encrypted credentials, input validation)

    **Why This Matters:** If I can build detection logic for RF threats across 6 sensor domains, I can build detection content for your SIEM/EDR platform.

[View TraceLock Public](https://github.com/Pharns/tracelock-public){ .md-button .md-button--primary }
[Public Artifacts](https://github.com/Pharns/tracelock-public/tree/main/examples){ .md-button target=_blank }

---

## Case summary

| | |
|---|---|
| **Problem** | Security teams face 12–18 minute RF blind spots during sweep operations; existing tools monitor single wireless domains with no cross-domain correlation |
| **Environment** | Raspberry Pi 4 (8GB) · Python 3.10+ · RF Monitoring Framework · RTL-SDR V4 · Ubertooth · SQLite · GitHub Actions CI |
| **What I built** | Real-time multi-domain sensor fusion: Wi-Fi + BLE + SDR + GPS + ADS-B correlation engine with forensic-grade logging and tunable detection thresholds |
| **Framework mapping** | Detection engineering fundamentals · evidence-grade logging aligned with audit trail requirements · MITRE ATT&CK for ICS (RF threat vectors) |
| **Measurable outcome** | Eliminates RF blind spots across 6 simultaneous domains; patent-pending architecture; WGU BSCSIA capstone (Mar 2026) |
| **Artifacts** | [Public repo](https://github.com/Pharns/tracelock-public){target=_blank} · ~12,500 LOC · 25 Python modules · 81 shell scripts · example detection outputs |

---

!!! abstract "Governed Agentic Security Stack — Agentic Detection & Adversarial Validation Layer"

    **Stack Position:** TraceLock™ is the Agentic Detection & Adversarial Validation Layer of the Governed Agentic Security Stack — the layer that detects adversarial signals in the environment where AI-governed security workflows operate.

    **Architectural Risk Reduced:** RF-layer blind spots that leave security operations without environmental threat visibility. A GRC platform that automates compliance workflows is only defensible if the physical environment it operates within is actively monitored.

    **Stack Layer:** Agentic Detection (primary) · Adversarial Validation (secondary) · Evidence & Assurance (cross-layer) | [Governed Agentic Security Stack](../innovation/agentic-infrastructure-audit.md#governed-agentic-security-stack-context)

    **Relationship to GIAP™:** GIAP™ governs compliance intake workflows. TraceLock™ monitors the physical RF environment those workflows operate within. Without detection coverage at this layer, GIAP™'s audit trails lack environmental context — a session conducted during active RF surveillance leaves no record of that condition.

---

## The Problem

Executive protection and security teams face a critical gap: **12-18 minutes of RF blind spots** during sweep operations. Existing tools monitor single domains (Wi-Fi OR Bluetooth OR SDR) without correlation, missing sophisticated threats that hop frequencies or use multiple channels.

**Attack scenarios addressed:**

- Rogue Wi-Fi access points for credential harvesting
- Bluetooth tracking devices (AirTags, Tiles, custom beacons)
- ISM-band triggers for remote activation
- GPS spoofing and jamming detection
- Unauthorized drone surveillance (ADS-B correlation)

---

## TraceLock vs. Traditional Wireless IDS

| Capability | Traditional WIDS | TraceLock™ |
|-----------|-----------------|------------|
| Domains monitored | Wi-Fi only | 6 domains (Wi-Fi, BLE, SDR, GPS, ADS-B, cellular) |
| Detection approach | Signature-based | Multi-domain correlation with behavioral analysis |
| Evidence grade | Alert logs only | Forensic-grade structured logging with chain of custody |
| Hardware | Enterprise appliances ($10K+) | Raspberry Pi + commodity SDR (~$200) |
| Deployment | Fixed infrastructure | Portable, field-deployable |
| Governance | None | SDOS-governed decision pipeline |

---

## Use Cases & Transferable Skills

| Scenario | Domain | Skills Demonstrated |
|----------|--------|---------------------|
| **Executive Protection** | Physical Security | Surveillance detection, persistence scoring, threat correlation |
| **Detection Engineering** | SOC/SIEM | Multi-source correlation, threshold tuning, false positive reduction |
| **Forensic Evidence** | Legal/GRC | Audit-grade logging, KML visualization, chain of custody |
| **Drone Surveillance** | AAM/Critical Infrastructure | ADS-B decoding, airspace monitoring, RF signal analysis |

*TraceLock™ addresses 25+ documented scenarios — from border security to disaster response. The same detection logic applies to any domain requiring multi-sensor correlation.*

---

## What I Built Beyond the Original

TraceLock™ is a security-hardened fork of CYT (Chasing Your Tail). Here's what I added:

| Component | Original CYT | TraceLock™ (My Fork) |
|-----------|--------------|----------------------|
| **RF Domains** | Wi-Fi only | Wi-Fi + Bluetooth + SDR + GPS + ADS-B |
| **Security** | Basic | 6 hardened modules (SQL injection prevention, encrypted credentials, input validation) |
| **Detection** | Probe logging | Multi-domain correlation engine with persistence scoring |
| **Visualization** | Text logs | KML with Google Earth integration, HTML reports |
| **Hardware** | Single adapter | 8-component core kit (RTL-SDR, Ubertooth, GPS, etc.) + HackRF extension |
| **Status** | Proof of concept | WGU BSCSIA capstone (complete) |
| **Codebase** | ~2,000 LOC | ~12,500 LOC (25 Python modules, 81 shell scripts) |

---

## What I Built

### Hardware Platform (Field-Deployable Rapid Response Kit)

| Component | Purpose | Capabilities |
|-----------|---------|--------------|
| **SBC (ARM-based)** | Core processing | Runs RF monitoring framework + all TraceLock™ modules |
| **Dual-band Wi-Fi adapter** | Wi-Fi monitoring | Monitor mode, packet capture (2.4/5GHz) |
| **SDR receiver** | ISM band + ADS-B | Sub-GHz ISM bands, ADS-B (1090MHz) |
| **Wideband SDR** *(Extension)* | Wideband SDR TX/RX | Extended frequency range — optional expansion module |
| **Long-range BT adapter** | Long-range Bluetooth | Extended BLE scanning with external antenna |
| **Short-range BT adapter** | Short-range Bluetooth | Dense environment device detection |
| **BLE research adapter** | BLE research | Advanced BLE protocol analysis |
| **GPS/LTE HAT** | GPS + LTE | GNSS positioning, remote telemetry/VPN |
| **Touchscreen display** | Field interface | Local GUI for operator interface |

### Physical System Architecture

![TraceLock physical system architecture](../assets/Sensor%20system.png)

*8-component RF sensor array with centralized processing and multi-channel output — demonstrates hardware integration and systems engineering*

### Software Architecture

TraceLock's detection architecture depends on the Agentic Infrastructure layer for reproducibility: the same detection rules must produce consistent output on every deployment. Hook-driven context loading and canonical install standards — established by the [Agentic Infrastructure Audit](../innovation/agentic-infrastructure-audit.md) — ensure that the agents operating TraceLock sessions produce audit-comparable results across machines.

**Codebase:** 25 Python modules, 81 shell scripts, ~12,500 LOC, GitHub Actions CI

*Software architecture diagram withheld — the system processes data from 6 sensor domains through a detection engine to multiple output formats including structured logs, geospatial exports, and real-time alerts.*

### Python Modules

25 Python modules covering GPS tracking, persistence detection, RF analysis, BLE enumeration, ISM signal classification, surveillance detection, and operator interface — ~8,200 total Python LOC.

*Module names and detailed breakdown withheld.*

### Security Modules (Hardened)

| Module | Protection | LOC |
|--------|------------|----:|
| `mode_controller.py` | Role-based capture profiles (lab/demo/field) | 304 |
| `input_validation.py` | Dedicated InputValidator class for all sensor inputs | 300 |
| `secure_main_logic.py` | Secure monitoring logic with audit logging | 262 |
| `secure_database.py` | SQL injection prevention — parameterized queries only | 215 |
| `secure_credentials.py` | Fernet encryption with PBKDF2 key derivation (100k iterations) | 214 |
| `secure_ignore_loader.py` | Safe allowlist loading — eliminated `exec()` calls | 174 |

*6 security modules — 1,469 LOC of hardened code*

---

## Detection Engineering Highlights

### 1. Multi-Domain Correlation

TraceLock™ correlates signals across domains to identify sophisticated threats:

TraceLock™ correlates events across multiple sensor domains to identify compound threats that single-domain tools miss. When signals from multiple domains converge, the system elevates the combined observation into a structured threat alert with full evidence chain.

*Implementation details withheld.*

### 2. Detection Rules with Tunable Thresholds

| Detection | Trigger Category | False Positive Mitigation |
|-----------|-----------------|---------------------------|
| Rogue AP | Network identity anomaly | Vendor validation + allowlisting |
| BLE Tracker | Repeated device across locations | Known device filtering |
| ISM Trigger | Sub-GHz burst pattern | Pattern library matching |
| GPS Anomaly | Position discontinuity | Multi-fix averaging |
| Drone Proximity | ADS-B proximity alert | Flight path prediction |

*Specific threshold values and trigger parameters are proprietary.*

### 3. Security Hardening

- **SQL Injection Prevention:** Parameterized queries for all database operations
- **Credential Protection:** Encrypted storage with secure key derivation
- **Input Validation:** Strict type checking on all sensor inputs
- **Audit Logging:** Immutable event logs with cryptographic checksums
- **Mode Controller:** Role-based capture profiles (lab/demo/field)

---

## Results & Metrics

| Metric | Target | Current Status |
|--------|--------|----------------|
| Detection accuracy (Wi-Fi) | 95%+ | Achieved |
| Detection accuracy (BLE) | 95%+ | Achieved |
| False positive rate | <5% | 3.2% (tuned) |
| Triage time reduction | 50-70% | Pending field validation |
| Sensor coverage | 6 domains | All operational |

---

## Evidence Artifacts

### Architecture Overview

TraceLock™ uses a three-layer architecture: **Sensor Layer** (multi-domain RF inputs) → **Processing Layer** (normalization, correlation, detection) → **Output Layer** (forensic logs, geospatial exports, real-time alerts).

*Detailed architecture diagrams are proprietary.*

### Sample Detection Output

TraceLock™ produces structured JSON alerts with timestamp, alert classification, severity rating, sensor evidence, geolocation, and correlation identifiers. Output is designed for forensic chain-of-custody requirements and downstream SIEM ingestion.

*Sample output schema is proprietary. Synthetic examples available in the [public repository](https://github.com/Pharns/tracelock-public/tree/main/examples).*

### KML Visualization
*Threat locations mapped with temporal correlation — screenshots available on request*

---

## Compliance & Ethics

| Requirement | Compliance |
|-------------|------------|
| FCC Part 15/97 | Passive monitoring within regulations |
| FAA Part 107 | Licensed drone pilot (certified) |
| Amateur Radio | Licensed (HAM, GMRS) |
| WGU IRB | Not human subjects research |

---

## Technical Skills Demonstrated

### Detection Engineering
- [x] Custom detection rule development
- [x] Threshold tuning and optimization
- [x] False positive analysis and mitigation
- [x] Multi-source correlation logic
- [x] Alert severity classification

### Security Automation
- [x] Python automation pipelines
- [x] Real-time data processing
- [x] Structured logging (JSON, Markdown)
- [x] CI/CD with GitHub Actions
- [x] Database operations (SQLite)

### RF/Wireless Security
- [x] Wi-Fi monitoring and analysis
- [x] Bluetooth/BLE enumeration
- [x] SDR signal processing
- [x] GPS correlation
- [x] ADS-B decoding

### Security Hardening
- [x] Secure coding practices
- [x] Credential encryption
- [x] Input validation
- [x] Audit trail design

---

## Project Status

| Phase | Status | Notes |
|-------|--------|-------|
| Hardware Assembly | ✅ Complete | 8 core RF modules integrated, field-ready |
| Software Core | ✅ Complete | Detection engine operational on Pi |
| Security Hardening | ✅ Complete | All 6 security modules implemented |
| WGU Task 1 (Topic) | ✅ Approved | Official capstone approval received |
| WGU Task 2 (Proposal) | ✅ Complete | Submitted and approved |
| WGU Task 3 (Final Report) | ✅ Complete | Submitted and approved |
| IP Protection | ✅ Active | Proprietary |
| GitHub CI/CD | ✅ Active | Smoke tests on push |

**Degree Conferred:** March 2026 (B.S. Cybersecurity & Information Assurance)

---

## What This Demonstrates (Agentic Detection & Adversarial Validation Capabilities)

1. **I can build detection systems** — Not just use them, but architect and implement custom detection logic
2. **I understand multi-domain correlation** — The same thinking applies to SIEM correlation rules
3. **I write secure code** — Parameterized queries, encrypted credentials, input validation
4. **I document for auditors** — Evidence-grade logging with reproducible results
5. **I ship working systems** — Hardware + software integration, not just theory

---

## Related Projects

- [Governed Security Architecture](../architecture/governed-security-architecture.md) — TraceLock's role in the integrated security model
- [Security Telemetry → Governance → Decision Architecture](../architecture/security-telemetry-decision-architecture.md) — capstone architecture flow
- [Security Decision Architecture (SDA)](../architecture/security-decision-architecture.md) — technical decision pipeline integrating detection, governance, and automation
- [Homelab Infrastructure](homelab-infrastructure.md) — The lab where TraceLock™ was developed
- [Remote Access & Zero-WAN](remote-access-zero-wan.md) — Secure architecture for remote development
- [GIAP™](giap.md) — GRC automation platform using similar pipeline patterns

---

TraceLock™ demonstrates how adversarial signal detection can be governed as an architectural layer — not merely implemented as a collection of monitoring scripts.

---

[TraceLock Public Repo](https://github.com/Pharns/tracelock-public){ .md-button .md-button--primary }
[Artifacts (Synthetic)](https://github.com/Pharns/tracelock-public/tree/main/examples){ .md-button target=_blank }
[Connect on LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button }
[Contact Me](../contact.md){ .md-button }

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "TraceLock™ — Multi-Domain RF Threat Detection Platform",
  "description": "Multi-domain RF threat detection platform with real-time monitoring across wireless domains. Detection engineering with Python automation and forensic-grade logging.",
  "author": {
    "@type": "Person",
    "name": "Pharns Genece",
    "url": "https://portfolio.pharns.com"
  },
  "datePublished": "2025-12-01",
  "dateModified": "2025-12-25",
  "publisher": {
    "@type": "Person",
    "name": "Pharns Genece"
  },
  "mainEntityOfPage": "https://portfolio.pharns.com/cybersecurity/tracelock/",
  "keywords": ["RF security", "detection engineering", "SDR", "wireless security", "Python", "threat detection"],
  "about": {
    "@type": "SoftwareApplication",
    "name": "TraceLock",
    "applicationCategory": "Security Software",
    "operatingSystem": "Linux"
  }
}
</script>

---

## Frequently Asked Questions

**What is TraceLock?**
TraceLock is a multi-domain RF threat detection platform that monitors 6 wireless domains simultaneously — Wi-Fi, Bluetooth Low Energy, SDR (ISM band), GPS, ADS-B, and cellular — correlating threats across sensors to produce forensic-grade evidence logs.

**How is TraceLock different from a traditional wireless IDS?**
Traditional WIDS monitors Wi-Fi only using signature-based detection. TraceLock correlates activity across 6 RF domains with behavioral analysis, runs on a ~$200 Raspberry Pi instead of $10K+ enterprise appliances, and produces chain-of-custody-ready evidence logs.

**What hardware does TraceLock require?**
A Raspberry Pi 4/5, RTL-SDR dongle, HackRF One (optional), BLE-capable adapter, and GPS receiver. Total hardware cost is approximately $200, compared to $10,000+ for enterprise wireless security appliances.

**What detection engineering skills does TraceLock demonstrate?**
Multi-source correlation, custom detection rule authoring with tunable thresholds, false positive reduction through pattern extraction, real-time alerting, structured logging pipelines, and security hardening (parameterized queries, encrypted credentials, input validation).

<br>
---
<div style="display: flex; justify-content: space-between; align-items: center;">
    <a href="../incident-response/" class="btn-ghost" style="text-align: left;">
        &larr; Previous Project<br>
        <span style="font-weight: bold; font-size: 1.1em;">Detection & IR Lab</span>
    </a>
    <a href="../homelab-infrastructure/" class="btn-ghost" style="text-align: right;">
        Next Project &rarr;<br>
        <span style="font-weight: bold; font-size: 1.1em;">Homelab Infrastructure</span>
    </a>
</div>
