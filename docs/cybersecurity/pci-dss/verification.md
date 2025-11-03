---
title: Compliance Verification — Windows 11 PCI DSS Hardening
description: Validation process and evidence checklist demonstrating PCI DSS v4.0 compliance of the hardened Windows 11 workstation.
---

# 🧾 Compliance Verification — Windows 11 PCI DSS Hardening

This page documents the **verification and evidence collection** used to confirm that all implemented controls on the Windows 11 workstation comply with **PCI DSS v4.0**.  
Verification was performed through a combination of command-line validation, screenshots, log reviews, and forensic timestamping.

---

## 🧩 Verification Methodology

| Verification Type | Description |
|--------------------|-------------|
| **Configuration Validation** | Confirmed that all required controls (encryption, firewall, logging, malware protection) are actively enforced. |
| **Evidence Capture** | Collected screenshots, exported logs, and command outputs for audit preservation. |
| **Chain of Custody** | Evidence files stored under `C:\PCI-Audit\Evidence\YYYY-MM-DD\` with SHA-256 hash manifest. |
| **Repeatability** | Each test can be repeated post-update to validate compliance continuity. |

---

## 🔒 1. Encryption Verification — BitLocker

| Step | Verification Command | Expected Output |
|------|----------------------|----------------|
| **1.1** | `manage-bde -status` | “Percentage Encrypted: 100%” and “Protection Status: On” |
| **1.2** | `Get-BitLockerVolume` (PowerShell) | Returns AES-XTS 256-bit encryption method |
| **1.3** | Reboot system → verify BitLocker PIN prompt | Confirms pre-boot authentication active |
| **1.4** | Retrieve TPM info via `tpm.msc` | TPM ready and owned by system |

📸 *Evidence:* Screenshot of BitLocker panel and CLI output  
📂 *Stored at:* `C:\PCI-Audit\Evidence\Encryption\bitlocker-status.png`

---

## 🧱 2. Account & Access Verification

| Step | Tool | Validation |
|------|------|-------------|
| **2.1** | `net user` | Confirms only `AdminLocal` and `StandardUser` accounts exist |
| **2.2** | `secpol.msc → Account Policies` | Shows password complexity and lockout enabled |
| **2.3** | Attempt 5 failed logins | Account lockout triggered; recorded in Event Viewer ID 4740 |
| **2.4** | Confirm Guest account disabled | System → Family & Other Users panel |

📸 *Evidence:* Screenshots of account policy and event log  
📂 *Stored at:* `C:\PCI-Audit\Evidence\AccessControl\`

---

## 🦠 3. Anti-Malware & Threat Detection Verification

| Step | Tool | Expected Result |
|------|------|----------------|
| **3.1** | Run full scan in **Windows Defender** | “No threats found” |
| **3.2** | Run **Malwarebytes** deep scan | “0 detections” |
| **3.3** | Check update logs | Latest definitions installed |
| **3.4** | Review Event Viewer → “Microsoft-Windows-Windows Defender/Operational” | IDs 1001–1007 confirm scans completed |

📸 *Evidence:* Defender and Malwarebytes dashboard captures  
📂 *Stored at:* `C:\PCI-Audit\Evidence\AntiMalware\`

---

## 🔄 4. Patch & Update Validation

| Step | Tool | Verification |
|------|---------|--------------|
| **4.1** | **Windows Update** → View update history | All critical updates installed |
| **4.2** | **Patch My PC** log review | No outdated third-party apps detected |
| **4.3** | Check scheduled task | Weekly PatchMyPC task active |
| **4.4** | Verify log timestamp | Matches UTC date of latest patch cycle |

📸 *Evidence:* Patch My PC log export, update history screenshot  
📂 *Stored at:* `C:\PCI-Audit\Evidence\PatchManagement\`

---

## 🧠 5. Logging & Audit Trail Validation

| Step | Tool | Expected Verification |
|------|------|-----------------------|
| **5.1** | **Event Viewer** → Custom “PCI Audit View” | Events 4624 (logon), 4625 (failed logon), 4688 (process creation) visible |
| **5.2** | **PowerShell** transcript log | Stored in `C:\Logs\PowerShell\Transcripts\` |
| **5.3** | **Task Scheduler** → “PCI Log Export” job | Daily export of Security log confirmed |
| **5.4** | Review hash manifest | All event logs hashed with SHA-256 checksum |

📸 *Evidence:* Event Viewer filter XML, hash manifest screenshot  
📂 *Stored at:* `C:\PCI-Audit\Evidence\Logging\`

---

## 🌐 6. Network & Firewall Verification

| Step | Command | Validation |
|------|----------|------------|
| **6.1** | `netsh advfirewall show allprofiles` | Displays all profiles = ON |
| **6.2** | `netstat -an | find "LISTEN"` | No SMB/NetBIOS open ports |
| **6.3** | **GlassWire** dashboard | Only trusted IPs and TLS ports observed |
| **6.4** | Attempt unauthorized ping from LAN peer | No response (ICMP blocked) |

📸 *Evidence:* GlassWire connection log, firewall config screenshot  
📂 *Stored at:* `C:\PCI-Audit\Evidence\Network\`

---

## 💾 7. Backup & Restore Verification

| Step | Tool | Verification |
|------|------|--------------|
| **7.1** | Run **Macrium Reflect** → Create Full Image | Completed without errors |
| **7.2** | Run **Verify Image** | 100% integrity verification |
| **7.3** | Mount backup volume | Successful read-only mount |
| **7.4** | Store verification report in PCI folder | Confirms restore capability |

📸 *Evidence:* Macrium Reflect logs and verification summary  
📂 *Stored at:* `C:\PCI-Audit\Evidence\Backups\`

---

## 🔍 8. PCI DSS Control Verification Table

| PCI DSS Req | Control | Verification Evidence |
|--------------|----------|-----------------------|
| **3.4** | BitLocker full disk encryption | `manage-bde -status` output |
| **5.1** | Defender + Malwarebytes | Scans completed, 0 threats |
| **6.2** | Patch management automated | Patch My PC logs |
| **7.1** | Access restricted | User account validation |
| **8.3** | Two-factor BitLocker unlock | PIN prompt confirmed |
| **10.2** | Logging enabled | Event Viewer XML view |
| **11.5** | GlassWire anomaly detection | Dashboard screenshots |
| **12.10** | IR plan documented | Local SOP reference |

---

## 🧮 Evidence Chain of Custody

All evidence files are stored in a **read-only encrypted directory** to ensure audit integrity.

**Directory Structure Example:**
```
C:\
└── PCI-Audit\
    ├── Evidence\
    │   ├── Encryption\
    │   ├── AccessControl\
    │   ├── AntiMalware\
    │   ├── PatchManagement\
    │   ├── Logging\
    │   ├── Network\
    │   └── Backups\
    └── manifest.sha256
