# Security Controls Mapping

This section maps each implemented control in the PCI DSS Compliance Project — including both the **self-hosted infrastructure** and the **hardened Windows workstation** — to the corresponding **PCI-DSS v4.0 requirements**.

---

## 🔐 Access & Authentication

| PCI-DSS v4.0 Requirement | Control Implemented | Evidence |
|---------------------------|--------------------|-----------|
| **7.2.1** | *Least-privilege enforcement* — only essential applications receive administrative elevation via scheduled task; user accounts remain standard. | `App_Privilege_*.txt`, Task Scheduler export |
| **7.2.2 / 8.2** | Separate `AdminLocal` (administrator) and `BrokerUser` (standard) accounts; OEM account removed. | Local user configuration snapshot |
| **8.1.8 / 8.1.9** | Automatic screen lock and re-authentication after 5 minutes of inactivity (policy enforced via registry + logon script). | `ScreenSaverPolicy_*.txt` |
| **8.3.6** | Always-on VPN protecting all remote access and network communication. | `VPN_Status_*.txt` |
| **10.5.1 / 12.10.5**     | GlassWire monitors connections, logs anomalies, and alerts on new outbound traffic. | `GlassWire_DB_*.sqlite`, `GlassWire_Logs_*.csv` |

---

## 🧱 Network Segmentation & Protection

| PCI-DSS v4.0 Requirement | Control Implemented | Evidence |
|---------------------------|--------------------|-----------|
| **1.2.3** | VLAN-based segmentation (VLAN 2) on TL-SG108PE switch to isolate the PCI workstation and Polycom phone from general LAN traffic. | `Network_Topology_*.txt` |
| **1.3.1** | Inbound/outbound restrictions through GL.iNet MT6000 router; full-tunnel AES-256 VPN. | Router configuration export |
| **4.2.1** | Transmission encryption enforced via VPN; all traffic tunneled before reaching Internet. | `VPN_Status_*.txt` |

---

## 💽 Data Protection & System Security

| PCI-DSS v4.0 Requirement | Control Implemented | Evidence |
|---------------------------|--------------------|-----------|
| **3.4 / 3.5** | BitLocker full-disk encryption enabled and verified. | `Encryption_Audit_*.json` |
| **5.2** | Microsoft Defender antivirus enabled with monthly status snapshot. | `DefenderStatus_*.json` |
| **6.2** | Windows Updates configured; logs archived automatically. | `WindowsUpdateLog_*.txt` |
| **10.2** | Centralized event logging exported monthly for audit evidence. | `SecurityLog_*.csv` |

---

## 🧩 Compliance Automation & Monitoring

| PCI-DSS v4.0 Requirement | Control Implemented | Evidence |
|---------------------------|--------------------|-----------|
| **10.2.7 / 12.10** | Automated verification and packaging scripts (`package-audit.ps1`, `verify-audit.ps1`) produce SHA-256 manifests and PASS/WARN/FAIL compliance reports. | `VerifyReport_*.txt`, `AuditEvidence_*.zip` |
| **6.3.3** | Script integrity and versioning validated monthly via manifest hash comparison. | `integrity_*.txt` |
| **12.10.5** | Automated evidence collection tasks scheduled for continuous monitoring. | Task Scheduler configuration |

---

## 🗣️ Communication & VoIP Integration

| PCI-DSS v4.0 Requirement | Control Implemented | Evidence |
|---------------------------|--------------------|-----------|
| **1.3 / 4.2.1** | Polycom VVX311 VoIP phone on VLAN 2 with PC passthrough — voice and data both encrypted within VPN segment. | `Network_Topology_*.txt` |

---

## 🧾 Summary

All implemented controls demonstrate that **PCI-DSS principles can be met using open-source and built-in Windows tools** when properly configured, monitored, and verified through automation.

> **Next Section:** [Compliance Verification](verification.md)
