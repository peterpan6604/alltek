# Images

Web-ready images sit at the root of this folder with clean filenames.
Originals + reserves sit in subfolders (gitignored, local-only).

## Live on the site

| Filename         | Where it's used                                    |
| ---------------- | -------------------------------------------------- |
| `logo.jpg`       | Nav (top-left), footer, JSON-LD schema             |
| `about.jpg`      | About section — fresh plaster on the Darfield job  |
| `gallery-01.jpg` | Gallery — full-house monocouche render             |
| `gallery-02.jpg` | Gallery — bespoke garden render with planters      |
| `gallery-03.jpg` | Gallery — commercial tile-and-grid ceiling         |
| `gallery-04.jpg` | Gallery — commercial drylining / partition wall    |
| `gallery-05.jpg` | Gallery — freshly overboarded and skimmed ceiling  |
| `gallery-06.jpg` | Gallery — small silicone-rendered outbuilding      |
| `gallery-07.jpg` | Gallery — kitchen ceiling fresh skim (artex cover) |
| `gallery-08.jpg` | Gallery — bedroom walls + ceiling freshly plastered |
| `gallery-09.jpg` | Gallery — neat patch repair around an alcove       |

## Local-only (gitignored)

- `ALLTEK photos/` — the full set Ross supplied (originals)
- `ALLTEK photos/Reserve photos/` — alternates not currently used

## Swapping a gallery image

1. Drop a new photo into the root of `images/` named, e.g., `gallery-02.jpg`
   (overwrite the existing file)
2. If the new shot has noticeably different aspect ratio, the masonry
   may stagger differently — that's fine
3. **Update the `alt` text** in `index.html` (section 6) to describe the
   new photo accurately. Don't leave the old description in place.
4. Commit + push

## Still missing

- `favicon.png` — 32×32 browser tab icon
- `apple-touch-icon.png` — 180×180 iOS home-screen icon
- `og.jpg` — 1200×630 social-share preview image
- A portrait of Ross — useful if a dedicated "Meet Ross" block gets added
