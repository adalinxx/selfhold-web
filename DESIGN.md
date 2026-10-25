# Selfhold acquisition page

## Goal and audience

Help a visitor understand the practical job, judge whether Selfhold fits, and install it from the official Chrome Web Store. The immediate audience is people using or exploring Lattice, including developers and node operators. Beginners need the network explained early; no prior familiarity is assumed.

The page leads with sending, receiving and holding keys. It explains Lattice in the hero and a short strip directly below it, then shows the choices a person makes: review a transfer, keep a backup, and select a hosted or personal node. The primary action is consistently the store listing. Source inspection and setup guidance support that action.

## Research patterns

Research reviewed on 2026-10-19, using official product pages and project sources:

- [MetaMask](https://metamask.io/), [Rainbow](https://rainbow.me/) and [Keplr](https://www.keplr.app/): lead with recognizable activities, make the product visible, and provide an entry point that fits the supported ecosystem.
- [Rabby](https://github.com/RabbyHub/Rabby): concrete transaction-review capabilities are more useful than generic claims of safety.
- [Signal](https://signal.org/) and [Proton Pass](https://proton.me/pass): explain the category, supported platform and next step immediately.
- [Bitwarden](https://bitwarden.com/) and its [compliance material](https://bitwarden.com/compliance/): distinguish code visibility from independent security evidence.

These are observed presentation patterns, not measured conversion results or endorsements. Selfhold does not inherit their network coverage, trading features, security assessments or adoption claims.

## Product grounding

Wallet main inspected at `32d5a3cd277a87de27a88fd0355e92ea29386fac`; package version 0.4.1. The README and privacy policy support local signing, an encrypted vault, review of sends and fees, node choice, Lattice parent/child chains, and encrypted backup files/QR codes.

- [Wallet source](https://github.com/adalinxx/selfhold-wallet)
- [Privacy policy](https://github.com/adalinxx/selfhold-wallet/blob/main/docs/privacy-policy.md)
- [Security policy](https://github.com/adalinxx/selfhold-wallet/blob/main/SECURITY.md)
- [Chrome listing](https://chromewebstore.google.com/detail/selfhold/amcobhbipbblfjonmoiicihhfglkhpce)

The store URL returned HTTP 200. Direct public-store navigation in the available Chrome automation connection returned “Not allowed”, so the displayed live title/version could not be independently confirmed. Source version is not treated as proof of store availability. The page removes stale October 17 draft claims, avoids a numerical store-version assertion and directs users to the listing for current distribution details.

The welcome and node-choice screenshots were recaptured on 2026-10-24 from wallet main `60ea275`, after the Selfhold brand guidebook rollout (the S-key mark, system sans). They are actual UI from a disposable profile, with no credentials or personal data, shown at the popup's own proportions. They are described as current source, not as the distributed store version, which may still show the earlier look. The approved Selfhold mark is unchanged. Screenshot bytes were inspected for identifying metadata.

[Moniker](https://github.com/adalinxx/moniker/blob/main/README.md) suggests a tangible future ecosystem path (a handle/profile), but live compatibility and a reliable public HTTPS entry point were not verified. It is deliberately not promoted as an immediately working install-to-use journey.

## Design and measurement

A restrained monochrome product stage replaces an abstract hero diagram. A real connection screen explains hosted versus own-node choices. Large proportional type, clear contrast, descriptive links, native expandable FAQs and single-column mobile sections support comprehension. Installation steps and the recovery responsibility share one section, before the final action.

No analytics or tracking is introduced. Improvement in acquisition is a hypothesis, not a claimed result. The first qualitative check is whether a new reader can explain what Selfhold does, which network it supports, and what they must back up before installing. Any analytics or broader distribution plan needs separate approval.
