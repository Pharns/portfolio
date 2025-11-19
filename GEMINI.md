# Project Context for Gemini

This document provides guidance for working with this portfolio website repository. Follow these instructions carefully when assisting with development, content creation, or deployment tasks.

## About This Repository

You are working with a static portfolio website built using MkDocs Material. The site showcases cybersecurity and Python projects and is automatically deployed to GitHub Pages.

**Live Site:** https://portfolio.pharns.com
**GitHub Pages:** https://pharns.github.io/portfolio

The portfolio contains three main content areas:
- **Cybersecurity** - Homelab infrastructure, penetration testing, incident response, vulnerability assessments, PCI-DSS hardening
- **Python** - 100 Days of Python bootcamp exercises and independent projects
- **Innovation** - Drone payload systems, SDR/RF security research, 3D-printed modular designs

## Project Organization

### Content Structure
All site content lives in the `docs/` directory, organized by domain:
- `docs/cybersecurity/` - Cybersecurity project writeups
- `docs/python/` - Python learning journey and projects
- `docs/innovation/` - Innovation and hardware projects
- `docs/assets/` - Images, screenshots, and diagrams

Shared pages like `index.md`, `about.md`, `certifications.md`, and `contact.md` are in the `docs/` root.

### Configuration and Templates
- **Site configuration:** `mkdocs.yml` defines metadata, theme, navigation, and build settings
- **Templates:** `templates/` directory contains markdown templates for new pages
- **Backups:** `backups/` directory for local backup files (not served)

## Development Workflow

### Setting Up the Environment
When working with this project, you should use a Python virtual environment:

```bash
# Create and activate virtual environment
python3 -m venv .venv
source .venv/bin/activate  # Mac/Linux
.venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt
```

### Building and Testing
Always test changes locally before committing:

```bash
# Live preview with auto-reload (http://127.0.0.1:8000)
mkdocs serve

# Build static site (outputs to site/ directory)
mkdocs build

# Build with strict mode (REQUIRED before pushing)
mkdocs build --strict
```

**Important:** The site uses strict mode, which means builds will fail on:
- Broken internal links
- Missing images or assets
- Invalid markdown syntax

Always run `mkdocs build --strict` before committing changes to catch these issues.

### Deployment Process
Deployment is automated via GitHub Actions:
- Push to `main` branch triggers `.github/workflows/gh-pages.yml`
- Workflow builds the site with strict mode enabled
- Built site is deployed to GitHub Pages with custom CNAME for portfolio.pharns.com
- Manual deployment can be triggered via GitHub Actions UI

## Content Creation Guidelines

### Adding New Pages
When creating new content pages:

1. Create the markdown file in the appropriate `docs/` subdirectory
2. **CRITICAL:** Update the `nav` section in `mkdocs.yml` to include the new page
3. Use a template from `templates/` as a starting point
4. Add any images to `docs/assets/` with descriptive filenames
5. Use relative paths for image references: `![Description](../assets/screenshots/filename.png)`
6. Test with `mkdocs build --strict` to ensure no broken links

### File Naming Conventions
- Use lowercase-with-dashes for all filenames
- Markdown files: `my-new-page.md`
- Images: `project-screenshot-01.png`
- Prefer compressed PNG or JPEG formats for images

### Markdown Style Guide
Follow these conventions for consistency:

- Every page should have one H1 heading (`#`) as the title
- Use sentence case for headings, not title case
- Code blocks should specify language: ` ```python `, ` ```bash `
- Use admonitions for callouts: `!!! note`, `!!! warning`, `!!! tip`
- Task lists: `- [ ]` for unchecked, `- [x]` for checked
- Internal links use relative paths: `[Text](../cybersecurity/page.md)`

### Writing Style
Write content with these principles in mind:

- **Direct and professional** - This is a portfolio for potential employers
- **Recruiter-friendly language** - Use industry-standard terminology
- **Scannable format** - Use lists, short paragraphs, and clear headings
- **Avoid filler** - Every sentence should add value
- **Present tense for descriptions** - "The system monitors..." not "The system monitored..."

