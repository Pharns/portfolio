# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static portfolio website for showcasing cybersecurity and Python projects, built with **MkDocs Material** and deployed automatically to GitHub Pages via GitHub Actions.

**Live Sites:**
- Primary (custom domain): https://portfolio.pharns.com
- GitHub Pages: https://pharns.github.io/portfolio

The portfolio is organized into three main content areas:
- **Cybersecurity** - Homelab infrastructure, penetration testing, incident response, vulnerability assessments, PCI-DSS hardening
- **Python** - 100 Days of Python bootcamp exercises and independent projects
- **Innovation** - Drone payload systems, SDR/RF security research, 3D-printed modular designs

## Development Commands

### Build and Serve Locally
```bash
# Install dependencies (use virtual environment recommended)
pip install -r requirements.txt

# Serve site locally with live reload (default: http://127.0.0.1:8000)
mkdocs serve

# Build static site (outputs to site/ directory)
mkdocs build

# Build with strict mode (fails on warnings - same as CI/CD)
mkdocs build --strict
```

### Python Virtual Environment
```bash
# Create virtual environment (if needed)
python -m venv .venv

# Activate virtual environment
source .venv/bin/activate  # Mac/Linux
.venv\Scripts\activate     # Windows

# Deactivate
deactivate
```

### Deployment
- **Automatic:** Push to `main` branch triggers `.github/workflows/gh-pages.yml`
- **Manual:** Use workflow_dispatch in GitHub Actions UI
- The workflow builds with `--strict` mode and writes a CNAME file (`portfolio.pharns.com`) to the `site/` directory
- Deployment happens in two phases: build (runs `mkdocs build --strict`) and deploy (uploads artifact to GitHub Pages)

## Architecture and Content Structure

### MkDocs Configuration (`mkdocs.yml`)
- **Site metadata:** Name, URL, repo links, copyright
- **Theme:** Material theme with navigation tabs, instant loading, code copy, dark/light mode toggle
- **Strict mode enabled:** Build fails on broken links or missing files (enforced in CI/CD)
- **Markdown extensions:** Admonitions, code highlighting, tabbed content, task lists, footnotes
- **Plugins:** Search and HTML minification
- **Navigation:** Hierarchical structure defined in `nav` section (100+ lines)

### Content Organization (`docs/`)
```
docs/
├── index.md                 # Landing page
├── about.md                 # Professional bio
├── certifications.md        # CompTIA, ISC², ITIL, LPI certifications
├── contact.md               # Contact information
├── cybersecurity/           # Cybersecurity projects
│   ├── index.md
│   ├── homelab-infrastructure.md
│   ├── homelab-journey.md
│   ├── vulnerability-assessment.md
│   ├── incident-response.md
│   ├── penetration-testing.md
│   ├── blog-writeups.md
│   ├── windows11-pcidss-hardening.md
│   └── pci-dss/             # Multi-page PCI-DSS case study
│       ├── index.md
│       ├── architecture.md
│       ├── implementation.md
│       ├── security-controls.md
│       ├── verification.md
│       └── lessons-learned.md
├── python/                  # Python learning journey
│   ├── index.md
│   ├── 100-days/            # Daily bootcamp exercises
│   │   ├── index.md
│   │   ├── day01-hello-world.md
│   │   ├── day05-password-generator.md
│   │   └── (more days...)
│   └── projects/
│       └── index.md
├── innovation/              # Innovation and hardware projects
│   ├── index.md
│   ├── drone-payload-systems.md
│   ├── rf-security.md
│   ├── modular-designs.md
│   └── innovation-blogs.md
└── assets/                  # Media files
    ├── images/
    ├── screenshots/
    └── diagrams/
```

### Templates (`templates/`)
When creating new project pages, use these templates as starting points:
- **`project-template.md`** - Standard project writeup structure with Tools, Workflow, Results, Key Takeaway sections
- **`case study template.md`** - Detailed case study format for complex projects
- **`Python-100-days_template.md`** - Template for 100 Days of Python exercises
- **`in-development.md`** - Placeholder for work-in-progress pages

