# GEMINI.md

## Directory Overview

This directory contains the source code for a personal portfolio website. The site is built using the Python-based static site generator [MkDocs](https://www.mkdocs.org/) with the popular [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

The primary purpose of this repository is to house the Markdown files that constitute the content of the portfolio, which is then built into a static HTML website.

The portfolio is organized into several key sections:

*   **Cybersecurity:** Detailing projects and experience in homelab setup, vulnerability assessment, incident response, and penetration testing.
*   **Python:** Showcasing Python skills through the "100 Days of Python" challenge and other projects.
*   **Innovation:** Highlighting work on drone payload systems, RF security, and modular designs.
*   **Certifications:** Listing professional certifications.

## Key Files

*   `mkdocs.yml`: The main configuration file for the MkDocs site. It defines the site's name, navigation structure, theme, and plugins.
*   `docs/`: This directory contains all the content for the website in the form of Markdown files.
    *   `docs/index.md`: The homepage of the portfolio.
    *   `docs/about.md`: The "About Me" page.
    *   `docs/contact.md`: The contact page.
    *   `docs/cybersecurity/`: Contains Markdown files related to cybersecurity projects.
    *   `docs/python/`: Contains Markdown files related to Python projects.
    *   `docs/innovation/`: Contains Markdown files related to innovation projects.
*   `requirements.txt`: Specifies the Python dependencies required to build the site, including `mkdocs` and the `mkdocs-material` theme.
*   `.github/workflows/gh-pages.yml`: A GitHub Actions workflow that automates the process of building the MkDocs site and deploying it to GitHub Pages.

## Building and Running

To build and serve the site locally, you can use the following commands:

1.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
2.  **Run the local development server:**
    ```bash
    mkdocs serve
    ```
    This will start a local webserver, and you can view the site by navigating to `http://127.0.0.1:8000` in your web browser. The site will automatically reload when you make changes to the content or configuration.

## Development Conventions

*   **Content:** All website content is written in Markdown.
*   **Structure:** The website's navigation and structure are defined in the `nav` section of the `mkdocs.yml` file.
*   **Deployment:** The site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch, as configured in `.github/workflows/gh-pages.yml`.
