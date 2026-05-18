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

## About section photo

The about section currently uses a placeholder. Add `about.jpg` (a clean shot
of the team or a finished job) and replace the `.about__photo-placeholder`
`<div>` with an `<img>`.

## Optimisation tips

- Export JPGs at quality 80 and run through Squoosh / ImageOptim.
- Target < 200 KB per gallery image, < 400 KB for hero/about.
- Use descriptive alt text — it's both accessibility and SEO.
