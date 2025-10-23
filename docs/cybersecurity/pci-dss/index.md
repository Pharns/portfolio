---
title: PCI DSS Compliance — Secure Infrastructure Design
description: Full-stack self-hosted architecture designed to meet PCI DSS standards for protecting cardholder data and sensitive financial transactions.
---

# PCI DSS Compliance Project

*“Building compliant systems from the silicon up.”*  

This project originated from a **real-world incident**:  
a close colleague began a new job at a mortgage company and was issued a workstation that was **completely unsecured** — no encryption, no endpoint protection, and containing **residual client data from previous employees**.  

Recognizing the severe **PCI DSS violations and data exposure risks**, I designed and documented a **secure, self-hosted architecture** capable of meeting PCI DSS principles while remaining practical for small business operations.  

---

## 🧩 Project Summary

| Category | Description |
|-----------|--------------|
| **Objective** | Remediate an unsecured mortgage workstation by developing a compliant, auditable, and scalable architecture aligned with PCI DSS. |
| **Stack** | SuiteCRM + Nextcloud + DocuSeal + MySQL + Proxmox + Zoho SMTP |
| **Focus Areas** | Secure deployment, data encryption, access control, endpoint hardening, audit logging, and network segmentation. |
| **Outcome** | Delivered a **fully hardened, self-hosted infrastructure** that isolates sensitive data and enforces end-to-end encryption and access policies. |

---

## 🏗️ Overview

This architecture demonstrates a **practical, real-world implementation** of PCI DSS requirements within a small business context, ensuring client data integrity from collection to storage.

The environment integrates:
- **SuiteCRM** — Customer data management with restricted roles and 2FA.  
- **Nextcloud** — Encrypted document storage and controlled file sharing.  
- **DocuSeal** — Digital signature platform for secure form collection.  
- **Zoho SMTP + Nginx Proxy Manager** — Authenticated mail delivery and TLS enforcement.  
- **Fail2Ban + unattended-upgrades** — Active defense and automated patching.  
- **GlassWire** — Local network monitoring and connection alerting for real-time visibility and anomaly detection.
- **Network Path:** GL.iNet MT6000 → VLAN 2 on TL-SG108PE → Polycom VVX311 → Windows 11 workstation.  
This layout supports encrypted VoIP and data traffic within the same secure VLAN, simplifying deployment while maintaining PCI segmentation.

![Architecture Diagram](../assets/diagrams/pci-architecture-overview.png)  
*Figure: PCI DSS-compliant stack topology — segmented VMs under Proxmox.*

---

## 🔒 Core Security Principles

1. **Data Minimization** — Only essential client information is retained and encrypted.  
2. **Network Segmentation** — CRM, document signing, and file storage operate in isolated Proxmox VMs with distinct VLANs.  
3. **Access Control** — Role-based permissions, strong passwords, and two-factor authentication enforced where supported.  
4. **Logging & Monitoring** — Centralized logs with daily backup verification.  
5. **Encryption Everywhere** — TLS for all communications; disk encryption (LUKS) and database encryption via `AES_ENCRYPT()` for data at rest.  
6. **Incident Response Readiness** — Defined process for device loss, credential exposure, or data tampering events.  

---

## 📁 Subpages
- [System Architecture](architecture.md)
- [Implementation Guide](implementation.md)
- [Security Controls Mapping](security-controls.md)
- [Compliance Verification](verification.md)
- [Lessons Learned](lessons-learned.md)

---

## 🧠 Credit & Context

This project evolved from a **real compliance failure observed in the mortgage industry**, where unsecured endpoints were handling cardholder and PII data without basic controls.  

By applying PCI DSS principles within a self-hosted stack, this project demonstrates how even small organizations can achieve enterprise-level data protection using open-source tools and disciplined design.  

> *All materials are sanitized for educational and portfolio demonstration purposes. No live client data, credentials, or private keys are included.*
