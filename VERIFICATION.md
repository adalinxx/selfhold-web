# Verification

Verified locally on 2026-10-17.

- Static build passed on Node.js 26; no production dependencies.
- Four Node tests passed: explicit release status, internal links and assets, absence of scripts/forms/external assets, and published-text privacy checks.
- All five unique external page links returned HTTP 200: wallet source, Chrome listing, wallet privacy policy, GitHub issues and security reporting policy.
- Chromium browser checks passed at 1440×1000, 390×844 and 320×740: no horizontal overflow, images loaded, FAQ toggling worked, privacy page loaded, no JavaScript page errors.
- Keyboard skip link worked. Reduced-motion and dark system preference were checked. The site deliberately retains the light editorial palette and keeps the adaptive SVG mark visible.
- Full desktop and mobile screenshots were visually inspected. Screenshots and the machine-readable report remain in ignored local `qa/` rather than published source.
- Reused PNGs contain only image chunks; no EXIF, text or location metadata.
- No analytics, wallet connection, form collection, domain configuration or public deployment.

To repeat browser checks with an existing Playwright installation, set `PLAYWRIGHT_MODULE` to its package location and run `node scripts/visual-qa.mjs` while `npm run dev` is serving the built site. This is browser and content verification, not a wallet security audit.
