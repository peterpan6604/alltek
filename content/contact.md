---
section: contact
status: in-progress
---

# Contact details

## Primary

- **Phone:** 07507 851590  ✅ wired into the site
- **Email:** `alltekplastering@gmail.com` ✅ wired into the site
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

**Recommended backend: Web3Forms** (free, supports the photo-upload
field on the form. Formspree's free tier does not accept file uploads
— their paid tier does, at £8/mo.)

1. Go to https://web3forms.com and click **Create your Access Key**
2. Enter the email address where enquiries should arrive
   (`alltekplastering@gmail.com`) — they email a free access key
3. Copy the access key from the email
4. In [`index.html`](../index.html) section 9 (contact form):
   a. Change `action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ENDPOINT"`
      to `action="https://api.web3forms.com/submit"`
   b. Add a hidden input near the top of the form (just after `<form …>`):
      `<input type="hidden" name="access_key" value="THE_KEY_FROM_EMAIL">`
5. Commit + push. Form is live with photo support.

## Why Web3Forms (over Formspree)

- **Free tier supports file uploads** (5MB per file, multiple files)
  — Formspree free tier doesn't
- No account / dashboard — access key is delivered by email and just works
- 250 submissions/month free (vs Formspree's 50)
- Same simplicity for the developer: one URL, one form submit

If file uploads aren't important and a more polished dashboard is, fall
back to **Formspree paid (£8/mo)** which adds files + analytics + spam
filtering on top of the free Formspree experience.

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
