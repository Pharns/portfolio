---
title: Security Controls Mapping — Windows 11 PCI DSS Hardening
description: Alignment of Windows 11 endpoint controls to PCI DSS v4.0 requirements, demonstrating encryption, malware defense, logging, and audit traceability.
---

# 🧰 Security Controls Mapping — Windows 11 PCI DSS Hardening

This section provides a **control-by-control mapping** between the Windows 11 workstation configuration and the **Payment Card Industry Data Security Standard (PCI DSS v4.0)**.  
Each control includes the implemented technology, audit evidence, and compliance rationale.

---

## 🧩 Summary Overview

| PCI DSS Domain | Objective | Implemented Control |
|----------------|------------|---------------------|
| **Build & Maintain a Secure Network** | Firewalls, patching, segmentation | Windows Firewall, VLAN isolation, GL.iNet router |
| **Protect Cardholder Data** | Encryption at rest/in transit | BitLocker full disk encryption, HTTPS enforcement |
| **Maintain a Vulnerability Management Program** | Anti-malware & patch management | Windows Defender, Malwarebytes, Patch My PC |
| **Implement Strong Access Control** | Least privilege, password policies | StandardUser account, lockout policies |
| **Monitor & Test Networks** | Logging & anomaly detection | GlassWire, Event Viewer, PowerShell transcripts |
| **Maintain Information Security Policy** | Documentation & procedures | Local security SOP + audit checklist |

---

## 🔒 Requirement 1 — Install and Maintain a Firewall Configuration

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **1.1.1** | Enabled **Windows Defender Firewall** across Domain, Private, and Public profiles | Screenshot of Firewall Settings panel |
| **1.1.4** | Defined inbound/outbound rules restricting SMB/NetBIOS | `netstat -an` output, Event log |
| **1.3.1** | Workstation connected only via **GL.iNet router (VLAN 2)** for PCI zone isolation | Network diagram |
| **1.4.3** | Disabled peer-to-peer file sharing and discovery | System Settings → Network Sharing |

> *Result: The workstation only accepts authorized encrypted outbound connections.*

---

## 🔑 Requirement 2 — Secure System Components

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **2.2.1** | Removed unnecessary Windows features via “Turn Windows Features On/Off” | Installed components list |
| **2.2.3** | Enforced Windows Update auto patching | Windows Update History screenshot |
| **2.3.2** | Secure BIOS password & restricted boot devices | BIOS settings documentation |
| **2.4.1** | Asset inventory maintained for workstation and peripherals | PCI Asset Sheet (local document) |

---

## 🔐 Requirement 3 — Protect Stored Cardholder Data

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **3.4.1** | **BitLocker** full disk encryption (AES-XTS 256-bit, TPM sealed) | `manage-bde -status` output |
| **3.5.1** | TPM-based key protection and offline recovery key escrow | USB recovery file (encrypted vault) |
| **3.6.2** | Verified encryption during restarts and policy enforcement | Event Viewer system logs |

---

## 🧠 Requirement 4 — Encrypt Transmission of Cardholder Data

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **4.1.1** | TLS 1.3 enforced for all web traffic | Windows Registry TLS policy |
| **4.1.3** | GlassWire confirms HTTPS-only communications | GlassWire connection graph |
| **4.2.1** | Disabled legacy SMBv1 and insecure NetBIOS | PowerShell audit (`Get-WindowsOptionalFeature`) |

---

## 🧰 Requirement 5 — Protect All Systems Against Malware

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **5.1.1** | **Windows Defender** real-time protection + cloud updates | Defender Dashboard screenshot |
| **5.1.2** | **Malwarebytes** installed with daily scans | Malwarebytes log export |
| **5.2.1** | Controlled Folder Access + SmartScreen | Defender Security Center |
| **5.3.1** | Verified signatures and definition updates daily | Update history logs |

---

