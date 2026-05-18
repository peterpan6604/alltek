---
section: contact
status: in-progress
---

# Contact details

## Primary

- **Phone:** 07507 851590  ✅ wired into the site
- **Email:** TODO (e.g. `info@alltekplastering.co.uk`)
- **Website:** https://peterpan6604.github.io/alltek/ (custom domain TBC)

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

1. JSON-LD `LocalBusiness` schema in `<head>` (phone ✅, email TODO, address TODO, hours ✅)
2. Contact section — phone ✅, email TODO, hours ✅
3. Floating "Call Now" mobile button ✅

---

# Contact form — handoff wiring

**Status:** form is built, validated, spam-protected, and styled.
The submit handler is in **stub mode** — it shows a "Thanks" message
but doesn't actually send anything yet. This is intentional: the
client owns the destination inbox, so they wire it at handoff.

## What the client does (one-time, ~5 minutes)

1. Go to https://formspree.io and click **Get Started**
2. Sign up with the email address where enquiries should arrive
   (e.g. `info@alltekplastering.co.uk`)
3. Click the verification link sent to that inbox
4. From the dashboard → **New Form** → name it `Alltek Website` → Create
5. Copy the endpoint URL (looks like `https://formspree.io/f/xyzabc123`)
6. In [`index.html`](../index.html), replace `REPLACE_WITH_FORMSPREE_ENDPOINT`
   with that URL (one occurrence)
7. Commit + push. Form is live.

## Why Formspree

- Free tier covers 50 submissions/month (plenty for a local trade)
- No server, no backend, works on GitHub Pages
- Built-in spam filtering + email-confirmed delivery
- Client owns the account, so they control where enquiries go without
  developer involvement

## Already-built spam protection

- Honeypot field `_gotcha` (invisible to humans, bots fill it in and
  Formspree auto-rejects)
- HTML5 form validation on every required field
- If spam volume is high after launch, the Formspree dashboard has
  a one-click reCAPTCHA toggle

## Testing after wiring

After the URL is pasted and the site redeployed:

1. Open the live site, fill out the form with a real email
2. Submit — should redirect to Formspree's thank-you page
3. Check the destination inbox for the email
4. First submission: Formspree asks the destination inbox to confirm
   it actually wants enquiries. One-click confirm and future
   submissions arrive silently

## Alternative options (if Formspree free tier is exceeded)

- **Formspree paid** — £8/mo for 1,000 submissions
- **EmailJS** — different model, free tier ~200/mo, more JS plumbing
- **Web3Forms** — no account, accept any destination email, but newer
  and less battle-tested
- **Netlify Forms** — would require moving hosting off GitHub Pages
