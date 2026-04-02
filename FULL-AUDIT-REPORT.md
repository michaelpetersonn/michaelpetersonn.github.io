# SEO Full Audit Report — michael-peterson.com
**Date:** March 30, 2026
**Site:** https://michael-peterson.com
**Type:** 4-page static HTML portfolio (GitHub Pages, custom domain)
**Subject:** Michael C. Peterson — Data & BI Analyst, BYU Information Systems

---

## Overall SEO Health Score: 39 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 41/100 | 9.0 |
| Content Quality / E-E-A-T | 23% | 52/100 | 12.0 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness (GEO) | 10% | 38/100 | 3.8 |
| Images | 5% | 40/100 | 2.0 |
| **Total** | | | **39 / 100** |

**Business type detected:** Personal portfolio / job-seeking (Data & BI Analyst)
**Hosting:** GitHub Pages + Fastly CDN + custom domain
**Google API:** Not configured (no CrUX/GSC field data available)

---

## Top 5 Critical Issues

1. **No meta descriptions on any page** — all 4 pages send uncontrolled Google-generated snippets to every search result
2. **robots.txt and sitemap.xml both return 404** — no crawl directives, no sitemap reference
3. **Projects page is critically thin** — 3 projects at ~30 words each; cannot demonstrate expertise or be AI-cited
4. **Zero schema markup** — no Person, WebSite, or any structured data anywhere on the site
5. **headshot.jpg at ~295 KB** — LCP image is 20x oversized; render also blocked by CSS @import font chain

## Top 5 Quick Wins

1. Add `robots.txt` and `sitemap.xml` to repo root — 15 minutes total
2. Add meta descriptions to all 4 pages — 15 minutes
3. Add canonical tags to all 4 pages — 10 minutes
4. Add Person + WebSite JSON-LD to homepage — 20 minutes
5. Move Google Fonts from CSS `@import` to async `<link>` in `<head>` — 10 minutes

---

## Technical SEO — Score: 41/100

### Critical

**C-1: robots.txt missing (404)**
No robots.txt means no sitemap directive, no crawl-delay control, and a 404 error on every crawler's first request.

Fix — create `/robots.txt` at repo root:
```
User-agent: *
Allow: /

Sitemap: https://michael-peterson.com/sitemap.xml
```

**C-2: sitemap.xml missing (404)**
No sitemap means Google discovers pages via internal links only. Required for IndexNow and Search Console submissions.

Fix — create `/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://michael-peterson.com/</loc><lastmod>2026-03-30</lastmod><priority>1.0</priority></url>
  <url><loc>https://michael-peterson.com/projects.html</loc><lastmod>2026-03-30</lastmod><priority>0.8</priority></url>
  <url><loc>https://michael-peterson.com/about.html</loc><lastmod>2026-03-30</lastmod><priority>0.8</priority></url>
  <url><loc>https://michael-peterson.com/contact.html</loc><lastmod>2026-03-30</lastmod><priority>0.6</priority></url>
</urlset>
```

**C-3: Homepage `<title>` tag lacks descriptor**
Other pages use `Page | Michael Peterson` consistently. The homepage title is bare (`Michael Peterson`) with no role or value proposition.

Fix:
```html
<title>Michael Peterson — Data & BI Analyst</title>
```

### High

**H-1: Meta descriptions missing on all 4 pages**
Google auto-generates snippets from body text. For a job-seeking portfolio, the meta description is the recruiter's first impression in search.

**H-2: Canonical tags missing on all 4 pages**
GitHub Pages may serve content at both `www.` and non-`www.` variants, and both `/index.html` and `/` are valid paths — creating potential duplicate content signals.

Fix — add to each page `<head>`:
```html
<link rel="canonical" href="https://michael-peterson.com/">          <!-- index.html -->
<link rel="canonical" href="https://michael-peterson.com/projects.html">
<link rel="canonical" href="https://michael-peterson.com/about.html">
<link rel="canonical" href="https://michael-peterson.com/contact.html">
```

