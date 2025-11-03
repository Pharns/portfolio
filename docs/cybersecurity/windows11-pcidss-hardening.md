---
title: Windows 11 PCI-DSS Hardening
description: Secure workstation configuration aligned with PCI-DSS requirements for endpoint security, data protection, and audit readiness.
---

# 🛡️ Windows 11 PCI-DSS Hardening

*“Hardening endpoints to meet compliance isn’t optional — it’s foundational.”*

This section documents the full Windows 11 Home system hardening process for PCI DSS alignment.  
The goal was to ensure the workstation met the same core principles required for handling sensitive financial or cardholder data:

- **Access Control**
- **System Integrity**
- **Malware Defense**
- **Logging & Audit**
- **Vulnerability Management**

Each control below corresponds to specific PCI DSS v4.0 objectives and demonstrates secure-by-design configuration.

---

## ⚙️ 1. Baseline Configuration

- Installed **Windows 11 Home 64-bit** on a clean SSD.
- Removed OEM bloatware and unnecessary startup tasks.
- Verified Secure Boot and TPM 2.0 active in BIOS.
- Configured local admin (`AdminLocal`) with **no shared credentials**.
- Established **Macrium Reflect Free** for baseline imaging.

> *Figure: Initial system configuration showing system partitions and verified UEFI boot integrity.*

---

## 🔒 2. Endpoint Protection

Both **Microsoft Defender** and **Malwarebytes Free** were deployed in layered mode:

- Defender provides **real-time protection, ransomware shield, and SmartScreen**.
- Malwarebytes adds **heuristic PUP/PUM detection, archive scanning, and AI-based analysis**.
- Rootkit detection, archive scanning, and context-menu integration enabled.

> *Figure: Malwarebytes advanced scanning configuration with AI-based detection enabled.*

A full system scan was executed immediately after installation, identifying and quarantining **2048 PUPs** (ZoomInfo traces and residual adware).  
All threats were removed and the system rebooted cleanly.

> *Figure: Malwarebytes quarantine progress showing successful remediation and reboot prompt.*

---

## 🧱 3. Windows Security Controls

- **Virus & Threat Protection:** Confirmed 0 active threats after full scan.  
- **Firewall Profiles:** Domain, Private, and Public firewalls enabled.  
- **Security Intelligence:** Automatic updates verified (KB updates installed daily).  
- **Ransomware Protection:** Configured via OneDrive fallback.  

> *Figure: Windows Defender protection summary showing current threat state and intelligence version.*

---

## 🧩 4. Logging & Audit Configuration

Windows Event Viewer was configured for PCI DSS evidence retention:

- Custom view **“PCI Audit View”** created to track security-relevant events:  
  logons, privilege escalation, Defender events, and system changes.  
- Security log size increased to 51,200 KB with manual clear policy.
- Audit Success and Failure enabled for all categories.

> *Figure: Event Viewer custom view filter for PCI-DSS security event tracking.*

---

## 🌐 5. Network & Patch Management

- Installed **GlassWire Free** to visualize network traffic and DNS behavior.  
- Monitored connections from Defender, OneDrive, and Browser processes to verify no unexpected outbound activity.  
- **Patch My PC Home Updater** used for routine application updates.  
- Verified all apps (Brave, Chrome, AnyDesk, Visual C++ Redistributables) were up to date.  
- **Windows Update** automated with security intelligence channel (Broad).

> *Figure: GlassWire network monitor showing HTTP/S traffic patterns and Patch My PC update summary.*

---

## 📦 6. System Imaging & Recovery

- **Macrium Reflect Free** used to create a verified image of the hardened state.  
- Image stored to encrypted external drive for roll-back and forensic retention.

> *Figure: Macrium Reflect disk imaging overview confirming partition layout and EFI boot status.*

---

## 🔍 7. Verification & Validation

Final verification included:

- Defender scan (0 threats found)  
- Malwarebytes re-scan (clean state)  
- Firewall active on all profiles  
- Event log audit view operational  
- Patch management cycle tested  

> *Figure: Verified endpoint health after full PCI-DSS hardening cycle.*

---

## 📸 Evidence Gallery

Below are the verified screenshots captured during hardening and verification.

![IMG_2461](../assets/screenshots/IMG_2461.jpeg)
![IMG_2462](../assets/screenshots/IMG_2462.jpeg)
![IMG_2463](../assets/screenshots/IMG_2463.jpeg)
![IMG_2464](../assets/screenshots/IMG_2464.jpeg)
![IMG_2465](../assets/screenshots/IMG_2465.jpeg)
![IMG_2466](../assets/screenshots/IMG_2466.jpeg)
![IMG_2467](../assets/screenshots/IMG_2467.jpeg)
![IMG_2470](../assets/screenshots/IMG_2470.jpeg)
![IMG_2471](../assets/screenshots/IMG_2471.jpeg)
![IMG_2472](../assets/screenshots/IMG_2472.jpeg)
![IMG_2473](../assets/screenshots/IMG_2473.jpeg)
![IMG_2474](../assets/screenshots/IMG_2474.jpeg)
![IMG_2475](../assets/screenshots/IMG_2475.jpeg)
![IMG_2476](../assets/screenshots/IMG_2476.jpeg)
![IMG_2477](../assets/screenshots/IMG_2477.jpeg)
![IMG_2478](../assets/screenshots/IMG_2478.jpeg)
![IMG_2479](../assets/screenshots/IMG_2479.jpeg)
![IMG_2480](../assets/screenshots/IMG_2480.jpeg)
![IMG_2481](../assets/screenshots/IMG_2481.jpeg)
![IMG_2482](../assets/screenshots/IMG_2482.jpeg)
![IMG_2483](../assets/screenshots/IMG_2483.jpeg)
![IMG_2484](../assets/screenshots/IMG_2484.jpeg)
![IMG_2485](../assets/screenshots/IMG_2485.jpeg)
![IMG_2486](../assets/screenshots/IMG_2486.jpeg)
![IMG_2487](../assets/screenshots/IMG_2487.jpeg)
![IMG_2488](../assets/screenshots/IMG_2488.jpeg)
![IMG_2489](../assets/screenshots/IMG_2489.jpeg)
![IMG_2490](../assets/screenshots/IMG_2490.jpeg)
![IMG_2491](../assets/screenshots/IMG_2491.jpeg)
![IMG_2492](../assets/screenshots/IMG_2492.jpeg)

---

*Figure: Visual confirmation of hardened configuration, malware quarantine results, firewall status, audit setup, and network telemetry alignment with PCI-DSS v4.0 objectives.*
