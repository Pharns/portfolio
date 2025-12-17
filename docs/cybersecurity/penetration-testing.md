---
description: "Penetration testing lab and training: Kali Linux, Metasploit, hardware toolkit (HackRF, Flipper Zero). CySA+ and PenTest+ Dec 2025. Purple team perspective for GRC."
---

# Penetration Testing (Expanding Capability)

!!! tldr "For recruiters & hiring managers"
    **Current state:** Active lab operational with vulnerability scanning, exploitation practice, and detection engineering workflows. Hardware toolkit assembled (HackRF One, Flipper Zero, WiFi Pineapple, etc.).

    **Training timeline:** CySA+ (Dec 2025), PenTest+ (Dec 2025) — formal certifications in progress alongside hands-on practice.

    **Why this matters for GRC:** Understanding offensive security techniques strengthens defensive controls, audit validation, and security architecture design. "Purple team" perspective enhances GRC implementation.

    **Skills:** Kali Linux · Metasploit · Burp Suite · Nmap · Wireshark · HID Attacks · RF Security · Wireless Pentesting · Lab-Only Practice

---

## Current status: Active training & lab expansion

I'm actively building offensive security skills to complement my GRC engineering expertise. This creates a "purple team" perspective: understanding how attackers think makes me better at designing controls, validating security posture, and speaking the language of security operations teams.

**Timeline:**
- **Active lab:** Operational with DVWA, Metasploitable, Security Onion integration
- **Certifications:** CySA+ scheduled Dec 2025, PenTest+ scheduled Dec 2025
- **Hardware toolkit:** Assembled and testing (see below)
- **Focus:** Lab-only practice, ethical methodology, clear documentation

---

## 🛠️ Hardware toolkit

Comprehensive offensive security toolkit for wireless, RF, and physical security testing:

<div class="stat-grid" markdown>
<div class="stat-tile" markdown>
**HackRF One H4M**
Premium software-defined radio (SDR) for RF spectrum analysis, signal capture, and wireless protocol testing (1MHz-6GHz). Used in TraceLock™ telemetry research and wireless security assessments.
<span class="tag-chip">SDR</span> <span class="tag-chip">RF</span> <span class="tag-chip">SPECTRUM</span>
</div>

<div class="stat-tile" markdown>
**Flipper Zero**
Multi-tool for hardware hacking: RFID/NFC testing, sub-GHz analysis (315/433/868/915MHz), infrared, GPIO, BadUSB attacks. Portable platform for physical security assessments.
<span class="tag-chip">RFID</span> <span class="tag-chip">NFC</span> <span class="tag-chip">SUB-GHZ</span>
</div>

<div class="stat-tile" markdown>
**O.MG Cable**
Weaponized USB cable with embedded WiFi implant for keystroke injection, payload delivery, and remote access. Used for USB security control validation and HID attack testing.
<span class="tag-chip">HID</span> <span class="tag-chip">IMPLANT</span> <span class="tag-chip">REMOTE</span>
</div>

<div class="stat-tile" markdown>
**Diabolic Drive**
Covert USB payload delivery device for testing endpoint security controls, USB device policies, and physical access vulnerabilities in controlled lab environments.
<span class="tag-chip">USB</span> <span class="tag-chip">PAYLOAD</span> <span class="tag-chip">PHYSICAL</span>
</div>

<div class="stat-tile" markdown>
**Programmable ESP32**
Versatile WiFi/Bluetooth development board for custom attack tools: deauth attacks, evil portal, packet sniffing, BLE scanning. Programmable for security research.
<span class="tag-chip">WIFI</span> <span class="tag-chip">BLE</span> <span class="tag-chip">CUSTOM</span>
</div>

<div class="stat-tile" markdown>
**Ubertooth One**
Bluetooth/BLE monitoring and analysis tool for wireless security testing, device enumeration, protocol analysis, and LE (Low Energy) sniffing.
<span class="tag-chip">BLUETOOTH</span> <span class="tag-chip">BLE</span> <span class="tag-chip">SNIFFING</span>
</div>
</div>

**Why this toolkit matters for GRC:**
- **Control validation:** Can test whether implemented controls actually work (not just documented)
- **Threat modeling:** Understand realistic attack vectors for risk assessment
- **Security architecture:** Design defenses based on actual offensive techniques
- **Wireless security:** Rare niche expertise (RF/wireless pentesting skills are uncommon)

---

## 💻 Lab environment

**Current setup:**
- **Proxmox VE homelab** with isolated VLANs for attack/target segregation
- **Kali Purple** — Defensive security platform integrating purple team tools (combines offensive + defensive capabilities with pre-configured SIEM, IDS/IPS, threat hunting tools)
- **Kali Linux** — Primary offensive attack platform with full toolset
- **DVWA (Damn Vulnerable Web Application)** — Web exploitation practice
- **Metasploitable 2 & 3** — Intentionally vulnerable Linux targets
- **Security Onion** — Defensive monitoring to see attacks from blue team perspective
- **Windows Server** — Active Directory attack/defense scenarios
- **Network segmentation** — Proper isolation, no WAN exposure

**Lab-only practice:**
- All testing conducted in controlled, isolated environment
- No unauthorized access, no production systems
- Ethical methodology, clear documentation
- "Purple team" approach: understand offense to strengthen defense

---

## 🔧 Software toolkit

