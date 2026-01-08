---
description: "Egress-only remote access with Tailscale + RustDesk + GL.iNet (OpenWrt) for Zero-WAN exposure. Cloud Security and GRC evidence-ready hardening."
---
# Remote access & Zero-WAN (GL.iNet + Tailscale + RustDesk)
*Updated: {{ page.meta.git_revision_date_localized or "" }}*

**TL;DR:** Secure, egress-only remote access using GL.iNet/OpenWrt routers, Tailscale mesh, and self-hosted RustDesk—no open internet ports. Shows safe remote control with clear roles, simple checklists, and travel-ready resilience. Outcome: remote ops with zero WAN exposure and documented travel kit steps.

**Target roles:** Cloud/GRC Engineer, Security Compliance Engineer/Analyst, Cloud Security Engineer (GRC focus).

## Why it matters
- Zero-WAN posture: remote control only over Tailnet; no public ports.
- Role-aware access: device approval, least-privilege firewall rules per VLAN/host.
- Evidence-friendly: documented setup modes, checklists, and sanitized configs.
- Resilient travel workflow: pocket router advertises routes/exit node as needed.

## Architecture (public-safe)
- **Home:** GL.iNet MT6000 (OpenWrt) with upstream VPN; desktop on isolated VLAN.
- **Tailnet:** Tailscale on router (subnet router and/or exit node) and optionally desktop for direct IP/MagicDNS.
- **Travel:** GL.iNet pocket router running Tailscale to reach home; can advertise its LAN when needed.
- **Remote control:** Self-hosted RustDesk server (LXC) reachable only via Tailnet; RustDesk clients limited to Tailnet paths.

## Modes
- **Direct:** Tailscale on desktop; laptop connects via tailnet IP/MagicDNS. Minimal firewall changes.
- **Subnet router:** MT6000 advertises desktop VLAN CIDR; allow `tailscale0` → desktop IP/ports only.
- **Exit node (optional):** Advertise exit on MT6000 or pocket router; enable per device in client.

## Hardening & hygiene
- No port forwards; egress-only (UDP 41641/TCP 443 for Tailscale; RustDesk via Tailnet).
- Firewall: allow-list Tailnet interface to specific hosts/ports (RDP/VNC/RustDesk), not whole VLANs.
- Accounts: non-admin user for remote sessions; disk encryption on endpoints; auto-update clients/agents.
- Device lifecycle: approve devices, prune stale nodes, document roles/ACLs; keep secrets out of repo.

## Operating checklists
- **Pre-travel:** Verify Tailscale connectivity (laptop/desktop/router), test sleep/wake, reboot desktop once, confirm remote control over Tailnet only.
- **During travel:** Connect pocket router to WAN; ensure Tailscale connects; reach desktop via Tailnet/MagicDNS or VLAN IP (if subnet routing).
- **Post-change:** Update sanitized configs/runbooks; rerun lint/tests if scripts change.

## Artifacts (sanitized)
- GL.iNet/OpenWrt configs (public-safe samples).
- Tailscale command snippets for subnet routes/exit nodes.
- RustDesk LXC setup notes (TUN enablement, userspace tailscaled).
- Diagrams: home/travel topology (add sanitized PNG/SVG).

## What this demonstrates
- Applied Zero-WAN remote access with mesh/VPN and endpoint hardening.
- IAM and network segmentation discipline for remote ops.
- Evidence-ready runbooks suitable for GRC/compliance narratives.

---

[Contact](../contact.md){ .btn-primary } [LinkedIn](https://www.linkedin.com/in/pharns/){ .btn-ghost }
