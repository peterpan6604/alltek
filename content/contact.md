---
section: contact
status: placeholder
---

# Contact details

Update each TODO and search-and-replace through [`index.html`](../index.html)
plus the JSON-LD block.

## Primary

- **Phone:** TODO (mobile preferred, e.g. 07XXX XXX XXX)
- **Email:** TODO (e.g. info@alltekplastering.co.uk)
- **Website:** https://alltekplastering.co.uk

## Address

Alltek Plastering & Rendering Ltd
TODO — street address (optional for tradesperson, but recommended for Google Business Profile)
Barnsley
South Yorkshire
TODO — postcode
United Kingdom

## Opening hours

| Day        | Hours          |
| ---------- | -------------- |
| Mon – Fri  | 7am – 6pm      |
| Saturday   | 8am – 2pm      |
| Sunday     | Closed         |

## Where contact details appear on the site

1. JSON-LD `LocalBusiness` schema in `<head>` (phone, email, address, hours)
2. `<meta>` Open Graph tags (URL only)
3. Section 9 (contact) — phone, email, hours
4. Footer copyright line

## Form wiring (currently a no-op)

The form on the homepage is HTML-only. Pick one of these to make it send:

- **Formspree** — sign up, copy your endpoint into the `<form action>` attribute.
- **Netlify Forms** — host the site on Netlify, add `data-netlify="true"`
  and a hidden `form-name` input.
- **EmailJS** — drop in their SDK, send via `emailjs.sendForm()` from
  `js/main.js`. Free tier covers ~200 emails/month.

Whichever you pick, also add a honeypot field for spam protection.
