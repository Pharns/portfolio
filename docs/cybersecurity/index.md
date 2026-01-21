# Cybersecurity Portfolio

Focused on detection, hardening, and compliance automation with a wireless/RF edge.

## Featured Cases
- **PCI DSS Endpoint Hardening (Win11)** — Encryption, EDR, patch automation, outbound monitoring in <48 hours; includes controls matrix and screenshots.  
- **Detection & IR Lab** — Security Onion + TheHive/Cortex + Nessus on Proxmox; authored sample detections, ran incident drills, tuned IDS noise.  
- **Zero Trust Pilots** — Tailscale vs Twingate vs Netbird; IAM and device posture notes for small teams.  
- **TraceLock™ — RF Threat Detection** — RF telemetry and evidence-grade logging across six wireless domains.  
- **PropTech RF Governance & Scope Control** — Governance case study on RF scope control and privacy risk in smart-building deployments.  
- **RF/Wireless Security Research** — SDR + UAV payload tests; BLE/Sub-GHz recon; mitigations and safe-by-design notes.  

## Cloud Control Pack (AWS)
- Hardened S3 baseline: public access block, default encryption, versioning/lifecycle, server access logging, TLS-only policy.
- GuardDuty with findings export to locked-down S3; sample findings validation and least-privilege read for ops/IR.
- IAM least-privilege app role scoped to one bucket and Parameter Store path, TLS enforcement, optional KMS constraints.
- Files: `Projects/Future Projects/aws/S3-Private-Baseline.md`, `.../GuardDuty-Lake-Export.md`, `.../IAM-Least-Privilege-App-Policy.md` (add CLI outputs/screens after AWS CP pass).
- Certification context: AWS Cloud Practitioner (pending). Remove “pending” and add CLI outputs/screens once the exam is passed.

## TraceLock™ (signature project)
TraceLock™ is a custom, author-built RF monitoring platform for defensive wireless awareness across Wi-Fi, BLE, SDR, GPS, and ADS-B. It emphasizes evidence-grade logging, repeatable capture workflows, and safe, non-interactive observation.

[View TraceLock™ project](tracelock.md)

## Additional Work
- Offensive toolkit evaluations (WiFi Pineapple, HackRF, Flipper, Rubber Ducky) with mitigations.  
- Compliance automation notes for NIST/ISO/PCI (evidence capture, scripting).  
- Homelab build and infrastructure notes for the SOC lab stack.  
