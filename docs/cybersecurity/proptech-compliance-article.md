---
description: "PropTech BLE security and privacy case study using passive RF analysis (TraceLock/Kismet). GRC-focused scope control, risk assessment, and policy alignment."
---

# PropTech BLE security and privacy case study

!!! abstract "TL;DR"
    Passive BLE/RF survey of a smart-building PropTech deployment. No device interaction or exploitation. Findings align with vendor privacy disclosures; meaningful risk concentrates in app and backend controls, not BLE advertising. Includes scope-control decision record and GRC-aligned guidance for regulated professionals.

---

## Context

Modern apartment complexes increasingly deploy PropTech platforms using Bluetooth Low Energy (BLE) for access control, sensors, lighting, and automation. This case study evaluates how those deployments affect resident privacy, security posture, and regulated professionals working from home.

## Objective

- Understand the BLE environment created by PropTech infrastructure
- Classify devices using behavioral fingerprints
- Evaluate resident privacy and security impact
- Align observed behavior with vendor privacy disclosures
- Provide role-based guidance for regulated and security-sensitive professionals

## Method (passive RF only)

- TraceLock (Kismet-based) passive capture
- Advertising-only observation (no pairing, no connections)
- Behavioral fingerprinting: name patterns, UUIDs, RSSI stability, persistence

## Evidence snapshots (redacted)

![Kismet BLE overview (passive scan)](../assets/screenshots/proptech-ble-kismet-overview.png)

![Wi-Fi infrastructure capture (supporting layer)](../assets/screenshots/proptech-wifi-infrastructure-capture.png)

## Scope and ethical constraints

This project is intentionally limited to passive observation of RF metadata. No attempts were made to authenticate to networks, pair with devices, decrypt traffic, or interfere with normal operation. Wi-Fi observations are documented only to acknowledge supporting infrastructure and governance complexity, not to identify vulnerabilities.

---

## Architecture (high level)

![PropTech BLE architecture diagram](../assets/images/proptech-ble-architecture-diagram.png)

Illustrative only; passive RF observation captures BLE advertising, not backend access.

![RF ecosystem overview](../assets/diagrams/proptech-rf-ecosystem.png)

Figure: Conceptual RF ecosystem showing coexistence of BLE and Wi-Fi layers with resident, operator, and vendor stakeholders.

---

## Key findings

- BLE density is expected in modern smart-building deployments
- "Unknown manufacturer" BLE devices are common and benign
- Observed devices align with smart locks, sensors, lighting, and gateway nodes
- No evidence of covert tracking beacons or surveillance behavior
- Risk is driven by apps and backend systems, not BLE advertising

## Governance decision record: scope control

During RF monitoring, an isolated consumer Wi-Fi access point was observed. Evidence indicated it was resident-owned (non-managed configuration, non-repeating SSID, consumer security profile). It was explicitly excluded from PropTech scope to prevent false positives and preserve risk clarity. Mature GRC practice is defined by what is intentionally excluded as much as by what is flagged.

## Risk and privacy implications

For general residents, risk from passive BLE advertising is low. The meaningful privacy inflection point is optional app installation and backend logging, not RF presence.

For regulated and security-sensitive professionals, the environment is best treated as semi-trusted. Controls should focus on endpoints, permissions, identity, and segmentation rather than RF countermeasures.

---

## Artifacts (available on request)

- Executive summary
- Methodology
- BLE fingerprint table
- Risk assessment
- Privacy policy review
- Regulated professionals impact analysis

## What this demonstrates

- Evidence-based risk assessment (not assumption-driven)
- Scope discipline and false-positive control
- Privacy policy to technical behavior correlation
- GRC as an engineering discipline, not a checklist
- Risk communication without alarmism

---

## Related work

- [TraceLock RF threat detection](tracelock.md)
- [GRC overview](../grc/index.md)
- [Contact](../contact.md)

---

*Disclaimer: This project is a defensive, passive analysis intended for education, governance evaluation, and portfolio documentation. It does not include exploitation or device interaction.*