**H-3: Security headers absent at HTTP response level**
GitHub Pages does not allow custom response headers. The site has some meta-tag equivalents (X-Frame-Options, CSP, Referrer-Policy in HTML) but HSTS cannot be set via meta tag.

Long-term fix: Migrate to Cloudflare Pages (free tier) for full `_headers` file control. Short-term: ensure all CSP/referrer meta tags are present on every page.

**H-4: Navigation uses relative `.html` links**
Links like `<a href="projects.html">` can produce crawlable duplicate URL variants. Update to root-relative:
```html
<a href="/">Home</a>
<a href="/projects.html">Projects</a>
<a href="/about.html">About</a>
<a href="/contact.html">Contact</a>
```

**H-5: Extensionless URLs return 404**
Visiting `/projects`, `/about`, `/contact` returns a 404. Any inbound link using clean URLs is a dead end.

Fix: Restructure to subdirectory pattern (`projects/index.html`) so `/projects/` resolves, or add a custom `404.html` that redirects to the correct `.html` page.

### Medium

**M-1: No Open Graph / Twitter Card tags**
Sharing on LinkedIn (the primary channel for this portfolio) shows an unstyled link preview with no image or description.

**M-2: No schema markup** — see Schema section

**M-3: No IndexNow protocol**
Bing and Yandex support instant URL submission. Can be triggered via GitHub Actions on deploy.

**M-4: cache-control: max-age=600**
10-minute cache TTL on all assets is a GitHub Pages platform limitation. Not fixable without migrating host. Assets re-validate from origin on every cold visit.

### Low

- No favicon (generates 404 on every page load)
- Missing `preconnect` hints for Google Fonts origins
- `lang="en"` confirmed present — no action needed

---

## Content Quality / E-E-A-T — Score: 52/100

### E-E-A-T Breakdown

| Pillar | Score | Key Gap |
|---|---|---|
| Experience | 70% | No case studies; projects are ~30 words each with no outcomes |
| Expertise | 68% | Credentials listed but not demonstrated; EY Competition result undocumented |
| Authoritativeness | 56% | LinkedIn is the only external signal; no GitHub link |
| Trustworthiness | 60% | No meta descriptions; About stats lack attribution |

### Critical

**C-1: Projects page critically thin (~30 words per project)**
This is the primary proof-of-expertise surface for any portfolio. At 30 words, a reader cannot assess methodology, impact, or skill. Google cannot extract a meaningful passage.

Minimum viable project entry structure:
- **Problem** (1-2 sentences): What challenge did the client present?
- **Methodology** (2-3 sentences): Tools, techniques, analytical approach
- **Outcome** (1-2 sentences): Specific, measurable result
- **Visual or link**: Dashboard embed, GitHub repo, or screenshot

**C-2: Meta descriptions missing all pages** — see Technical section

### High

- No GitHub profile link (highest single authority addition for this role type)
- No resume PDF download (critical conversion path for job-seeking portfolios)
- No "open to opportunities" signal (recruiters need this explicit statement)
- About page stats (385+, 10K+, 50+) presented as callout numbers without prose context — not citation-ready
- No live project demos or embeds

### Medium

- EY Competition result undocumented (placement, challenge, approach)
- No testimonials or third-party endorsement of any kind
- No certifications listed (Google Data Analytics, Tableau Desktop Specialist, PL-300 are common and credible at this career stage)

### AI Citation Readiness Score: 28/100

The site is not currently citation-ready. AI passage ranking requires discrete, quotable, factually grounded paragraphs. Current content is structured as a resume interface (labels + brief descriptors).

**What a citable About paragraph looks like:**
> "Michael C. Peterson is a Data and BI Analyst at Brevium, a Utah-based healthcare software company, where he analyzes patient data to support reactivation workflows. As a BYU Marriott teaching assistant, he has instructed over 385 students in SQL, Tableau, Excel, and HTML/CSS. He is completing a B.S. in Information Systems with a Data Analytics concentration at Brigham Young University, expected April 2027, with a 3.8 GPA."

