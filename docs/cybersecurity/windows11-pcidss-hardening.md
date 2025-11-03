---
title: Windows 11 PCI-DSS Hardening — Real-World Compliance Response
description: Incident-driven endpoint remediation aligning a Windows 11 financial workstation with PCI DSS v4.0 standards and full visual evidence of encryption, patching, malware scanning, and audit logging.
---

# Windows 11 PCI-DSS Hardening — Real-World Compliance Response

*PCI-DSS Workstation Remediation : Incident-driven, evidence-backed hardening of a Windows 11 endpoint to meet PCI DSS v4.0.*

---

## Summary (HR/Recruiter)

**Role →** Cybersecurity Engineer (Endpoint Hardening)  
**Context →** Mortgage-sector workstation shipped with prior user credentials and client PII (non-compliant).  
**Objective →** Contain risk, re-image, and implement PCI DSS v4.0-aligned controls.  
**Outcome →** PCI DSS-aligned, auditable endpoint with encryption, least privilege, monitoring, and audit logging.

---

## Objectives

- **Contain & Remediate Risk →** Remove legacy access and sanitize data.  
- **Establish Compliance Controls →** Implement workstation safeguards mapped to **PCI DSS v4.0 Req. 5–10**.  
- **Document & Verify →** Produce audit trail, control matrix, and reproducible configuration.

---

## Phase 1 — Incident Response & Containment

1. **Forensic Snapshot →** Confirmed residual accounts and client data.  
2. **Access Removal →** Deleted unauthorized users and revoked cached credentials.  
3. **Data Sanitation →** Secure deletion using *SDelete*.  
4. **Gap Analysis →** Mapped deficiencies against **PCI DSS v4.0** endpoint controls.

---

## Phase 2 — Rebuild & Core Hardening

- **Clean Install →** Windows 11 Pro (23H2).  
- **Disk Encryption →** BitLocker AES-XTS-256, TPM + PIN, recovery key vaulted.  
- **Account Design →** Standard user + AdminOps; built-in Administrator disabled.  
- **Patch Management →** Automatic security updates enforced.  
- **Network Segmentation →** Workstation isolated on VLAN; VOIP phone inline between PC and switch for communication segregation.

---

## Phase 3 — Security Controls Implementation

| Category | Control | Implementation |
|---|---|---|
| **Endpoint Protection** | AV / EDR | Microsoft Defender for Endpoint; Controlled Folder Access enabled |
| **Application Control** | Whitelisting | WDAC baseline for approved binaries |
| **Least Privilege** | Admin rights | “Run as Administrator” only for two work apps (justified) |
| **Network Visibility** | Flow monitoring | GlassWire for connection alerts and bandwidth logging |
| **Firewall** | Stateful protection | All profiles On; inbound default Deny |
| **Legacy Protocols** | Removal | SMBv1 disabled; TLS 1.3 only |
| **Local Policy** | UAC + Passwords | Always Notify; 14-char minimum; lockout policy |

---

## Phase 4 — Logging & Compliance Mapping

- **Windows Event Forwarding →** to central syslog collector.  
- **PowerShell Transcription + Module Logging →** Enabled and archived.  
- **Defender Logs →** Rotated weekly; 90-day retention.  
- **GlassWire Reports →** Monthly exports archived.  
- **Control Matrix (Excerpt):**

| PCI DSS Req | Control | Evidence |
|---|---|---|
| **5 – Protect Systems** | EDR, WDAC, Defender | Defender console export |
| **6 – Secure Apps** | Patch policy; SMBv1 removed | Update history |
| **7 – Access Control** | Standard user + AdminOps | SecPol report |
| **8 – Identify Users** | Lockout & Password Policy | SecPol export |
| **10 – Log & Monitor** | WEF, PowerShell, GW Reports | Syslog extracts |

---

## 📸 Verification & Evidence (Full PCI-DSS Audit Trail)

### Encryption Verification
![BitLocker Encryption Status](../assets/screenshots/pci-dss/DA3AB0C3-67D1-4059-B004-53A28E707930_1_105_c.jpeg)  
*BitLocker Verification : Drive fully encrypted, XTS-AES-128, protection active.*

