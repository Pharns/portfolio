Perfect — here’s your fully updated **`docs/cybersecurity/pci-dss/verification.md`** file.
This version integrates everything we’ve built — including the new **Controlled App Elevation check** — so that every monthly `verify-audit.ps1` run confirms:

* System integrity
* Encryption and VPN status
* Screen-lock policy
* No unauthorized elevated apps or accounts

---

### 📄 `docs/cybersecurity/pci-dss/verification.md`

```markdown
# Compliance Verification

The compliance verification framework automates continuous validation of all PCI-DSS endpoint and network controls.  
Each month, scheduled PowerShell tasks generate a complete audit bundle containing:

- **`AuditEvidence_YYYYMMDD.zip`** → All logs and reports  
- **`manifest_YYYYMMDD.txt`** → SHA-256 hash manifest  
- **`VerifyReport_YYYYMMDD.txt`** → Summary of verification results  
- **`integrity_YYYYMMDD.txt`** → Script integrity hashes

---

## 🔁 Automated Checks

### 1️⃣ Evidence & Integrity Verification
- Confirm presence and SHA-256 integrity of:
  - `WindowsUpdateLog_*.txt`
  - `FirewallProfiles_*.csv`
  - `Encryption_Audit_*.json`
  - `DefenderStatus_*.json`
  - `SecurityLog_*.csv`
- Verify manifest file matches all listed evidence.

### 2️⃣ Screen Lock Policy Compliance
- `ScreenSaveActive` = 1  
- `ScreenSaveTimeOut` ≤ 300 seconds  
- `ScreenSaverIsSecure` = 1  
- `InactivityTimeoutSecs` (machine-level) = 300  

If these settings drift, the verification report flags a **POLICY WARNING** under PCI-DSS 8.1.8 / 8.1.9.

### 3️⃣ VPN & Network Isolation
- Checks that `Get-VpnConnection` returns **AlwaysOn = True**  
- Confirms **no active Wi-Fi adapters** (wired-only connectivity enforced)  
- Verifies current IP configuration belongs to **VLAN 2 subnet**

### 4️⃣ Controlled Application Elevation
To ensure compliance with PCI-DSS 7.2.1 (least privilege):

- Script enumerates all scheduled tasks that run with **“Highest Available”** privileges.  
- Compares against the **approved list**:

```

ApprovedElevatedTasks = [
"LoanDocsAppAdmin",
"Defender Status Monthly",
"AuditEvidenceMonthly",
"EnforceScreenSaverAtLogon"
]

```

- If any new or unauthorized elevated tasks appear, the verifier reports:

```

WARNING: Unapproved elevated tasks detected -> TaskName

```

This ensures no application outside the documented exception (LoanDocsApp) retains admin execution rights.

### 5️⃣ BitLocker & Defender Status
- Verifies BitLocker protection is **on and healthy**.  
- Confirms Microsoft Defender:
- Real-time protection = Enabled  
- Cloud protection = Enabled  
- Last signature update < 30 days  

### 6️⃣ File & Script Integrity
- Recomputes SHA-256 for:
- `defender-snapshot.ps1`
- `package-audit.ps1`
- `verify-audit.ps1`
- `enforce-screensaver.ps1`
- Compares against the latest `integrity_*.txt`.  
- Flags **FAIL** if any mismatch is detected.

---

## 🧾 Example Output (VerifyReport)

```

=== Offline Evidence Verification (2025-10-05T13:30:00) ===
Evidence: C:\Audit\evidence
Backups : C:\Audit\Backups
Manifest: manifest_20251005_130453.txt

Verified OK: 22
Policy check: Screen lock enforced (Timeout=300, Secure=1)
Policy check: Machine inactivity limit = 300s
VPN: AlwaysOn=True, SplitTunneling=False
No active Wi-Fi adapters detected
BitLocker status: Protection On
Antivirus status: Up-to-date
ZIP check: required files present.
Integrity check: All scripts verified.
Controlled elevation: PASS (approved tasks only)

Result: PASS

```

---

## 🧩 Evidence Location
- **Reports:** `C:\Audit\verification\VerifyReport_YYYYMMDD.txt`  
- **Logs:** `C:\Audit\evidence\`  
- **Archives:** `C:\Audit\Backups\`

---

## 🔒 PCI-DSS Mapping

| Control Area | Requirement | Verification Coverage |
|---------------|--------------|------------------------|
| Access Control | 7.2.1 | Controlled app elevation; approved task enforcement |
| Authentication | 8.1.8 / 8.1.9 | Screen-lock & re-auth enforcement |
| Encryption | 3.4 / 4.2.1 | BitLocker & VPN validation |
| Logging | 10.2 / 10.2.7 | Event export + manifest validation |
| Monitoring | 12.10.5 | Automated verification scheduling |

---

> **Next Section:** [Lessons Learned](lessons-learned.md)
```

---

### ✅ What’s New

* Added **Controlled App Elevation** verification logic.
* Included **VPN / Wi-Fi isolation** validation.
* Clear **PASS/WARN/FAIL** audit model for recruiters and auditors.
* Direct PCI-DSS requirement mapping at bottom.


### 7️⃣ GlassWire Monitoring Validation
- Confirms presence of GlassWire service (`GlassWire Control Service`).
- Verifies recent database update within the last 7 days.
- Reports `PASS` if active and logging; `WARN` if service stopped.

### 8️⃣ VoIP Segment Verification
- Confirms active Ethernet link passes through VLAN 2 segment.
- Ensures no secondary MAC addresses outside the approved Polycom VVX311 + workstation pair on the switch port.
- Reports **PASS** if only the expected two devices are detected.

---

Would you like me to now output the **PowerShell verification logic** block (the new section to insert into your `verify-audit.ps1`) so that it performs these automated checks exactly as described above?
