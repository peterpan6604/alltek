---
section: seo
status: placeholder
---

# SEO notes — Alltek Plastering & Rendering Ltd

This site targets a **local services** audience: homeowners in Barnsley,
Wakefield and the wider South/West Yorkshire belt searching for a plasterer
or renderer. The big wins are local SEO and Google Business Profile —
on-page SEO is secondary.

---

## Target keywords

### Primary (high intent, local)

- plasterer Barnsley
- plasterer Wakefield
- plastering Barnsley
- renderer Barnsley
- rendering Wakefield
- external rendering Yorkshire
- silicone render Barnsley
- skimming Barnsley

### Secondary (service + town)

- dry lining Barnsley / Wakefield / Sheffield
- pebbledash repair Yorkshire
- coving fitter Barnsley
- patch plastering Barnsley
- artex removal Wakefield
- plasterer near me (location-aware — Google handles this)

### Long-tail (blog / content opportunities)

- "how much does plastering cost per room UK"
- "silicone render vs monocouche which is better"
- "how long does plaster take to dry before painting"
- "do I need a plasterer or just a handyman for a small patch"

---

## Meta tags (already in `index.html`)

- **Title (≤ 60 chars):** "Alltek Plastering & Rendering Ltd | Plasterer in Barnsley & Wakefield"
- **Description (≤ 160 chars):** "Alltek Plastering & Rendering Ltd — professional plastering, rendering and dry lining across Barnsley, Wakefield and Yorkshire. Free quotes. Fully insured."
- **Canonical:** `https://alltekplastering.co.uk/`
- **OG image:** 1200×630 — TODO, see [`/images/README.md`](../images/README.md)

---

## Schema (JSON-LD `LocalBusiness`)

Already in `<head>` of `index.html`. Update these fields once confirmed:

- `telephone` — set to the real mobile number in E.164 format (e.g. `+447000000000`)
- `email` — replace `PLACEHOLDER`
- `address` → add `streetAddress` and `postalCode`
- Consider adding `aggregateRating` once you have real Google reviews
- Consider adding `priceRange` more specifically (currently `££`)

---

## Google Business Profile (GBP) — biggest single win

For a local trade, GBP outranks the website itself for "plasterer near me".
Setup checklist:

1. Claim/create the profile under "Alltek Plastering & Rendering Ltd".
2. **Category:** "Plasterer" (primary), "Construction company" (secondary).
3. **Service area:** Barnsley + 15-mile radius (Wakefield, Rotherham,
   Sheffield, Doncaster, Huddersfield).
4. Upload at least 10 photos — before/after pairs perform best.
5. Add all 6 services as individual GBP Services with descriptions
   (copy from [`services.md`](services.md)).
6. Set hours to match the website footer.
7. Ask every happy customer for a review — the single biggest ranking
   factor for local pack inclusion. Aim for 20+ reviews in year one.
8. Post a weekly update (job photo + 1 sentence) — keeps the profile active.

---

## On-page SEO checklist

- [x] Semantic HTML5 (header, nav, main, section, footer, article)
- [x] One `<h1>` per page
- [x] Heading hierarchy (h1 → h2 → h3)
- [x] Descriptive alt text — TODO once real images are added
- [x] `lang="en-GB"` on `<html>`
- [x] Canonical URL
- [x] Open Graph + Twitter cards
- [x] LocalBusiness JSON-LD
- [x] Sitemap + robots.txt at root
- [x] Mobile-first responsive layout
- [x] Lazy-loaded images (apply `loading="lazy"` when real images are added)
- [ ] Add `<picture>` with WebP sources once real photos exist
- [ ] Run Lighthouse and aim for 95+ on Performance/SEO/Accessibility

---

## Off-page / citation building

Free local directory listings (NAP — Name, Address, Phone — must match GBP exactly):

- Bing Places for Business
- Yell.com
- Yelp
- Checkatrade (paid, but high-converting)
- TrustMark
- Federation of Master Builders (FMB) — paid, optional
- MyBuilder / Rated People — lead-gen, paid per quote

---

## Content opportunities (post-launch)

If the homepage isn't ranking after 3 months, add a `/blog/` directory and
publish one article per fortnight targeting long-tail queries. Each post:

- 800–1,200 words
- Includes a labelled job photo
- Internal links to relevant service section
- Ends with a "Get a free quote" CTA