![BitLocker Verification 2](../assets/screenshots/pci-dss/7159F19A-AB3A-4404-98AE-FFF0319E6095_1_105_c.jpeg)  
*Drive Encryption : BitLocker v2.0 — 100 % used-space encryption verified.*

![BitLocker Verification 3](../assets/screenshots/pci-dss/59073F15-0297-4796-9FE4-2E2FDA93B208_1_105_c.jpeg)  
*Protection Status : TPM key protectors configured, drive unlocked for audit.*

---

### Endpoint Protection & Patching
![Windows Defender Quick Scan](../assets/screenshots/pci-dss/5C7F53FE-B8FC-48EF-B763-615C3EA5BAF6_1_105_c.jpeg)  
*Virus & Threat Protection : Quick scan completed — no threats found.*

![Windows Defender Protection Updates](../assets/screenshots/pci-dss/D7BDEEE0-E2F2-414F-A51C-170C44A961C8_1_105_c.jpeg)  
*Security Intelligence : Defender signatures current; automatic updates verified.*

![Firewall Profiles](../assets/screenshots/pci-dss/89BE83A4-9FF9-459F-87EE-72134360ED41_1_105_c.jpeg)  
*Firewall Profiles : Domain, Private, and Public firewalls enabled and active.*

![Windows Update Dashboard](../assets/screenshots/pci-dss/DCA838D3-1D70-4882-A8FB-9B58B9A38D2D_1_105_c.jpeg)  
*Patch Management : Security intelligence update installed and verified.*

![Patch My PC Dashboard](../assets/screenshots/pci-dss/02B567D8-B363-4F44-B9F2-78140D3E2C90_1_105_c.jpeg)  
*Application Maintenance : Core apps (Brave, Chrome, Malwarebytes, 7-Zip) fully up to date.*

---

### Backup & Imaging
![Macrium Reflect Backup](../assets/screenshots/pci-dss/B168E441-ED5D-4587-981E-D812EB116802_1_105_c.jpeg)  
*System Backup : Verified Macrium Reflect image created before BitLocker deployment.*

![Macrium Reflect Verification](../assets/screenshots/pci-dss/97E1AFC0-AA66-4F72-8DDB-B3B1B5F620FC_1_105_c.jpeg)  
*Disk Image Status : UEFI + NTFS volumes backed up; recovery validated.*

---

### Malwarebytes Remediation
![Malwarebytes Setup](../assets/screenshots/pci-dss/DDCF49B7-0418-460C-AA9B-EFF740C3B948_1_105_c.jpeg)  
*Malwarebytes Scan : Initial full device scan launched for rootkits and PUPs.*

![Malwarebytes Settings](../assets/screenshots/pci-dss/845C4C1C-4A46-4FC7-8EC5-1465A73519B1_1_105_c.jpeg)  
*Detection Settings : Rootkit, archive, and AI-based threat detection enabled.*

![Malwarebytes Quarantine Progress](../assets/screenshots/pci-dss/8DC592C1-B66D-43DE-8E07-6F068E02A62C_1_105_c.jpeg)  
*Scan Results : 2048 potential threats identified; quarantine in progress.*

![Malwarebytes Removal Confirmation](../assets/screenshots/pci-dss/068FB183-02F8-4285-8448-B37AAF6B4E9D_1_105_c.jpeg)  
*Threat Removal : All detected items removed; system restart required.*

---

### Audit & Event Logging
![Event Viewer Log Settings](../assets/screenshots/pci-dss/C238A959-CCCC-40E3-B913-B890CC69DA3F_1_105_c.jpeg)  
*Security Log Retention : Audit size and overwrite policy configured.*

![PCI Audit Custom View Setup](../assets/screenshots/pci-dss/D6D5B176-D097-4D0A-A4B0-9AC11333BD7F_1_105_c.jpeg)  
*Audit View Creation : PCI-DSS custom log filter defined for Defender and logon events.*

