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

- Wallet source: https://github.com/adalinxx/lattice-wallet
- Brand: approved Selfhold round-two A mark, copied without geometry changes from `public/assets/selfhold-mark.svg` in the wallet source. Monochrome palette, local fonts and hairline structure follow the project design language.
- Screenshots: original `docs/store-assets/01-welcome.png` and `02-node-choice.png`, rechecked against current wallet main and labeled as earlier/documentation UI. They contain no credentials or personal account data.
- Feature and privacy copy checked against current wallet main (see DESIGN.md for the inspected commit).
- Installation links use the established Chrome Web Store item and the Selfhold path. No numeric live-version claim is made; direct store title/version verification remains limited as recorded in DESIGN.md.
- Public support: support@lattice.build.

Reused brand assets and the screenshot are supplied by the Lattice Wallet project for this website. Original project licensing and attribution: https://github.com/adalinxx/lattice-wallet/blob/main/LICENSE . No independent rights to the Selfhold brand are granted by this repository.
