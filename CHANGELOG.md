# Memora website: change log

Live site: https://memoraconcepts.com
Source: GitHub memoraconcepts/memora-website (branch main). Every push to main goes live on Netlify within about a minute.
This folder on the Desktop is a copy of the live site files, refreshed after each change.

## 17 Oct 2026

- **No prices on the site.** All rates removed from pages, FAQs, search-engine data and Mo. Visitors are asked to request a quote instead.
- **Pricing page retired.** /pricing/ now forwards to /contact/, which is set up as "Request a quote". You can delete the old "pricing" folder from this Desktop copy.
- **Menu:** Work · Services · Founding offer · About · Contact, with a "Get a quote" button.
- **About half the wording cut** (about 5,000 words down to 2,650). Every page keeps its heading, a one-line intro, a short list, the steps and 3–4 short FAQs.
- **Homepage:** removed the "Pick the model that fits" price cards and the Field notes section. The founding offer is now a single band.
- **Mo** points visitors to "Get a quote" instead of giving prices.
- Internal rates now live in a separate price list (Claude Docs: "Memora price list (internal)").

## 14 Oct 2026 (afternoon)

- Added X (https://x.com/memoraug) alongside LinkedIn, shown as round icons in the footer of every page, in the contact card on the homepage and contact page, and in the "Let's make it Memora-ble" band on the service pages.
- X is listed in the search-engine data (structured data) next to LinkedIn.
- The footer now leaves room at the bottom so the "Ask Mo" button never covers the icons.

## 14 Oct 2026

**Menu and pages**
- Every menu item now opens its own page: Work · Services (Activations & events, Brand identity & logos, Social & TikTok content, Agency design desk) · Pricing · Founding offer · About · Contact, plus a "Start a project" button.
- On phones, a Menu button opens the full list.
- The logo takes you home; there is no separate "Home" item.
- New pages: /agency-design-desk/ (for BTL and PR agencies) and /founding-offer/ (first month at half price on each plan).
- The homepage is now a short summary that links out to each page.
- The hidden "Site insights" admin panel was removed from the public code.
- The sitemap lists all 10 pages.

**Messages**
- The contact form (/contact/) has two buttons. "Send by email" delivers the brief to info@memoraconcepts.com. "Send on WhatsApp" opens WhatsApp with the message ready and also sends a copy to the inbox.
- Mo, the chat assistant, is on every page. When a visitor leaves their details, Mo sends them to info@ with the chat history, and it offers WhatsApp and email buttons for a live reply.
- Delivery runs through Netlify Forms (forms "enquiry" and "mo-lead"). The email notification goes to info@memoraconcepts.com. The free plan covers 100 messages a month.
- Netlify emails come from formresponses@netlify.com. The first ones landed in Zoho Spam: mark them "Not spam" and add netlify.com to the Zoho allowlist.

**Decisions**
- Keep short page addresses (/activations/, not long keyword URLs).
- Add an Industries menu only once 2–3 real pages exist. Next page: /afcon-2027/.

## Still open
- Confirm Netlify emails land in the inbox after the allowlist. If not, switch to Resend (email sent from your own domain).
- Founding offer fine print: what "locked for life" means after a pause or cancel.
- Agency design desk rate card (the site says "on request").
- Google Search Console and Google Business Profile.
- AI answers for Mo (optional, small cost per chat).