This 79-word paragraph is directly citable for the query "who is Michael Peterson data analyst." The current site has no equivalent passage.

### Content Depth Assessment

| Page | Est. Words | Minimum | Status |
|---|---|---|---|
| index.html | ~375 | 500 | Below minimum |
| projects.html | ~175 | 800 | Critically thin |
| about.html | ~225 | 500 | Below minimum |
| contact.html | ~125 | N/A | Acceptable |

### Drafted Meta Descriptions (ready to use)

```html
<!-- index.html -->
<meta name="description" content="Michael Peterson — Data & BI Analyst at Brevium and BYU Information Systems student specializing in SQL, Python, Tableau, and Power BI. 3.8 GPA.">

<!-- projects.html -->
<meta name="description" content="Portfolio of data and BI projects by Michael Peterson, including nonprofit Tableau dashboards, Power BI competition work, and Python-based real estate analysis.">

<!-- about.html -->
<meta name="description" content="Learn about Michael Peterson — Data & BI Analyst at Brevium, BYU TA, and Information Systems student who has supported 10K+ monthly users and taught 385+ students.">

<!-- contact.html -->
<meta name="description" content="Contact Michael Peterson for data analysis, BI development, or web projects. Fill out the form to send a message directly.">
```

---

## On-Page SEO — Score: 35/100

### Title Tag Audit

| Page | Current | Recommended |
|---|---|---|
| index.html | `Michael Peterson` | `Michael Peterson — Data & BI Analyst` |
| projects.html | `Projects \| Michael Peterson` | Keep (good) |
| about.html | `About \| Michael Peterson` | Keep (good) |
| contact.html | `Contact \| Michael Peterson` | Keep (good) |

### Heading Structure

| Page | H1 | Issue |
|---|---|---|
| index.html | "Michael Peterson" | No keyword/role context |
| projects.html | "Projects" | Thin — no sub-headings per project |
| about.html | "Hi, I'm Michael." | Good — personality-forward |
| contact.html | "Get in Touch" | Acceptable |

### Internal Linking Gaps

- No breadcrumb navigation
- No cross-links between Projects and About (each project could link to the About page)
- "View Projects" CTA on About page is good; reverse link from Projects to About is missing

---

## Schema / Structured Data — Score: 0/100

**No structured data detected on any page.** Zero JSON-LD, Microdata, or RDFa.

### Priority 1 — Person + WebSite (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://michael-peterson.com/#website",
      "url": "https://michael-peterson.com",
      "name": "Michael Peterson",
      "publisher": { "@id": "https://michael-peterson.com/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://michael-peterson.com/#person",
      "name": "Michael C. Peterson",
      "url": "https://michael-peterson.com",
      "jobTitle": "Data & BI Analyst",
      "description": "Data and Business Intelligence Analyst specializing in SQL, Python, Tableau, and Power BI.",
      "image": "https://michael-peterson.com/headshot.jpg",
      "sameAs": ["https://www.linkedin.com/in/michaelpetersonn"],
      "worksFor": {
        "@type": "Organization",
        "name": "Brevium"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Brigham Young University",
        "url": "https://www.byu.edu"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Bachelor of Science, Information Systems",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Brigham Young University" }
      }
    }
  ]
}
</script>
```

### Priority 2 — ProfilePage (About page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://michael-peterson.com/about.html#profilepage",
  "url": "https://michael-peterson.com/about.html",
  "name": "About Michael Peterson",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://michael-peterson.com/#person",
    "name": "Michael C. Peterson",
    "jobTitle": "Data & BI Analyst",
    "description": "Data and BI Analyst at Brevium and BYU Marriott TA who has supported 10,000+ monthly users and taught 385+ students. B.S. Information Systems candidate, BYU, expected April 2027, 3.8 GPA."
  }
}
</script>
```

