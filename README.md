# Memora website

The live site for memoraconcepts.com, hosted on Netlify. Static HTML, no build step: Netlify publishes this folder as it is. Every push to main goes live.

- Every page is its own folder with an `index.html` (`/work/`, `/activations/`, `/branding/`, `/content/`, `/agency-design-desk/`, `/pricing/`, `/founding-offer/`, `/about/`, `/contact/`). Add new pages to `sitemap.xml`.
- `index.html` is the homepage: a short summary that links out to the pages, plus the Mo chat assistant.
- `css/nav.css` and `js/nav.js` hold the shared header: main menu, Services dropdown and the phone menu. The header markup is the same on every page; when adding a page, copy it from an existing page and move `aria-current="page"` to the new link.
- `css/page.css` holds the shared styles for the inner pages.
- `img/` holds the images, logo and favicon.
- `netlify.toml` holds the www redirect and the image cache headers.
