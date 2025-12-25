---
title: Implementation Guide — Windows 11 PCI DSS Hardening
description: Step-by-step configuration and verification guide for implementing PCI DSS-aligned controls on a standalone Windows 11 workstation.
---

# ⚙️ Implementation Guide — Windows 11 PCI DSS Hardening

This document provides the **hands-on configuration workflow** used to transform an unsecured Windows 11 workstation into a **PCI DSS-aligned endpoint**.  
Each step corresponds to one or more PCI DSS v4.0 requirements and produces verifiable evidence of compliance.

---

## 🧩 1. Hardware & BIOS Preparation

| Step | Action | Purpose |
|------|---------|----------|
| **1.1** | Boot into BIOS/UEFI (`DEL` or `F2`) | Access firmware configuration |
| **1.2** | Enable **TPM 2.0** and **Secure Boot** | Required for BitLocker and platform trust |
| **1.3** | Set BIOS/UEFI password | Prevents unauthorized firmware changes |
| **1.4** | Verify boot order | Limit boot devices to internal SSD |
| **1.5** | Record firmware version | Enables future integrity checks |

> *PCI Ref 3.5 — Cryptographic Key Management*

---

## 🔒 2. BitLocker Drive Encryption

| Step | Action | Verification |
|------|---------|--------------|
| **2.1** | Open Control Panel → System and Security → BitLocker Drive Encryption | Confirm TPM recognized |
| **2.2** | Click **Turn on BitLocker** and select **TPM + PIN** protection | Enhances physical access control |
| **2.3** | Save recovery key to an **encrypted USB** or **offline vault** | Prevents key leakage |
| **2.4** | Allow encryption of **used space only** for speed | AES-XTS 256 bit mode |
| **2.5** | Reboot and confirm `manage-bde -status` shows **Protection On** | Screenshot for audit evidence |

> *PCI Ref 3.4 — Protect Stored Data*

---

## 🧱 3. Account & Access Control

| Step | Action | PCI Mapping |
|------|---------|--------------|
| **3.1** | Create a **Standard User** account for daily operations | Req 7 — Restrict Access |
| **3.2** | Rename built-in Administrator → `AdminLocal` | Reduces privilege discovery |
| **3.3** | Enforce password policy via `secpol.msc` → Account Policies | Min 14 chars, max age = 60 days |
| **3.4** | Enable account lockout after 5 failed attempts | Brute-force mitigation |
| **3.5** | Disable guest accounts | Least-privilege enforcement |

---

## 🦠 4. Endpoint Protection

| Tool | Configuration | PCI Alignment |
|------|----------------|----------------|
| **Windows Defender** | Real-time protection ON, cloud protection ON, auto sample submission ON | Req 5.1 — Anti-Virus |
| **Malwarebytes Free** | Enable rootkit & archive scanning, daily definition updates | Req 5.1.2 — Layered Defense |
| **Controlled Folder Access** | Protects Desktop/Documents from ransomware | Req 5.3 |
| **SmartScreen** | Block unverified apps & sites | Req 6.4 |

> *Run full system scan → record “0 threats found” screenshot for evidence.*

---

## 🔄 5. Patch & Update Management

| Step | Action | Verification |
|------|---------|--------------|
| **5.1** | Install **Patch My PC Home Updater** | Automates 3rd-party updates |
| **5.2** | Configure to run at logon + weekly schedule | Continuous compliance |
| **5.3** | Verify **Windows Update** set to **Automatic** | Req 6.2 |
| **5.4** | Check update logs under `C:\ProgramData\PatchMyPC\Logs` | Evidence of patch cycle |

---

## 🔍 6. Monitoring & Logging

| Tool | Configuration | PCI Reference |
|------|----------------|----------------|
| **Event Viewer** | Custom View: *PCI Audit View* (IDs 4624, 4625, 4634, 4672, 4688, 1116) | Req 10 — Log and Monitor |
| **PowerShell Transcription** | Enabled via `gpedit.msc → Windows Components → PowerShell` | Req 10.2 |
| **GlassWire** | Monitors outbound connections, alerts on new apps | Req 11.5 |
| **Task Scheduler** | Daily export of Security logs to external drive | Req 10.7 |

