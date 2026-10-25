# Selfhold website

Responsive, dependency-free website for the open-source, self-custodial Lattice wallet. Static HTML and CSS; no client JavaScript, analytics, third-party fonts, wallet connections or forms.

## Develop

Requires Node.js 22 or newer.

```sh
npm run build
npm test
npm run dev
# http://127.0.0.1:4173
npm run check:links
```

`public/` contains the source. `dist/` is the generated site. The preview server binds only to loopback.

## Deploy

Every push to `main` runs `.github/workflows/pages.yml`: it builds, runs the tests and publishes `dist/` to GitHub Pages, served at https://selfhold.app. The domain is set in the repository's Pages settings; its DNS (A and AAAA records for GitHub Pages, DNS only) is in Cloudflare. GitHub Pages sends no custom security headers, and the site has no scripts, forms or third-party requests.

## Content and provenance

- Wallet source: https://github.com/adalinxx/selfhold-wallet
- Brand: approved Selfhold round-two A mark, copied without geometry changes from `public/assets/selfhold-mark.svg` in the wallet source. Monochrome palette, local fonts and hairline structure follow the project design language.
- Screenshots: `selfhold-welcome.png` and `selfhold-node-choice.png`, captured from the packaged extension built from wallet main `60ea275` (360 × 600 popup at 2×, light) in a disposable Chrome profile with a throwaway wallet. They contain no credentials or personal account data. The store release may lag them; the FAQ says so.
- Feature and privacy copy checked against current wallet main (see DESIGN.md for the inspected commit).
- Installation links use the established Chrome Web Store item and the Selfhold path. No numeric live-version claim is made; direct store title/version verification remains limited as recorded in DESIGN.md.
- Public support: support@lattice.build.

Reused brand assets and the screenshot are supplied by the Lattice Wallet project for this website. Original project licensing and attribution: https://github.com/adalinxx/selfhold-wallet/blob/main/LICENSE . No independent rights to the Selfhold brand are granted by this repository.
