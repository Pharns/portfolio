# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static portfolio website for showcasing cybersecurity and Python projects, built with **MkDocs Material** and deployed automatically to GitHub Pages via GitHub Actions.

**Live Site:** https://portfolio.pharns.com
**GitHub Pages:** https://pharns.github.io/portfolio

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
source .venv/bin/python  # Mac/Linux
.venv\Scripts\activate   # Windows

# Deactivate
deactivate
```

### Deployment
- **Automatic:** Push to `main` branch triggers `.github/workflows/gh-pages.yml`
- **Manual:** Use workflow_dispatch in GitHub Actions UI
- The workflow builds with `--strict` mode and sets a custom CNAME for `portfolio.pharns.com`

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
2. Add entry to `nav` section in `mkdocs.yml` (maintains navigation structure)
3. Follow template structure from `templates/` directory
4. Add images/screenshots to `docs/assets/` with descriptive filenames
5. Use relative paths for images: `![Description](../assets/screenshots/filename.png)`

### Markdown Conventions
- Use admonitions for callouts: `!!! note`, `!!! warning`, `!!! tip`
- Code blocks with language highlighting: ` ```python `, ` ```bash `
- Task lists: `- [ ]` for unchecked, `- [x]` for checked
- Tabbed content available via `pymdownx.tabbed` extension
- All pages should have H1 heading (`#`) as title

### Navigation Structure
- Top-level sections: Home, About, Certifications, Cybersecurity, Python, Innovation, Contact
- Cybersecurity section includes cross-referenced "Drone Cyber Payload Systems" from Innovation
- Navigation is manually maintained in `mkdocs.yml` - **must update `nav` when adding pages**

## Important Notes

### Strict Mode
The site builds with `strict: true` in `mkdocs.yml`, which means:
- Broken internal links will fail the build
- Missing images will fail the build
- Always test with `mkdocs build --strict` before pushing

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
