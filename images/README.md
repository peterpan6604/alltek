# Images

Drop the following assets into this folder. All paths in `index.html` already
point here — replace the files with real ones, no markup changes needed.

## Required

| Filename               | Purpose                                  | Notes                              |
| ---------------------- | ---------------------------------------- | ---------------------------------- |
| `logo.png`             | Circular Alltek badge (nav + footer)     | Square, transparent or dark bg, ~512×512 |
| `favicon.png`          | Browser tab icon                         | 32×32 PNG                          |
| `apple-touch-icon.png` | iOS home-screen icon                     | 180×180 PNG                        |
| `og.jpg`               | Social share preview                     | 1200×630, JPG, < 300 KB            |

## Gallery (replace placeholder tiles)

Drop 6+ photos here and update the markup in [`index.html`](../index.html)
section 6 (gallery) — swap each `<figure class="gallery__tile">` for an
`<img loading="lazy" alt="…">` inside the figure.

Suggested filenames:

- `gallery-01.jpg` — recent skim (before/after)
- `gallery-02.jpg` — silicone render
- `gallery-03.jpg` — coving close-up
- `gallery-04.jpg` — pebbledash exterior
- `gallery-05.jpg` — dry-lined room
- `gallery-06.jpg` — patch repair

## Reviews / testimonials (screenshots)

The testimonials section uses **screenshot images** of real Facebook /
Google reviews — much more credible than typed-out quotes.

Drop screenshots here named:

- `review-01.jpg`
- `review-02.jpg`
- `review-03.jpg`
- `review-04.jpg`
- `review-05.jpg`
- `review-06.jpg`

You can use 3, 4, 5 or 6 — any missing files are auto-hidden, no
markup changes needed. Mix tall (full reviews) and short (one-liner)
screenshots for visual rhythm in the masonry grid.

**Capture tips:**

- Crop tight — remove the FB / Google chrome where it doesn't add to
  credibility, but **keep** the star rating, reviewer name and
  platform logo (those *do* add credibility)
- Save at ~800px wide, JPG quality 80 — keeps file size under 100 KB
- Avoid blurry zoomed-in screenshots — recapture from a fresh view

## About section photo

The about section currently uses a placeholder. Add `about.jpg` (a clean shot
of the team or a finished job) and replace the `.about__photo-placeholder`
`<div>` with an `<img>`.

## Optimisation tips

- Export JPGs at quality 80 and run through Squoosh / ImageOptim.
- Target < 200 KB per gallery image, < 400 KB for hero/about.
- Use descriptive alt text — it's both accessibility and SEO.