### Priority 3 — CreativeWork per project + BreadcrumbList (Projects page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://michael-peterson.com" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://michael-peterson.com/projects.html" }
      ]
    },
    {
      "@type": "CreativeWork",
      "name": "Ella Rises Dashboard",
      "author": { "@id": "https://michael-peterson.com/#person" },
      "description": "Tableau dashboard tracking program engagement and outcomes for a youth non-profit, spotlighting metrics that helped leaders allocate resources more effectively."
    },
    {
      "@type": "CreativeWork",
      "name": "EY Case Competition",
      "author": { "@id": "https://michael-peterson.com/#person" },
      "description": "Business analytics case competition. Modeled business scenarios and delivered a BI narrative tying recommendations to clear visuals and defensible assumptions."
    },
    {
      "@type": "CreativeWork",
      "name": "Ames Data — Real Estate Pricing Study",
      "author": { "@id": "https://michael-peterson.com/#person" },
      "description": "Real estate pricing analysis using Python (Pandas) and SQL to identify pricing drivers and surface features that improved model accuracy."
    }
  ]
}
</script>
```

### Schema Implementation Summary

| Type | Page | Priority | Rich Result |
|---|---|---|---|
| Person + WebSite | index.html | Critical | Knowledge panel signals |
| ProfilePage | about.html | Critical | E-E-A-T signal |
| CreativeWork ×3 | projects.html | High | AI citation signal |
| BreadcrumbList | projects.html, contact.html | High | Breadcrumb rich result |
| ContactPage | contact.html | Moderate | Crawl clarity |

---

## Performance / Core Web Vitals — Score: 55/100

*Note: These are static-analysis estimates. No CrUX field data available (Google API not configured).*

| Metric | Predicted Status | Primary Cause |
|---|---|---|
| LCP | Needs Improvement | 295 KB headshot, no preload, font-blocked render |
| CLS | Good | CSS sets explicit dimensions; font-display: swap active |
| INP | Good | Vanilla JS only; minimal main-thread work |

### Issue 1 — headshot.jpg at ~295 KB (HIGH)

The hero image is displayed at 160×160 CSS px (320×320 at 2× DPR). A properly sized AVIF should be 8–12 KB — a ~25× reduction.

Fix:
```bash
# Generate optimized versions
npx @squoosh/cli --avif '{"quality":72}' --resize '{"width":320}' headshot.jpg
npx @squoosh/cli --webp '{"quality":82}' --resize '{"width":320}' headshot.jpg
```

Update HTML:
```html
<picture>
  <source srcset="headshot.avif" type="image/avif">
  <source srcset="headshot.webp" type="image/webp">
  <img src="headshot.jpg" alt="Michael Peterson, Data and BI Analyst at Brevium"
       width="160" height="160" loading="eager" fetchpriority="high">
</picture>
```

Add preload in `<head>`:
```html
<link rel="preload" as="image" href="headshot.avif" type="image/avif" fetchpriority="high">
```

### Issue 2 — Google Fonts render-blocking chain (HIGH)

`styles.css` uses `@import url('https://fonts.googleapis.com/...')`. A CSS `@import` inside a render-blocking stylesheet creates a serial waterfall of 2-4 cross-origin DNS + TLS round-trips before the page can paint.

Fix — remove the `@import` from `styles.css`. Add to HTML `<head>` instead:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap"
      media="print" onload="this.media='all'">
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap">
</noscript>
```

### Issue 3 — cache-control: max-age=600 (MEDIUM)

GitHub Pages platform limitation. All assets expire from CDN cache after 10 minutes. Not fixable without migrating to Cloudflare Pages or Netlify, both of which support `immutable` caching for static assets.

### Issue 4 — Missing `width`/`height` on `<img>` (LOW)

CSS sets `.headshot { width: 160px; height: 160px; }` which is sufficient for CLS prevention. However, adding HTML attributes is defense-in-depth:
```html
<img ... width="160" height="160">
```

---

## AI Search Readiness (GEO) — Score: 38/100

### Platform Scores