![PCI Audit XML Filter](../assets/screenshots/pci-dss/C33310E5-1F66-4D94-91C1-6D042FB1D58C_1_105_c.jpeg)  
*XML Query Filter : Captures event IDs for authentication and AV monitoring.*

---

### Network Visibility
![GlassWire Traffic Monitor](../assets/screenshots/pci-dss/6F9F50FA-A126-4395-A27A-B81DEF38BFA7_1_105_c.jpeg)  
*Network Telemetry : Real-time connection tracking and protocol analysis.*

---

## Results & Impact
- **Encryption →** Full-disk BitLocker; TPM secured.  
- **Least Privilege →** AdminOps only; limited elevation.  
- **Visibility →** GlassWire + Event Viewer custom PCI filter.  
- **Compliance Alignment →** Controls mapped to PCI DSS Req 5-10.  
- **Audit Readiness →** Evidence pack with verified screenshots.

---

## Lessons Learned
1. Reassignment risk → sanitize endpoints before redeployment.  
2. Compliance is operational → log rotation and audit proof matter.  
3. Segmentation → VOIP inline monitoring adds visibility with minimal overhead.

---

## Keywords (ATS / SEO)
**Cybersecurity Analyst; Endpoint Protection; Vulnerability Assessment; Incident Response; Risk Management; SOC; Windows Hardening; BitLocker; WDAC; SIEM; PCI DSS; Zero Trust; Firewall Management; IAM; PowerShell; Logging & Monitoring.**

---

## Architecture Snapshot
```mermaid
flowchart TD
    A[Unsecured Workstation] -->|IR & Wipe| B[Clean Re-image + BitLocker]
    B --> C[Least Privilege (Std + AdminOps)]
    C --> D[WDAC + EDR + Firewall]
    D --> E[GlassWire Monitoring + VOIP Inline]
    E --> F[WEF + PowerShell Logging + Evidence]
    F --> G[PCI DSS v4.0 Aligned Endpoint]
```

---

## Evidence Directory (GitHub Repo Structure)

```
docs/
├── cybersecurity/
│   └── windows11-pcidss-hardening.md
└── assets/
    └── screenshots/
        └── pci-dss/
            ├── DA3AB0C3-67D1-4059-B004-53A28E707930_1_105_c.jpeg
            ├── 7159F19A-AB3A-4404-98AE-FFF0319E6095_1_105_c.jpeg
            ├── 59073F15-0297-4796-9FE4-2E2FDA93B208_1_105_c.jpeg
            ├── 5C7F53FE-B8FC-48EF-B763-615C3EA5BAF6_1_105_c.jpeg
            ├── D7BDEEE0-E2F2-414F-A51C-170C44A961C8_1_105_c.jpeg
            ├── 89BE83A4-9FF9-459F-87EE-72134360ED41_1_105_c.jpeg
            ├── DCA838D3-1D70-4882-A8FB-9B58B9A38D2D_1_105_c.jpeg
            ├── 02B567D8-B363-4F44-B9F2-78140D3E2C90_1_105_c.jpeg
            ├── B168E441-ED5D-4587-981E-D812EB116802_1_105_c.jpeg
            ├── 97E1AFC0-AA66-4F72-8DDB-B3B1B5F620FC_1_105_c.jpeg
            ├── DDCF49B7-0418-460C-AA9B-EFF740C3B948_1_105_c.jpeg
            ├── 845C4C1C-4A46-4FC7-8EC5-1465A73519B1_1_105_c.jpeg
            ├── 8DC592C1-B66D-43DE-8E07-6F068E02A62C_1_105_c.jpeg
            ├── 068FB183-02F8-4285-8448-B37AAF6B4E9D_1_105_c.jpeg
            ├── C238A959-CCCC-40E3-B913-B890CC69DA3F_1_105_c.jpeg
            ├── D6D5B176-D097-4D0A-A4B0-9AC11333BD7F_1_105_c.jpeg
            ├── C33310E5-1F66-4D94-91C1-6D042FB1D58C_1_105_c.jpeg
            └── 6F9F50FA-A126-4395-A27A-B81DEF38BFA7_1_105_c.jpeg
```