> *Audit evidence = `Eventvwr → Save All Events As…` with timestamp.*

---

## 🧰 7. Backup & Recovery Validation

| Tool | Configuration | Purpose |
|------|----------------|----------|
| **Macrium Reflect Free** | Full system image → external encrypted SSD | Disaster recovery |
| **Verification** | “Verify Image” option ON after backup | Confirms integrity |
| **Retention** | Keep 3 rotations (30/60/90 days) | Evidence of restore capability |

> *PCI Ref 10.5 — Secure Audit Trail Storage*

---

## 🌐 8. Network Visibility & Segmentation

| Step | Action | Validation |
|------|---------|-------------|
| **8.1** | Place workstation behind **GL.iNet Router (VLAN 2)** | Isolates PCI zone |
| **8.2** | Connect **Polycom VoIP Phone → Workstation → Switch** | Inline traffic inspection |
| **8.3** | Verify GlassWire shows only legitimate update servers | TLS handshake logs |
| **8.4** | Confirm no SMB/NetBIOS open ports (`netstat -an`) | Zero legacy protocol exposure |

---

## 🧾 9. Validation & Evidence Collection

1. Capture screenshots of each control area:  
   - BitLocker status  
   - Defender & Malwarebytes dashboards  
   - Windows Update history  
   - Patch My PC log  
   - GlassWire alert panel  
   - Event Viewer → PCI Audit View  
2. Store in `C:\PCI-Audit\Evidence\YYYY-MM-DD\`  
3. Export results to `.zip` for archival  
4. Maintain **hash manifest (SHA-256)** for chain-of-custody tracking

---

## ✅ Outcome

After completing all phases, the workstation achieved:

- **Full-disk encryption (BitLocker)**  
- **Layered malware defense (Defender + Malwarebytes)**  
- **Automated patching and verified backups**  
- **Comprehensive logging and monitoring**  
- **Documented audit evidence for each PCI DSS requirement**

> *System validated on Windows 11 23H2 — All screenshots captured from live hardened build.*

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Windows 11 PCI DSS Hardening Implementation Guide",
  "description": "Step-by-step configuration guide for implementing PCI DSS-aligned controls on a standalone Windows 11 workstation, including encryption, access control, endpoint protection, and evidence collection.",
  "totalTime": "PT4H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    "Windows 11 Pro",
    "BitLocker",
    "Windows Defender",
    "Malwarebytes",
    "Patch My PC",
    "GlassWire",
    "Macrium Reflect"
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Hardware & BIOS Preparation",
      "text": "Enable TPM 2.0 and Secure Boot in BIOS/UEFI, set firmware password, verify boot order"
    },
    {
      "@type": "HowToStep",
      "name": "BitLocker Drive Encryption",
      "text": "Enable BitLocker with TPM + PIN protection, save recovery key securely, verify encryption status"
    },
    {
      "@type": "HowToStep",
      "name": "Account & Access Control",
      "text": "Create standard user account, rename Administrator, enforce password policy and account lockout"
    },
    {
      "@type": "HowToStep",
      "name": "Endpoint Protection",
      "text": "Configure Windows Defender and Malwarebytes with real-time protection and scheduled scans"
    },
    {
      "@type": "HowToStep",
      "name": "Patch Management",
      "text": "Install Patch My PC, configure automatic updates, verify Windows Update settings"
    },
    {
      "@type": "HowToStep",
      "name": "Monitoring & Logging",
      "text": "Configure Event Viewer audit policies, enable PowerShell transcription, install GlassWire"
    },
    {
      "@type": "HowToStep",
      "name": "Backup & Recovery",
      "text": "Create system image with Macrium Reflect, verify backup integrity, establish rotation schedule"
    },
    {
      "@type": "HowToStep",
      "name": "Network Segmentation",
      "text": "Place workstation in isolated VLAN, verify network visibility with GlassWire"
    },
    {
      "@type": "HowToStep",
      "name": "Evidence Collection",
      "text": "Capture screenshots of all controls, store with timestamps, create SHA-256 hash manifest"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Pharns Genece",
    "url": "https://portfolio.pharns.com"
  }
}
</script>

