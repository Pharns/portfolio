---
hide:
  - navigation
  - toc
---

# 📸 Screenshot Management Guide

This folder stores **all UI screenshots** used across the portfolio.  
Use the conventions below so visuals stay consistent, accessible, and recruiter-friendly.

---

## 📁 Where things go
- **Screenshots (UI, app views, dashboards):** `docs/assets/screenshots/` ← this folder  
- **Diagrams / illustrations / logos:** `docs/assets/images/`

> Tip: When linking, use a path **relative to the page** you’re editing.  
> - From a root page (e.g., `docs/index.md`): `assets/screenshots/...`  
> - From `docs/cybersecurity/...`: `../assets/screenshots/...`  
> - From `docs/python/...`: `../assets/screenshots/...`

---

## 🏷️ File naming (required)
- **lowercase-hyphenated** (kebab-case)  
- **no spaces**, **no CamelCase**, **no dates** unless needed  
- Start with the **tool or context** for clarity

**Examples**
- `nessus-scan-summary.png`  
- `homelab-network-diagram.png`  
- `incident-response-case.png`  
- `python-dataviz-output.png`  
- `drone-payload-test.png`

> If you must reference a filename with spaces (legacy assets), **URL-encode** spaces in links (e.g., `Beelink%20SER5%20Mini%20PC.png`). Prefer renaming to kebab-case.

---

## 🎨 Format & quality
- **PNG** for UI/screenshots and diagrams  
- **JPG** for photo-heavy images  
- Keep images crisp; avoid heavy compression artifacts  
- Crop to the relevant area; remove sensitive info

---

## 📐 Display size
Use Markdown attribute lists (enabled in MkDocs):

- **Default:** `{ width="600" }`  
- **Wide dashboards/diagrams:** `{ width="800" }`  
- **Small inline:** `{ width="400" }`

---

## 📝 Captions (site-wide standard)
- Always add a **one-line italic** caption **directly under** the image  
- **No “Figure:”**, use our **colon** format:

**Template**
```markdown
*<Title> : <short, keyword-rich summary>.*
```
