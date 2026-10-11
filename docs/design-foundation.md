# BashGit Labs — Phase 1 foundation

Scope: shared foundations only. Existing section order, copy (apart from public
email), Labs entries, diagrams and routes remain for later design review.

## Reference study

Reviewed in the browser on 10 October 2026. These are principles, not copied UI or code.

| Reference | Principle used | Deliberately excluded |
| --- | --- | --- |
| [Vercel](https://vercel.com/) | Neutral surfaces, fine borders, precise controls | Its identity, oversized empty hero, customer proof |
| [Linear](https://linear.app/) | Type hierarchy, quiet navigation, detailed product framing | Dark palette and complex product animation |
| [Stripe](https://stripe.com/in) | Clear text hierarchy and consistent alignment | Large gradients, animated metrics and dense product taxonomy |
| [Clerk](https://clerk.com/) | Light surfaces, legible forms, shallow elevation | Purple identity and replicated authentication UI |
| [Notion](https://www.notion.com/) | Whitespace and an obvious primary action | Illustrations and oversized rounded display treatment |

Implementation references: [Next.js local fonts](https://nextjs.org/docs/app/getting-started/fonts)
and [Motion accessibility](https://motion.dev/docs/react-accessibility).

## Typography decision

Compared Geist, Instrument Sans, Manrope and Inter on the actual homepage at
1440px and 390px, plus an identical four-font specimen for headings, body copy,
technical labels and controls. All four font files were verified loaded.

- **Geist — selected:** clear technical labels, balanced 600-weight headings,
  readable regular body text, and coherent navigation/form typography.
- **Instrument Sans:** close alternative, with a slightly more editorial tone.
- **Manrope:** readable but its rounder geometry gives a softer brand impression.
- **Inter:** excellent body legibility; optical sizing noticeably changes the fit
  of the existing mobile headline. Compact wrapping alone was not the deciding factor.

The existing long headline remains oversized for its column. That is a Phase 2
copy/layout decision; font selection does not resolve it.

Geist is self-hosted through `next/font/local`, with `display: swap`, a variable
weight range of 100–900, preload and an adjusted Arial fallback. One font file,
approximately 169 KB; no runtime Google Fonts request or new font dependency.
Source: [Google Fonts Geist](https://github.com/google/fonts/tree/main/ofl/geist).
The SIL Open Font License and copyright notice are retained in `app/fonts/OFL.txt`.
Comparison fonts and screenshots are review artifacts outside the repository.

## Tokens

Visual tokens live in `app/tokens.css`; `tailwind.config.ts` maps them to utilities.

| Foundation | Decision |
| --- | --- |
| Canvas | White `#ffffff` |
| Surface | Cool neutral `#f8f9fb` |
| Primary text | `#161b24` |
| Secondary text | `#455163` |
| Muted text | `#687383` |
| Border | `#e1e5eb` |
| Accent / link | Blue `#275bd1`; darker hover `#2046a6` |
| Neutral range | 50–950; existing `ink` classes alias it |
| Type | Caption 12, small 14, body 16, lead 17–19, title 20–24, heading 32–44, display 40–72 px |
| Line height | Body 1.7, heading 1.12, display 1.04 |
| Spacing | 4px base, named steps through 96px |
| Section spacing | Fluid 56–96px |
| Page gutter | Fluid 20–40px |
| Widths | Site 1280px, wide 1480px, reading 720px, copy 65ch |
| Radius | Small 4px, control 6px, card 8px, panel 12px |
| Shadows | Small, card, raised; low opacity and shallow elevation |
| Controls | 48px default height; existing compact header button remains 44px |

Current `.section-shell` uses the **wide** width for compatibility with its fixed
multi-column layouts. New `Container` defaults to 1280px. Do not globally narrow
legacy grids before redesigning them. Existing section-specific artwork, gradients,
hardcoded dimensions and shadows are intentionally deferred.

## Reusable primitives

- `ButtonLink`: primary, secondary, ghost; native Next Link props; directional icon.
- `.button` with a variant class: native form buttons share the same appearance.
- `Container`, `SectionHeading`, `Card`, `TextLink`, `Badge` in
  `components/ui/foundation.tsx`: server-compatible building blocks for the next phase.
- `.section-space`, `.stack`, `.cluster`: vertical rhythm and wrapping groups.
- Existing `.section-title`, `.section-copy`, `.eyebrow`, `.form-label` and
  `.form-field` now use the foundation tokens.
- Visible focus outline, skip link, anchor offset and mobile menu keyboard behavior.

Example for a future approved section:

```tsx
<section className="section-space" aria-labelledby="capabilities-title">
  <Container>
    <SectionHeading id="capabilities-title" eyebrow="Capabilities" title="Engineering scope" />
  </Container>
</section>
```

Use the named utilities before introducing arbitrary spacing, colors or shadows.
Cards are static by default; visual interaction belongs on actual links/buttons.

## Motion

`lib/motion.ts` is the timing source for both Motion and CSS custom properties:
160ms interaction, 240ms standard, 400ms entrance; easing `(0.22, 1, 0.36, 1)`;
10px entrance travel and 50ms stagger. Content is visible in server-rendered HTML.

`MotionProvider` watches the OS preference live. Reduced motion disables travel,
staggering, diagram pulses/path loops, CSS hover travel and Lenis. The normal-mode
legacy diagram loops and scroll behavior are retained, not extended. Their future
replacement belongs to the section redesign phase.

## Contact configuration

Public email is centralized in `data/company.ts`: `hello@bashgit.com`.
Visible links and Organization structured data use it. No admin address is published.
Actual sending and storage configuration is unchanged. `.env.example` deliberately
leaves the recipient blank: use a working inbox and migrate after delivery is verified.

## Phase 1 validation

- `npm run lint -- --debug`: passed with exit code 0, no reported violations.
- `npm run build`: passed, including TypeScript and generation of all existing routes.
- `npm ci --dry-run --ignore-scripts --offline`: passed after repairing missing
  optional transitive resolver entries in the existing lockfile. No direct dependency changed.
- All seven public pages checked at 1440px and 390px: no text outside the viewport,
  hidden copy or uncaught page errors. Homepage also checked at 320, 768, 1024 and 1280px.
- Keyboard: skip link transfers focus to main; mobile menu exposes links when open;
  Escape closes it and returns focus; closed menu links are inert.
- Live reduced-motion toggle: Lenis stops, diagram dots settle, paths remain visible,
  and no infinite browser animations remain. Content also stays visible without JavaScript.
- Contact UI: mobile field rendering and submit/success handling passed with a mocked
  API response. No real inquiry, email or database write was performed. Clean-context
  contact validation produced no console or page errors.
- Existing large hero/diagram, legacy gradients and Labs claims have not been redesigned
  or verified in this phase. Live email delivery remains unverified.

## Files in this phase

- `app/tokens.css`, `app/globals.css`, `tailwind.config.ts`: visual tokens and shared styles.
- `app/layout.tsx`, `app/fonts/Geist-Variable.ttf`, `app/fonts/OFL.txt`: self-hosted font,
  motion provider, skip link and font license.
- `lib/motion.ts`, `components/motion-provider.tsx`, `components/reveal.tsx`,
  `components/smooth-scroll.tsx`, `components/architecture-diagram.tsx`: timing,
  visible server output and reduced-motion behavior.
- `components/ui/foundation.tsx`, `components/button-link.tsx`: reusable primitives.
- `components/header.tsx`: focus/keyboard behavior and shared elevation/timing.
- `components/contact-form.tsx`: shared submit-button styling only.
- `data/company.ts`, `components/sections.tsx`, `components/structured-data.tsx`:
  public email; existing section hover travel also respects reduced motion.
- `.env.example`, `docs/contact-setup.md`: safe email-configuration guidance.
- `README.md`, `docs/design-foundation.md`: setup, decisions and review notes.
- `package-lock.json`: repair of optional transitive resolver entries.

## Phase 2 recommendation

Review and approve the hero and navigation design next: concise positioning,
balanced headline width, light illustrative system map, and visible primary CTA.
Do not extend this phase into Labs content or a full-site implementation.
