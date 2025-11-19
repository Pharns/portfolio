# Repository Guidelines

## Project Structure & Content
- Site source lives in `docs/`, grouped by domain (`cybersecurity/`, `python/`, `innovation/`) plus shared pages like `index.md`, `about.md`, and `contact.md`.
- Images and downloadable assets belong in `docs/assets/`; keep filenames lowercase-with-dashes and prefer compressed PNG/JPEG.
- Site config and navigation are defined in `mkdocs.yml`; update the `nav` tree when adding or moving pages to avoid broken links.
- Templates/backups live in `templates/` and `backups/`; do not serve them directly from navigation without review.

## Build, Test, and Development Commands
- Create environment: `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`.
- Live preview: `mkdocs serve` (runs a local dev server at http://127.0.0.1:8000 with live reload).
- Production check: `mkdocs build --strict` (fails on missing assets/links; outputs to `site/`).
- Deploy (if enabled): `mkdocs gh-deploy` publishes the built site to GitHub Pages.

## Writing Style & Formatting
- Markdown only; keep headings concise and use sentence case. Prefer callouts (`!!! note`) sparingly.
- Use fenced code blocks with language hints; wrap long lines manually to keep content readable.
- Link internal pages with relative paths (`[IR Workflow](cybersecurity/incident-response.md)`) and ensure every new page is in the `nav`.
- Favor direct, recruiter-friendly language; avoid filler and keep pages scannable with lists and short paragraphs.

## Testing & Quality Checks
- Run `mkdocs build --strict` before pushing to catch broken links, missing assets, and syntax errors.
- When adding images, verify they render locally and reference the correct casing (case-sensitive on deploy).
- For new sections, confirm navigation tabs remain balanced and that dark/light mode renders correctly in preview.

## Commit & Pull Request Guidelines
- Commits: keep messages short, present-tense, and descriptive (e.g., `Add IR workflow diagram`, `Tighten PCI-DSS copy`).
- Scope each change to a focused topic (one page/feature per commit where possible).
- Pull requests: include a short summary, screenshots for visual changes, and note any new pages added to `nav`. Link related issues when applicable.

## Security & Configuration Tips
- Do not commit secrets or auth tokens; this site is static, so any credentials belong in deployment secrets only.
- Pin dependencies via `requirements.txt`; if upgrading MkDocs or plugins, run a full `mkdocs build --strict` to ensure compatibility.