```

Each directory contains:
- Timestamped screenshots (`.png`)
- Command outputs (`.txt`)
- Hash manifest for tamper detection
- Optional PDF export for HR-facing documentation

---

## ✅ Compliance Validation Summary

| Category | Result | Notes |
|-----------|---------|-------|
| **Encryption** | ✅ Passed | Verified BitLocker AES-XTS 256-bit active |
| **Access Control** | ✅ Passed | Account lockout and password policies confirmed |
| **Anti-Malware** | ✅ Passed | Real-time protection and definition updates |
| **Patch Management** | ✅ Passed | Automated and logged weekly |
| **Logging & Monitoring** | ✅ Passed | Event logs and hash verification complete |
| **Network Security** | ✅ Passed | All profiles active, ICMP blocked |
| **Backup Integrity** | ✅ Passed | Restore verified, image valid |
| **Documentation & SOPs** | ✅ Passed | Local PCI policy PDF stored securely |

---

## 🧠 Observations

- All tested controls operated as expected under normal user and admin conditions.  
- Zero unauthorized outbound traffic was detected across 72-hour GlassWire observation.  
- Event logs consistently captured security-relevant activities with no dropped events.  
- BitLocker and TPM remained synchronized after multiple reboots and updates.

---

## 🏁 Final Compliance Statement

All verification procedures demonstrate that this **Windows 11 hardened workstation** meets or exceeds the control intent of **PCI DSS v4.0** at the endpoint level.  
All evidence is reproducible, timestamped, and preserved for forensic or HR review purposes.

> *Validated on Windows 11 23H2 — All screenshots captured from live hardened deployment.*
