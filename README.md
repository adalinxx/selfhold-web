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

`public/` contains the source. `dist/` is the generated site. The preview server binds only to loopback. No public deployment, domain or DNS is configured. Review hosting privacy and security headers before any separately approved public deployment. Open subsequent change pull requests as drafts.

## Content and provenance

- Wallet source: https://github.com/adalinxx/selfhold-wallet
- Brand: approved Selfhold round-two A mark, copied without geometry changes from `public/assets/selfhold-mark.svg` in the wallet source. Monochrome palette, local fonts and hairline structure follow the project design language.
- Screenshots: `selfhold-welcome.png` and `selfhold-node-choice.png`, captured from the packaged extension built from wallet main `60ea275` (360 × 600 popup at 2×, light) in a disposable Chrome profile with a throwaway wallet. They contain no credentials or personal account data. The store release may lag them; the FAQ says so.
- Feature and privacy copy checked against current wallet main (see DESIGN.md for the inspected commit).
- Installation links use the established Chrome Web Store item and the Selfhold path. No numeric live-version claim is made; direct store title/version verification remains limited as recorded in DESIGN.md.
- Public support: support@lattice.build.

Reused brand assets and the screenshot are supplied by the Lattice Wallet project for this website. Original project licensing and attribution: https://github.com/adalinxx/selfhold-wallet/blob/main/LICENSE . No independent rights to the Selfhold brand are granted by this repository.