**Reconnaissance:**
- Nmap, Nessus, OpenVAS
- Nikto, Gobuster, Dirb
- Recon-ng, theHarvester
- Shodan, Censys

**Exploitation:**
- Metasploit Framework
- SQLmap, XSStrike
- Burp Suite Pro
- Hydra, John the Ripper
- Hashcat, CrackStation

**Wireless & RF:**
- Aircrack-ng suite
- Kismet
- Wireshark with wireless dissectors
- GNU Radio (SDR processing)
- Universal Radio Hacker
- inspectrum, gqrx

**Post-exploitation:**
- Mimikatz, BloodHound
- PowerSploit, Empire
- CrackMapExec
- Impacket

**Physical security:**
- BadUSB payloads (Rubber Ducky)
- Flipper Zero firmware/scripts
- RFID/NFC analysis tools
- HID attack frameworks

---

## 📚 Methodology & approach

**Penetration testing process:**
1. **Reconnaissance** — Information gathering, enumeration, attack surface mapping
2. **Vulnerability assessment** — Identify weaknesses (automated + manual)
3. **Exploitation** — Controlled exploitation in lab environment
4. **Privilege escalation** — Demonstrate impact of successful compromise
5. **Documentation** — Clear, technical writeups with remediation guidance
6. **Defensive perspective** — What controls would have prevented this?

**Purple team mindset:**
- Every attack teaches defensive controls (GRC-relevant)
- Document both exploit AND mitigation
- Understand attacker TTPs for threat modeling
- Validate security controls through offensive testing

---

## 🎯 Current focus areas

**Web application security:**
- OWASP Top 10 vulnerabilities
- SQL injection, XSS, CSRF
- Authentication/session management flaws
- Business logic vulnerabilities

**Network penetration testing:**
- Service enumeration and exploitation
- Lateral movement techniques
- Credential harvesting
- Active Directory attacks

**Wireless security:**
- Rogue access point detection
- WPA/WPA2/WPA3 attacks (lab-only)
- Bluetooth/BLE vulnerabilities
- RF signal analysis and replay attacks

**Physical security:**
- USB HID attacks (Rubber Ducky, Flipper Zero)
- RFID/NFC cloning and relay attacks
- Badge cloning for access control testing
- Social engineering awareness (documentation focus)

---

## 📖 Training & certifications

**Scheduled (Dec 2025):**
- **CompTIA CySA+** — Cybersecurity Analyst (threat detection, blue team focus)
- **CompTIA PenTest+** — Penetration testing methodologies and hands-on skills

**Current practice:**
- TryHackMe, HackTheBox labs
- Metasploitable exploitation exercises
- DVWA challenge progression
- Wireless security research (TraceLock™ integration)

**Goal:**
Combine GRC engineering (policy, controls, compliance) with offensive security knowledge (validation, threat modeling, purple team perspective) for senior-level security engineering roles.

---

## 🔐 Ethics & responsible disclosure

**Lab-only commitment:**
- All testing conducted in isolated, controlled environment
- No unauthorized access to production systems
- No real-world attacks, no malicious intent
- Follow responsible disclosure if vulnerabilities discovered in OSS
- Ethical methodology aligned with industry standards (PTES, OWASP)

**Why this matters:**
GRC roles increasingly require understanding of offensive security to properly assess risk, validate controls, and communicate with security operations teams. This isn't about becoming a full-time pentester — it's about being a **more effective GRC engineer** who can speak both languages.

---

## 🚀 Integration with GRC work

**How pentesting skills enhance GRC engineering:**

**1. Control validation:**
- Can actually test whether implemented controls work
- Validate compensating controls with hands-on verification
- Identify control gaps through offensive perspective

**2. Threat modeling:**
- Understand realistic attack paths for risk assessment
- Map attacker TTPs to framework controls (MITRE ATT&CK → NIST CSF)
- Prioritize control implementation based on actual exploitability

**3. Security architecture:**
- Design defenses based on offensive techniques, not theory
- Recommend controls that address real attack vectors
- Validate defense-in-depth strategies through testing

**4. Audit & compliance:**
- Demonstrate to auditors that controls prevent actual attacks
- Provide evidence of security posture through controlled testing
- Speak credibly about technical implementation during audits

**5. Purple team perspective:**
- Bridge GRC (governance) and SecOps (operations)
- Translate offensive findings into compliance language
- Design controls that satisfy both auditors and security teams

---

## 📊 Proof points (when certification complete)

Future additions after CySA+/PenTest+ completion:
- Lab writeups with exploit → remediation documentation
- Control validation reports (tested vs. theoretical)
- Purple team case studies (attack + defense perspectives)
- Hardware toolkit use cases (RFID testing, HID validation, wireless audits)

---

## 🔗 Related projects

- [TraceLock™ RF/SDR Security](tracelock.md) — Wireless telemetry detection (offensive research applied to defensive monitoring)
- [Detection & IR Lab](incident-response.md) — SIEM tuning, alert engineering (blue team perspective)
- [Homelab Infrastructure](homelab-infrastructure.md) — Segmented testing environment with proper isolation
- [Vulnerability Assessment](vulnerability-assessment.md) — Nessus scanning, remediation tracking

---

**Status:** Expanding capability with active lab, hardware toolkit, and scheduled certifications (Dec 2025). Goal: Combine GRC engineering expertise with offensive security knowledge for senior-level security roles.

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns){ .btn-ghost }
