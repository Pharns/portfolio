# Implementation Guide

## Phase 1 — System Preparation
- Update Windows 11 Home completely.
- Rename host → `RMT-BFF-LEND-01`.
- Create `AdminLocal` (admin) and `BrokerUser` (standard).
- Archive & delete OEM account.

## Phase 2 — Security Configuration
- Enable BitLocker.
- Enforce screen saver & system inactivity lock = 300 s.
- Install & verify Microsoft Defender tasks.
- Configure `C:\Audit` structure:
  - `scripts/` — PowerShell automation
  - `evidence/` — logs & reports
  - `Backups/` — ZIP archives

## Phase 3 — Network Integration
- GL.iNet MT6000 router with always-on VPN (AES-256).
- TL-SG108PE switch VLAN 2 (Port 1 → Polycom VVX311).
- Polycom passthrough to workstation Ethernet (VLAN 2).
- Disable Wi-Fi adapter to enforce wired-only VPN path.
- Connected **Polycom VVX311 VoIP phone** inline between switch Port 1 (VLAN 2) and workstation Ethernet port.  
  The phone’s **PC port** passes VLAN 2 traffic, ensuring the workstation remains on the same secure subnet while preserving QoS for voice.  
- Verified that both devices appear only on VLAN 2 interfaces.


## Phase 4 — Audit Automation
- **defender-snapshot.ps1** — Defender status export  
- **package-audit.ps1** — Evidence ZIP + SHA-256 manifest  
- **verify-audit.ps1** — Integrity, VPN, & policy verification  
- **enforce-screensaver.ps1** — Policy lock at each logon


### Network Monitoring (GlassWire)
![GlassWire Dashboard](../assets/screenshots/glasswire-dashboard.png)  
*GlassWire Dashboard : Visual network monitoring and connection alerting for PCI-DSS endpoint compliance, showing bandwidth usage, historical traffic, and real-time connection alerts.*


Installed **GlassWire** to provide local visual monitoring of all inbound and outbound connections.
Configured in “Ask to Connect” mode, it alerts the user whenever a new process attempts network access.
Bandwidth and connection history logs are archived monthly to `C:\Audit\evidence`.

**Benefits**
- Real-time alerts for unauthorized outbound connections.
- Detects data exfiltration or malware beaconing attempts.
- Complements Windows Firewall and Defender logs with visual telemetry.
