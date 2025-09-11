# 🏠 **Homelab Setup**

This page showcases my Proxmox-based homelab environment — a hands-on platform for building, testing, and securing enterprise-like systems. It serves as both a personal learning environment and a professional showcase of my ability to design and manage complex infrastructures for cybersecurity research and development.  

---

## 💡 **Key Features**
- **Virtualization with Proxmox VE** → agile deployment of multiple virtual machines for labs, testing, and production-like environments  
- **Industry SOC Tools** → Security Onion, Wazuh, Nessus, TheHive + Cortex  
- **Red Team Environments** → Kali Linux, Metasploit, DVWA, Caldera for adversary emulation  
- **Network Segmentation** → pfSense firewall with VLANs to isolate environments safely  
- **Zero Trust Pilot** → testing Tailscale, Twingate, and Netbird for secure access  
- **Self-Hosted Services** → Nextcloud, n8n, and Kasm Workspaces for workflows and collaboration  

---

## 🌐 **Lab Topology**
The network diagram below illustrates the architecture of my homelab’s Proxmox Virtual Environment (PVE), highlighting VLAN segmentation and secure interconnections designed for defense-in-depth.  

![Alt text](../assets/images/HomeLab Network Diagram-Github.jpg)  

---

## 🛠️ **Infrastructure & Tools**

**Objective:** Build a virtualized security lab for research, testing, and professional development.  

- **Core Setup**
  - **Firewall:** pfSense with VLAN segmentation  
  - **SOC Tools:** Security Onion, Wazuh, Nessus, TheHive + Cortex  
  - **Red Team Tools:** Kali Linux, Metasploit, DVWA, Caldera for adversary emulation  
  - **Self-Hosted Services:** Nextcloud, n8n, Kasm Workspaces (VLAN 100)  

- **Network Segmentation**
  - **VLAN 10** → Pen Testing (Metasploit, DVWA)  
  - **VLAN 20** → Windows AD environment  
  - **VLAN 30** → Ubuntu w/ Docker, Portainer, bWAPP  
  - **VLAN 100** → Self-hosted services  

- **Zero Trust Pilot**
  - Testing secure access with Tailscale, Twingate, and Netbird  

---

## 💻 **Proxmox Virtual Environment**
Screenshot of the Proxmox VE interface, illustrating the system’s ability to host and manage diverse virtual machines effectively.  

![Alt text](../assets/screenshots/Proxmox-Environment.png)  

---

## ⚙️ **Equipment**
- **Beelink SER5 Mini PC** ([link](https://amzn.to/42qXwRb))  
  - **CPU:** AMD Ryzen 7 5700U, 8 cores / 16 threads, up to 4.37GHz  
  - **RAM:** 64GB Corsair Vengeance DDR4 (upgraded)  
  - **Storage:** 500GB NVMe (OS), 2TB external SSD, 4TB external HDD  
  - **Connectivity:** WiFi 6, Bluetooth 5.2, USB 3.2  
  - **Virtualization:** AMD-V enabled  

---

## 🧠 **Key Learning Outcomes**
- **Infrastructure Management** → secure virtual environment administration, system hardening, resource monitoring  
- **Security Implementation** → SOC tool deployment, vulnerability scanning, incident response workflows  
- **Professional Development** → technical problem-solving, documentation, and project management  

---

## 💼 **Professional Applications**
This homelab demonstrates practical experience in:  
- Designing and securing **enterprise-grade infrastructures**  
- Implementing **SOC workflows** with real-world tools  
- Managing **segmented networks** for safe red/blue team testing  
- Deploying **Zero Trust access models** in a controlled environment  

These experiences directly align with roles in **cybersecurity engineering, SOC analysis, vulnerability management, and incident response**.  

---

## 📌 **Key Takeaway**
My homelab showcases the ability to design, deploy, and secure enterprise-like environments using industry-standard tools. It demonstrates practical skills in **defensive security, incident response, vulnerability management, and Zero Trust architectures** — skills that go beyond certifications and reflect real-world capability.  