### Assets and Media
- **Screenshots:** `docs/assets/screenshots/` - PNG/JPG screenshots for project pages
- **Images:** `docs/assets/images/` - General images, logos, icons
- **Diagrams:** `docs/assets/diagrams/` - Architecture diagrams (PNG format preferred)

## Content Guidelines

### Adding New Pages
1. Create markdown file in appropriate `docs/` subdirectory
2. **CRITICAL:** Add entry to `nav` section in `mkdocs.yml` - this is required for the page to appear in navigation
3. Follow template structure from `templates/` directory (see Templates section)
4. Add images/screenshots to `docs/assets/` with descriptive filenames (lowercase-with-dashes, compressed PNG/JPEG)
5. Use relative paths for images: `![Description](../assets/screenshots/filename.png)`
6. Verify images render locally and check casing (case-sensitive on deploy)

### Markdown Conventions
- Use admonitions for callouts: `!!! note`, `!!! warning`, `!!! tip` (use sparingly)
- Code blocks with language highlighting: ` ```python `, ` ```bash `
- Task lists: `- [ ]` for unchecked, `- [x]` for checked
- Tabbed content available via `pymdownx.tabbed` extension
- All pages should have H1 heading (`#`) as title
- Keep headings concise and use sentence case
- Prefer direct, recruiter-friendly language; avoid filler and keep pages scannable with lists and short paragraphs

### Navigation Structure
- Top-level sections: Home, About, Certifications, Cybersecurity, Python, Innovation, Contact
- Cybersecurity section includes cross-referenced "Drone Cyber Payload Systems" from Innovation
- Navigation is manually maintained in `mkdocs.yml` - **must update `nav` when adding pages**

## Important Notes

### Strict Mode (Critical)
The site builds with `strict: true` in `mkdocs.yml`, which means:
- **Broken internal links will fail the build**
- **Missing images will fail the build**
- **ALWAYS run `mkdocs build --strict` before pushing** to catch issues locally
- CI/CD also runs with `--strict` mode, so build failures will block deployment

### GitHub Actions Deployment
- Workflow file: `.github/workflows/gh-pages.yml`
- Runs on: Push to `main` branch or manual trigger
- Python version: 3.11
- Custom domain: `portfolio.pharns.com` (CNAME written to `site/` during build)
- Output artifact uploaded to GitHub Pages environment

### File Exclusions
- `site/` - Build output (gitignored, generated by MkDocs)
- `.portfolio-venv/` - Python virtual environment (gitignored)
- `backups/` - Local backup directory (gitignored)
- `.DS_Store` - macOS metadata (gitignored)

### VS Code Configuration
If working with Python scripts in `.vscode/settings.json`:
- Black formatter (line length: 88)
- Ruff linting enabled
- MyPy type checking (basic mode)
- Pytest for testing (`tests/` directory)

However, note that this repository is primarily **markdown content**, not Python code. The Python configuration is for potential future scripting needs.

## Writing Style and Commit Guidelines

### Content Style (from AGENTS.md)
- Keep headings concise and use sentence case
- Prefer callouts (`!!! note`) sparingly
- Use fenced code blocks with language hints; wrap long lines manually to keep content readable
- Link internal pages with relative paths (e.g., `[IR Workflow](cybersecurity/incident-response.md)`)
- Favor direct, recruiter-friendly language; avoid filler and keep pages scannable with lists and short paragraphs

### Commit Messages
- Keep messages short, present-tense, and descriptive (e.g., `Add IR workflow diagram`, `Tighten PCI-DSS copy`)
- Scope each change to a focused topic (one page/feature per commit where possible)
- For pull requests: include a short summary, screenshots for visual changes, and note any new pages added to `nav`

### Security
- Do not commit secrets or auth tokens
- This site is static, so any credentials belong in deployment secrets only
- Pin dependencies via `requirements.txt`; if upgrading MkDocs or plugins, run a full `mkdocs build --strict` to ensure compatibility