## Quality Assurance

### Pre-Commit Checklist
Before committing changes, verify:

- [ ] `mkdocs build --strict` passes without errors
- [ ] All new pages are added to `nav` in mkdocs.yml
- [ ] All image paths are correct and case-sensitive
- [ ] All internal links work correctly
- [ ] Content displays correctly in both light and dark themes
- [ ] Code blocks have proper syntax highlighting

### Image Verification
When adding images:
- Verify they render correctly in local preview
- Check file path casing (deploy is case-sensitive even if your OS is not)
- Ensure images are compressed and web-optimized
- Use descriptive alt text for accessibility

## Commit and Pull Request Standards

### Commit Messages
Write clear, concise commit messages:

- Use present tense: "Add feature" not "Added feature"
- Be specific: "Add IR workflow diagram" not "Update files"
- Keep first line under 50 characters when possible
- Scope each commit to one focused change

Examples of good commit messages:
- `Add penetration testing writeup`
- `Fix broken link in homelab page`
- `Update PCI-DSS architecture diagram`
- `Tighten Python Day 05 copy`

### Pull Request Guidelines
When creating pull requests:

- Include a short summary of changes
- Add screenshots for visual changes
- Note any new pages added to navigation
- Link to related issues if applicable
- Ensure CI/CD build passes (strict mode)

## Security and Best Practices

### Security Reminders
- **Never commit secrets** - No API keys, tokens, or credentials
- This is a static site; any deployment credentials belong in GitHub Secrets only
- Review all files before committing to ensure no sensitive data

### Dependency Management
- Dependencies are pinned in `requirements.txt`
- When upgrading MkDocs or plugins, run full `mkdocs build --strict` test
- Test thoroughly before pushing dependency updates

### Git Ignore
The following are excluded from version control:
- `site/` - Build output directory
- `.portfolio-venv/` and `.venv/` - Python virtual environments
- `backups/` - Local backup directory
- `.DS_Store` - macOS metadata files

## Navigation Structure

The site navigation is manually maintained in `mkdocs.yml`. Current structure:

- **Home** - Landing page
- **About** - Professional bio and background
- **Certifications** - CompTIA, ISC², ITIL, LPI certifications
- **Cybersecurity** - Project writeups and case studies
  - Homelab Infrastructure and Journey
  - Vulnerability Assessment
  - Incident Response
  - Penetration Testing
  - PCI-DSS Hardening (multi-page case study)
  - Blog Writeups
- **Python** - Learning journey and projects
  - 100 Days of Python (daily exercises)
  - Independent Projects
- **Innovation** - Hardware and research projects
  - Drone Payload Systems
  - RF Security Research
  - Modular Designs
  - Innovation Blogs
- **Contact** - Contact information

**Remember:** When adding pages, you MUST update the `nav` section in mkdocs.yml or the page will not appear in navigation.

## Working with This Project

When I assist you with this portfolio website, I will:

1. **Maintain strict mode compliance** - All changes must pass `mkdocs build --strict`
2. **Update navigation** - Add new pages to mkdocs.yml nav section
3. **Follow naming conventions** - Use lowercase-with-dashes for all files
4. **Use templates** - Start new pages from templates directory
5. **Test thoroughly** - Verify builds, links, and rendering before committing
6. **Write professionally** - Keep content recruiter-friendly and scannable
7. **Document changes** - Write clear commit messages and PR descriptions

## Getting Help

If you encounter issues:

- **Build errors:** Check strict mode output for specific file/line numbers
- **Navigation issues:** Verify mkdocs.yml nav section syntax
- **Image problems:** Confirm file paths, casing, and format
- **Link errors:** Use relative paths and verify target files exist
- **Deployment issues:** Check GitHub Actions logs for workflow errors

Remember: This is a production portfolio site. All changes should be tested locally with `mkdocs build --strict` before pushing to ensure the live site remains functional.
