# SEO Action Plan — michael-peterson.com
**Generated:** March 30, 2026
**Current Score:** 39/100 → **Projected Score After All Actions: ~82/100**

---

## CRITICAL — Fix Immediately (< 2 hours total)

### 1. Add `robots.txt` — 5 min
Creates `/robots.txt` at repo root. Eliminates the 404 crawl error and enables the Sitemap directive.
```
User-agent: *
Allow: /

Sitemap: https://michael-peterson.com/sitemap.xml
```

### 2. Add `sitemap.xml` — 10 min
Creates `/sitemap.xml` at repo root. Required for Search Console submission and IndexNow.
See full XML in FULL-AUDIT-REPORT.md.

### 3. Add meta descriptions to all 4 pages — 15 min
Copy the drafted descriptions from FULL-AUDIT-REPORT.md → Content section into each page `<head>`.

### 4. Add canonical tags to all 4 pages — 10 min
Prevents duplicate content signals from www/non-www and /index.html vs / variants.
See tag values in FULL-AUDIT-REPORT.md → Technical section.

### 5. Fix homepage `<title>` tag — 2 min
```html
<title>Michael Peterson — Data & BI Analyst</title>
```

---

## HIGH — Fix This Week

### 6. Add Person + WebSite schema to homepage — 20 min
Highest-impact structural change. Disambiguates your identity from other "Michael Peterson" entities. Enables knowledge panel signals.
Full JSON-LD in FULL-AUDIT-REPORT.md → Schema section.

### 7. Add ProfilePage schema to about.html — 10 min
Full JSON-LD in FULL-AUDIT-REPORT.md → Schema section.

### 8. Add CreativeWork + BreadcrumbList schema to projects.html — 15 min
Full JSON-LD in FULL-AUDIT-REPORT.md → Schema section.

### 9. Fix Google Fonts render-blocking chain — 10 min
Remove `@import` from `styles.css`. Add preconnect hints + async `<link>` to HTML `<head>`.
Full code in FULL-AUDIT-REPORT.md → Performance section.

### 10. Optimize headshot.jpg — 30 min
Convert to AVIF/WebP at 320×320px. Target: <15 KB.
Current size: ~295 KB. Expected LCP improvement: significant.
Add `<picture>` element + `<link rel="preload">` in `<head>`.
Full code in FULL-AUDIT-REPORT.md → Performance section.

### 11. Add GitHub profile link — 5 min
Add GitHub URL to nav or hero section alongside LinkedIn.
This is the single highest-authority addition for a Data/BI Analyst portfolio.

### 12. Add resume PDF download link — 10 min
Add a prominent "Download Resume" button in the hero or nav.
Critical conversion path for job-seeking use case.

### 13. Add Open Graph + Twitter Card tags to all pages — 20 min
Enables rich link previews when shared on LinkedIn.
Full tag code in FULL-AUDIT-REPORT.md → Technical section (M-1).

### 14. Update navigation links to root-relative paths — 10 min
Change `href="projects.html"` → `href="/projects.html"` etc. across all pages.

### 15. Add llms.txt — 10 min
Creates `/llms.txt` at repo root. Critical for AI disambiguation of "Michael C. Peterson."
Full content in FULL-AUDIT-REPORT.md → GEO section.

---

## MEDIUM — Fix Within 1 Month

### 16. Expand each project entry on /projects.html — 2–3 hours
Add problem-methodology-outcome structure (200–400 words per project).
Embed or link to dashboards/repos where possible.
This moves projects.html from 175 words to 800+ and is the biggest E-E-A-T improvement available.

### 17. Add project images — 1–2 hours
Add at least one screenshot or chart thumbnail per project.
Use descriptive alt text (see FULL-AUDIT-REPORT.md → Images section).

### 18. Add "open to opportunities" statement — 5 min
Add one sentence to the homepage hero or About page:
"Currently seeking full-time Data Analyst roles for post-graduation, anticipated April 2027."

### 19. Rewrite About page bio as a prose paragraph — 30 min
Convert the callout stats (385+, 10K+, 50+) into a 134–167 word prose paragraph.
This is the primary AI-citation-ready passage the site needs.
See example paragraph in FULL-AUDIT-REPORT.md → GEO section.

### 20. Fix extensionless URL 404s — 30 min
Restructure pages to subdirectory pattern (`projects/index.html`) so `/projects/` resolves.
Or add a custom `404.html` redirect.

### 21. Fix mobile nav tap target sizes — 10 min
Add `padding: 12px 4px` to `.nav a:not(.nav-email-btn)` inside the `@media (max-width: 720px)` block.

### 22. Add `width="160" height="160"` to headshot `<img>` — 2 min
Defense-in-depth CLS prevention.

### 23. Add `fetchpriority="high"` to LCP image — 2 min
Minor LCP improvement, zero risk.

### 24. Document EY Competition result — 30 min
Add placement, analytical challenge, and approach to the EY Case project entry.
This is the strongest external validation signal on the site and is currently underutilized.

---

## LOW — Backlog

### 25. Add favicon — 10 min
Eliminates a 404 on every page load.

### 26. Add a favicon and OG image (1200×630px) — 1 hour
Branded card with name and title for social share previews.

### 27. List certifications — 5 min
Add completed certifications to skills section (e.g., Tableau Desktop Specialist, Google Data Analytics).

### 28. Add IndexNow via GitHub Actions — 30 min
Instant Bing/Yandex submission on deploy.

### 29. Add contact form privacy note — 5 min
One sentence: "Your message is sent directly to Michael and not stored or shared."

### 30. Consider Cloudflare Pages migration — 2 hours
Unlocks custom response headers (HSTS, true security headers) and `immutable` cache for static assets.
Not required but resolves several GitHub Pages platform limitations permanently.

---

## Score Projection

| After completing... | Projected Score |
|---|---|
| Criticals only (1–5) | ~52/100 |
| Criticals + Highs (1–15) | ~68/100 |
| Criticals + Highs + Mediums (1–24) | ~79/100 |
| All actions (1–30) | ~82/100 |

The largest single score jump comes from items 6–10 (schema + performance) which together account for approximately 12 points.
