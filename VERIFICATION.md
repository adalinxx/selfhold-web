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

## Homepage clarity revision

- Build and four content tests passed after the revision.
- All six external page links returned HTTP 200, including the added Lattice introduction link.
- Chrome responsive checks at 1440×1000, 390×844 and 320×740 found no horizontal overflow; images loaded successfully. The Lattice FAQ expanded and collapsed.
- Revised desktop and mobile full-page screenshots were visually reviewed and saved locally as `qa/revised-desktop.png` and `qa/revised-mobile.png`.
- Browser viewport was reset after checks and the revised local homepage was left open for review.
- Research sources and rationale are documented in `DESIGN.md`. These presentation changes have not been conversion-tested with users.

## Acquisition page — 2026-10-19

- Built from the reviewed website source; wallet main README and privacy documentation inspected at `32d5a3c`.
- Static build and four content tests passed. All six distinct external homepage URLs returned HTTP 200, including the supplied Selfhold store URL.
- Chrome visual review at 1440×1000 and 390×844; 320×740 overflow and image-loading checks passed. Native FAQ toggling and mobile privacy-page navigation passed. Browser viewport reset after checking.
- Screenshots saved locally as `qa/acquisition-desktop.png` and `qa/acquisition-mobile.png`; no personal browser chrome is included.
- Public store page navigation was unavailable in the Chrome automation connection (“Not allowed”). A successful HTTP link check does not confirm displayed title, version or installation compatibility. The page avoids stale draft/version assertions; see DESIGN.md.
- No wallet interaction, store submission, analytics, hosting or visibility changes.