## 🔄 Requirement 6 — Develop and Maintain Secure Systems

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **6.2.1** | **Patch My PC** automated updates for third-party apps | Patch My PC log |
| **6.3.2** | Verified Windows Update auto-installation | Windows Update settings |
| **6.4.1** | Local change-control SOP with log file retention | “C:\\PCI-Audit\\Logs\\ChangeControl.txt” |
| **6.5.3** | Scheduled Defender Quick Scan daily | Task Scheduler screenshot |

---

## 👤 Requirement 7 — Restrict Access to Cardholder Data

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **7.1.1** | **StandardUser** for daily use; **AdminLocal** for maintenance | Local Users & Groups panel |
| **7.1.3** | Password complexity enforced (min 14 chars) | `secpol.msc` export |
| **7.2.1** | Role separation with no shared credentials | Account list screenshot |
| **7.3.2** | Disabled guest accounts | System → Family & Other Users |

---

## 🔑 Requirement 8 — Identify and Authenticate Access

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **8.2.1** | User login required at system startup | Login screen screenshot |
| **8.2.3** | Account lockout policy after 5 attempts | Group Policy Editor export |
| **8.3.1** | TPM + PIN unlock for BitLocker | BitLocker Settings view |
| **8.4.2** | Password expiration every 60 days | Local Security Policy |

---

## 📋 Requirement 10 — Log and Monitor All Access

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **10.1.1** | Enabled Security, Application, and System log auditing | Event Viewer configuration |
| **10.2.1** | Created “**PCI Audit View**” filter for critical event IDs | Screenshot of filter XML |
| **10.3.2** | PowerShell transcription and script block logging | GPO export |
| **10.5.1** | Logs archived daily to external encrypted drive | Task Scheduler job |
| **10.7.2** | 90-day retention + SHA256 hash manifest | “C:\\PCI-Audit\\Archive\\manifest.txt” |

---

## 🔍 Requirement 11 — Regularly Test Security Systems and Processes

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **11.2.1** | Weekly Defender & Malwarebytes scans | Scheduled Tasks log |
| **11.3.1** | Network connection analysis via GlassWire | GlassWire report export |
| **11.5.1** | File Integrity checks through Macrium Reflect image verification | Macrium verification log |
| **11.6.1** | Manual vulnerability check using Windows Security Baseline Analyzer | Screenshot summary |

---

## 🧾 Requirement 12 — Maintain an Information Security Policy

| Control ID | Implementation | Evidence |
|-------------|----------------|-----------|
| **12.1.1** | Local written **PCI Endpoint Security Policy (PDF)** | `C:\\PCI-Audit\\Policy\\Endpoint-SOP.pdf` |
| **12.2.3** | User training: recognizing phishing and USB hygiene | Security awareness checklist |
| **12.4.2** | Regular review of system changes via audit log review | Change log export |
| **12.10.1** | Documented incident response process | IR playbook (portfolio excerpt) |

---

## 🧮 Control Coverage Summary

| PCI DSS Requirement | Implemented | Evidence Collected | Compliance Status |
|----------------------|-------------|--------------------|-------------------|
| Req 1 | ✅ | Firewall config screenshots | Pass |
| Req 2 | ✅ | BIOS and update logs | Pass |
| Req 3 | ✅ | BitLocker report | Pass |
| Req 4 | ✅ | GlassWire HTTPS logs | Pass |
| Req 5 | ✅ | Defender & Malwarebytes scan logs | Pass |
| Req 6 | ✅ | Patch My PC update log | Pass |
| Req 7 | ✅ | Account policy export | Pass |
| Req 8 | ✅ | Login and lockout policy | Pass |
| Req 10 | ✅ | Event Viewer and PowerShell logs | Pass |
| Req 11 | ✅ | GlassWire + Reflect verification | Pass |
| Req 12 | ✅ | Endpoint policy documentation | Pass |

---

## ✅ Conclusion

Through layered controls — encryption, access restriction, malware defense, and audit retention — this workstation fully demonstrates **PCI DSS v4.0 endpoint alignment**.  
All controls are verifiable through stored evidence, screenshots, and logs within the audit archive.

> *Validated on Windows 11 23H2 — All controls documented for portfolio evidence only.*