| Platform | Estimated Score | Primary Barrier |
|---|---|---|
| Google AI Overviews | 22/100 | No schema, no E-E-A-T passages |
| ChatGPT Browse | 30/100 | No llms.txt, no self-contained answer blocks |
| Perplexity | 38/100 | Good entity signals but passages too short |
| Bing Copilot | 28/100 | No schema, no author metadata |

### Key Issues

**Name collision risk is severe and unmitigated.**
"Michael Peterson" is a high-collision entity (true-crime subject, multiple athletes). Without schema `sameAs` links and an llms.txt, AI systems have no disambiguation anchor. Citation could go to the wrong Michael Peterson.

**Missing llms.txt**

Create `/llms.txt` at repo root:
```
# Michael C. Peterson

> Data & Business Intelligence Analyst and BYU Information Systems student (graduating April 2027) specializing in SQL, Python, Tableau, and Power BI.

Michael C. Peterson is a Data & BI Analyst at Brevium, a healthcare software company. He is pursuing a B.S. in Information Systems at Brigham Young University with a 3.8 GPA. He has taught 385+ students as a BYU Marriott teaching assistant and optimized web properties serving 10K+ monthly users.

## Pages

- [Home](https://michael-peterson.com/): Professional overview
- [About](https://michael-peterson.com/about.html): Career history and achievements
- [Projects](https://michael-peterson.com/projects.html): Portfolio work
- [Contact](https://michael-peterson.com/contact.html): Contact form and LinkedIn
```

**No external authority footprint**
The site has one external link (LinkedIn). No GitHub, no published work, no third-party mentions. AI systems require triangulation across multiple sources to confidently cite a person.

Highest-leverage action: Add a public GitHub profile with repos for the three portfolio projects. This is the strongest corroborating signal at the lowest effort for this career stage.

---

## Images — Score: 40/100

| Issue | Severity | Page |
|---|---|---|
| headshot.jpg ~295 KB (target: <15 KB AVIF) | HIGH | index.html |
| No project images at all | HIGH | projects.html |
| headshot.jpg missing `width`/`height` HTML attrs | LOW | index.html |
| Project images (when added) will need descriptive alt text | Future | projects.html |

**headshot.jpg alt text** is present: `alt="Michael Peterson headshot"`. Slightly more descriptive version:
```html
alt="Michael Peterson, Data and Business Intelligence Analyst at Brevium"
```

---

## What Is Working Well

| Area | Status |
|---|---|
| HTTPS enforced | ✓ GitHub Pages enforces HTTPS |
| HTTP/2 | ✓ Active on all responses |
| Viewport meta | ✓ Present: `width=device-width, initial-scale=1.0` |
| `lang="en"` | ✓ Present on all 4 pages |
| Single H1 per page | ✓ Correct on all pages |
| Mobile breakpoint | ✓ Exists at 720px; hero stacks correctly |
| `font-display: swap` | ✓ Prevents FOIT on font load |
| Headshot alt text | ✓ Descriptive text present |
| Contact form spam protection | ✓ Honeypot field implemented |
| Hero CTAs above fold | ✓ "View Projects" + "Get in Touch" visible at 1920×1080 |
| Security meta tags | ✓ X-Frame-Options, CSP, Referrer-Policy in HTML |
| Page nav active state | ✓ Correctly highlighted per page |
| Title tags (3/4 pages) | ✓ `Page \| Michael Peterson` pattern is correct |
| TTFB | ✓ 2ms Fastly edge serve — excellent |

---

## Appendix: Page Inventory

| URL | Title | Meta Desc | Canonical | H1 | Schema |
|---|---|---|---|---|---|
| / | Michael Peterson | ✗ | ✗ | "Michael Peterson" | ✗ |
| /projects.html | Projects \| Michael Peterson | ✗ | ✗ | "Projects" | ✗ |
| /about.html | About \| Michael Peterson | ✗ | ✗ | "Hi, I'm Michael." | ✗ |
| /contact.html | Contact \| Michael Peterson | ✗ | ✗ | "Get in Touch" | ✗ |
