# Portfolio Roadmap

**Last Updated:** 2026-01-22
**Analysis Source:** Portfolio Architect v3.6.0 (76+ expert advisors)

This roadmap tracks portfolio improvements identified through comprehensive analysis. Items are prioritized by impact on hiring conversion and effort required.

---

## Completed (This Session)

- [x] Add availability badge to homepage hero ("Available February 2026")
- [x] Add Cal.com scheduling link to contact page
- [x] Add patent filing date (November 2025) to TraceLock page
- [x] Tier projects into Flagship/Featured/Additional structure
- [x] Enhance "What I'm Looking For" section with salary signals ($120K–$180K range)
- [x] Add career journey narrative (USAF → USOG → AAM Cyber) to about page
- [x] Vary differentiator messaging across pages (reduce redundancy)
- [x] Update contact page availability to February 2026

---

## Tier 1: High Impact, Low Effort (Do Next Session)

### Resume PDF
- [ ] Create downloadable PDF resume link
- [ ] Host on `/assets/resume/Pharns_Genece_Resume.pdf`
- [ ] Add link to contact page and about page footer
- **Why:** Some recruiters need ATS-compatible format

### Cal.com Link Update
- [x] Replaced Calendly placeholder with `https://cal.pharns.com/meet/intro`
- [ ] Verify booking works correctly
- **Why:** Removes friction from scheduling conversations

---

## Tier 2: High Impact, Medium Effort (Q1 2026)

### Accessibility: Mermaid Diagram Captions
- [ ] Add figure captions below all Mermaid diagrams for screen readers
- [ ] Files affected: giap.md, tracelock.md, intake-portal.md, certifications.md, pci-dss/architecture.md, incident-response.md, agenticos.md
- [ ] Format: `*Figure: [Description of diagram content]*`
- **Why:** WCAG 2.1 AA compliance, screen reader accessibility

### PCI-DSS Case Study Consolidation
- [ ] Review 5 subpages for content overlap
- [ ] Consider merging into single long-form case study
- [ ] Alternative: Add navigation breadcrumbs between subpages
- **Why:** Fragmented reading experience currently

### Innovation Section Expansion
- [ ] Current page is only 42 lines — too thin for unique AAM credentials
- [ ] Expand with patent details, drone engineering examples
- [ ] Add more visual content (photos of hardware, diagrams)
- **Why:** AAM/UAS is a key differentiator that's undersold

---

## Tier 3: Strategic Improvements (Q2 2026)

### Video Introduction
- [ ] Create 60-90 second professional introduction video
- [ ] Host on portfolio or embed from YouTube/Vimeo
- [ ] Add to about page or dedicated introduction page
- **Why:** Personal connection, high-value candidate signal (per Panel 7-A)

### Testimonials Expansion
- [ ] Gather additional testimonials from clients/colleagues
- [ ] Create testimonials carousel or dedicated section
- [ ] Include name, role, context for each quote
- **Why:** Social proof beyond single quote

### Guided Portfolio Tour
- [ ] Create "Start Here" or "Portfolio Tour" page for first-time visitors
- [ ] Guide through flagship projects → credentials → contact
- [ ] Reduce decision fatigue for visitors
- **Why:** Conversion optimization (Ran Segall principle: guide the reader)

### GIAP Page Optimization
- [ ] Split 1,011-line page into overview + deep-dive sections
- [ ] Create "5-minute read" and "full case study" versions
- [ ] Improve mermaid diagram readability
- **Why:** Reader fatigue on flagship project page

---

## SEO & Technical Improvements

### Schema.org Enhancements
- [ ] Add FAQPage schema to certifications or about page
- [ ] Implement BreadcrumbList schema for navigation
- [ ] Verify structured data in Google Rich Results Test
- **Why:** SERP feature opportunities

### Image Optimization
- [ ] Audit all images for descriptive alt text
- [ ] Rename generic filenames to keyword-rich names
- [ ] Compress large images for mobile performance
- **Why:** SEO and accessibility improvements

---

## Metrics & Tracking

**Lighthouse Baseline (2026-01-21):**
- Mobile Performance: 83
- Desktop Performance: 99
- Accessibility: 93
- SEO: 100

**Targets:**
- Mobile Performance: 90+
- Accessibility: 98+ (after diagram caption work)

---

## Notes

### Panel 7-A Insights (Portfolio Conversion Specialists)

| Expert | Key Principle | Applied |
|--------|---------------|---------|
| Sarah Doody | "Portfolio is a product" | Added CTAs, availability badge |
| Chris Do | "Price the client, not the job" | Added salary range signals |
| Tobias van Schneider | "Differentiation beats conformity" | Pending — visual element |
| Debbie Millman | "Narrative coherence" | Added career journey table |
| Ran Segall | "Depth over breadth" | Tiered projects page |

### Files Modified This Session
- `docs/index.md` — Availability badge, varied differentiator
- `docs/contact.md` — Calendly link, salary signals, availability update
- `docs/about.md` — Career journey narrative, varied differentiator
- `docs/projects.md` — Tiered structure (Flagship/Featured/Additional)
- `docs/cybersecurity/tracelock.md` — Patent filing date
- `docs/assets/css/custom.css` — Availability badge styling

---

*Generated by Portfolio Architect v3.6.0 with 76+ expert advisors*
