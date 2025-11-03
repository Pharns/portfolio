# System Architecture
The network follows a layered, defense-in-depth approach:

[Internet]
│
▼
[GL.iNet MT6000 Router]
↳ Always-On VPN (AES-256)
│
▼
[TP-Link TL-SG108PE Switch]
↳ VLAN 2 (Secure Segment, Port 1)
│
▼
[Polycom VVX311 IP Phone]
↳ PC Port (VLAN 2 Passthrough)
│
▼
[Windows 11 PCI Workstation]

**VoIP Integration**

The **Polycom VVX311** IP phone sits inline between the secure switch port and the workstation.  
It tags and passes VLAN 2 traffic through its PC port, maintaining segmentation while allowing voice and data on the same physical link.

**Security Benefits**
- VLAN 2 isolates VoIP + workstation from general LAN and guest networks.  
- The phone performs **802.1Q VLAN tagging**, ensuring call traffic and data remain on the encrypted VPN tunnel.  
- No DHCP or routing from the phone—traffic remains within the controlled segment.  
- Simplifies cable management while maintaining PCI-compliant network boundaries.


- **VPN** terminates at router before traffic enters LAN.  
- **VLAN 2** isolates the workstation and phone from general office traffic.  
- **BitLocker** and **Windows Defender** protect local data.  
- **Audit Framework** captures logs and hashes monthly.

Supporting Infrastructure:  
Proxmox hosts the SuiteCRM/Nextcloud/DocuSeal stack under unique VLANs with Borg-based backup rotation.# System Architecture
The network follows a layered, defense-in-depth approach:

[Internet]
│
▼
[GL.iNet MT6000 Router]
↳ Always-On VPN (AES-256)
│
▼
[TP-Link TL-SG108PE Switch]
↳ VLAN 2 (Secure Segment, Port 1)
│
▼
[Polycom VVX311 IP Phone]
↳ PC Port (VLAN 2 Passthrough)
│
▼
[Windows 11 PCI Workstation]

markdown
Copy code

- **VPN** terminates at router before traffic enters LAN.  
- **VLAN 2** isolates the workstation and phone from general office traffic.  
- **BitLocker** and **Windows Defender** protect local data.  
- **Audit Framework** captures logs and hashes monthly.

Supporting Infrastructure:  
Proxmox hosts the SuiteCRM/Nextcloud/DocuSeal stack under unique VLANs with Borg-based backup rotation.