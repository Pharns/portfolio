---
description: TraceLock™ — Patent-pending multi-domain RF threat detection platform with real-time monitoring across Wi-Fi, Bluetooth, SDR, GPS, and ADS-B. Detection engineering with Python automation and forensic-grade logging.
---
# TraceLock™ — Multi-Domain RF Threat Detection Platform

*Patent Pending · WGU BSCIA Capstone · December 2025*

!!! success "For Hiring Managers — Detection Engineer / Security Automation"

    **What I Built:** Real-time RF surveillance detection system that monitors 6 wireless domains simultaneously, correlates threats across sensors, and produces forensic-grade evidence logs. *(Provisional patent filed)*

    **Technical Stack:** Python · Raspberry Pi 4 · RTL-SDR · HackRF · Kismet · GPS · SQLite · GitHub Actions CI

    **Detection Engineering Skills Demonstrated:**

    - Multi-domain threat correlation (Wi-Fi + Bluetooth + SDR + GPS + ADS-B)
    - Custom detection rule authoring with tunable thresholds
    - False positive reduction through AI-assisted pattern extraction
    - Real-time alerting with structured logging pipelines
    - Security hardening (parameterized queries, encrypted credentials, input validation)

    **Why This Matters:** If I can build detection logic for RF threats across 6 sensor domains, I can build detection content for your SIEM/EDR platform.

[:fontawesome-brands-github: View on GitHub](https://github.com/Pharns/Tracelock-SSD){ .md-button .md-button--primary }

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

## What I Built

### Hardware Platform (Pelican-Cased Rapid Response Kit)

| Component | Purpose |
|-----------|---------|
| Raspberry Pi 4B (8GB) | Core processing |
| RTL-SDR v3 | ISM band monitoring (433MHz, 915MHz) |
| HackRF One + PortaPack | Wideband SDR analysis |
| Alfa AWUS036ACH | Dual-band Wi-Fi monitoring |
| Ubertooth One | Bluetooth/BLE sniffing |
| GPS + LTE Modem | Location correlation + connectivity |
| 10Ah Battery Pack | 4+ hours field operation |

### Software Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    TraceLock™ Core                          │
├─────────────────────────────────────────────────────────────┤
│  SENSORS          │  DETECTION ENGINE   │  OUTPUT           │
│  ─────────────    │  ─────────────────  │  ──────────────   │
│  • Kismet (Wi-Fi) │  • Rule matching    │  • JSON logs      │
│  • rtl_433 (ISM)  │  • Threshold tuning │  • Markdown reports│
│  • Ubertooth (BT) │  • Correlation      │  • KML maps       │
│  • GPS feed       │  • Allowlisting     │  • MQTT alerts    │
│  • ADS-B decoder  │  • AI-assisted FP   │  • Audit export   │
│                   │    reduction        │                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Detection Engineering Highlights

### 1. Multi-Domain Correlation

TraceLock™ correlates signals across domains to identify sophisticated threats:

```python
# Simplified correlation example
def correlate_threat(wifi_event, bt_event, gps_fix):
    """
    Correlate Wi-Fi probe + BLE beacon at same location
    within 30-second window = potential tracking device
    """
    if (wifi_event.timestamp - bt_event.timestamp) < 30:
        if haversine(wifi_event.location, gps_fix) < 50:  # meters
            return ThreatAlert(
                severity="HIGH",
                type="TRACKING_DEVICE",
                evidence=[wifi_event, bt_event, gps_fix]
            )
```

### 2. Detection Rules with Tunable Thresholds

| Detection | Trigger | Threshold | False Positive Mitigation |
|-----------|---------|-----------|---------------------------|
| Rogue AP | SSID/BSSID mismatch | Allowlist delta | Vendor OUI validation |
| BLE Tracker | Repeated UUID across locations | 3+ sightings in 1hr | Known device filtering |
| ISM Trigger | 433MHz burst pattern | Signal strength + duration | Pattern library matching |
| GPS Anomaly | Position jump > 100m/s | Velocity threshold | Multi-fix averaging |
| Drone Proximity | ADS-B within 500m | Altitude + distance | Flight path prediction |

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

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TraceLock™ System Architecture                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│   │  Wi-Fi   │  │Bluetooth │  │   SDR    │  │   GPS    │           │
│   │ (Kismet) │  │(Ubertooth│  │(rtl_433) │  │  Module  │           │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│        │             │             │             │                  │
│        └─────────────┴──────┬──────┴─────────────┘                  │
│                             │                                        │
│                    ┌────────▼────────┐                              │
│                    │  Normalization  │                              │
│                    │     Layer       │                              │
│                    └────────┬────────┘                              │
│                             │                                        │
│                    ┌────────▼────────┐                              │
│                    │   Correlation   │                              │
│                    │     Engine      │◄──── Detection Rules         │
│                    └────────┬────────┘      + Allowlists            │
│                             │                                        │
│           ┌─────────────────┼─────────────────┐                     │
│           │                 │                 │                      │
│    ┌──────▼──────┐  ┌───────▼──────┐  ┌──────▼──────┐              │
│    │  JSON Logs  │  │  KML Export  │  │ MQTT Alerts │              │
│    │  (Forensic) │  │ (Mapping)    │  │ (Real-time) │              │
│    └─────────────┘  └──────────────┘  └─────────────┘              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

*Multi-domain sensor integration with correlation engine*

### Sample Detection Output

```json
{
  "timestamp": "2025-12-14T14:32:07Z",
  "alert_type": "ROGUE_AP_DETECTED",
  "severity": "HIGH",
  "details": {
    "ssid": "CorpWiFi-Guest",
    "bssid": "AA:BB:CC:DD:EE:FF",
    "channel": 6,
    "signal_strength": -45,
    "reason": "BSSID not in allowlist, SSID mimics known network"
  },
  "location": {
    "lat": "[REDACTED]",
    "lon": "[REDACTED]",
    "accuracy_m": 3.2
  },
  "correlation_id": "TL-2025-1214-0847"
}
```

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
| Hardware Assembly | Complete | Pelican case, all 6 modules |
| Software Core | Complete | Detection engine operational |
| WGU Task 1 (Topic) | Approved | Official capstone approval |
| WGU Task 2 (Proposal) | 85% | Final sections in progress |
| WGU Task 3 (Implementation) | 40% | Field validation pending |
| Portfolio Documentation | Current | This page |

**Expected Completion:** December 2025 (BSCIA Capstone)

---

## What This Proves

1. **I can build detection systems** — Not just use them, but architect and implement custom detection logic
2. **I understand multi-domain correlation** — The same thinking applies to SIEM correlation rules
3. **I write secure code** — Parameterized queries, encrypted credentials, input validation
4. **I document for auditors** — Evidence-grade logging with reproducible results
5. **I ship working systems** — Hardware + software integration, not just theory

---

## Related Projects

- [Homelab Infrastructure](homelab-infrastructure.md) — The lab where TraceLock™ was developed
- [Remote Access & Zero-WAN](remote-access-zero-wan.md) — Secure architecture for remote development
- [GIAP](giap.md) — GRC automation platform using similar pipeline patterns

---

[:fontawesome-brands-github: GitHub Repository](https://github.com/Pharns/Tracelock-SSD){ .md-button .md-button--primary }
[:fontawesome-brands-linkedin: Connect on LinkedIn](https://www.linkedin.com/in/pharns/){ .md-button }
[Contact Me](../contact.md){ .md-button }
