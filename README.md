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
- Brand: approved Selfhold round-two A mark, copied without geometry changes from `public/assets/selfhold-mark.svg` in the wallet source. Monochrome palette, local monospace fonts and hairline structure follow the project design language.
- Screenshot: original `docs/store-assets/01-welcome.png`, clearly labeled as the existing Lattice Wallet branding. It contains no credentials or account data.
- Feature and privacy copy checked against the 0.4.1 candidate README, store-listing, brand and privacy documentation. Candidate-specific capabilities are explicitly scoped.
- Release status as supplied on 2026-10-17: Lattice Wallet 0.3.1 is live; Selfhold 0.4.1 is an uploaded draft awaiting final submission. Update every release-status reference together only after verifying publication.
- Public support: support@lattice.build.

Reused brand assets and the screenshot are supplied by the Lattice Wallet project for this website. Original project licensing and attribution: https://github.com/adalinxx/lattice-wallet/blob/main/LICENSE . No independent rights to the Selfhold brand are granted by this repository.
