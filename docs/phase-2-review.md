# Phase 2 review: hero, navigation and system visual

Scope: homepage hero, shared navigation and illustrative architecture diagram only.
Branch: `redesign/bashgit-v2`. Later homepage sections and existing routes remain in place.

## Design decisions

- Preferred headline retained: “Product engineering. Built for production.”
- Supporting copy: 33 words covering products, backend platforms, AI and production responsibility.
- Desktop column ratio: approximately 56% copy / 44% diagram, excluding the gutter.
- Primary CTA: Discuss a project → `/contact`.
- Secondary CTA: Explore capabilities → existing `#expertise` section.
- Removed the hero's old trust strip and dark system map.
- White canvas, Geist typography, charcoal controls, fine neutral borders and one restrained blue backend node.
- Navigation: logo, Services, About, Discuss a project. No Labs link until there is suitable content.
- Sticky header with an inline mobile disclosure, inert closed links, Escape/focus return, focus-out dismissal and no-JavaScript navigation fallback.
- Changed horizontal overflow from `hidden` to `clip` so it no longer creates a scroll container that breaks sticky positioning.

## System visual and motion

Five nodes: Product Interface, Backend / API, Data, AI Workflow, Deployment / Observability.
The caption explicitly identifies the visual as illustrative. It makes no client-deployment claim.
Desktop branches the backend into Data and AI; mobile recomposes into a readable vertical rail.
An accessible description explains the relationships.

Existing Framer Motion provides brief content reveals, a 50ms stagger and one-time node/path reveals.
The diagram settles after roughly 600ms once visible. Controls reuse the small arrow-hover movement.
The mobile navigation transition is 160ms. No looping hero animation, parallax or cursor effects.
Reduced motion removes reveal transforms, delays and path animation. Server-rendered content stays visible without JavaScript.
Removed non-scaling SVG strokes from the animated paths: in the stretched SVG they caused gaps in normalized path-length drawing.

## References actually inspected

Screenshots and live browser inspection, rather than template imports:

| Reference | Useful direction |
| --- | --- |
| [Vercel](https://vercel.com/) | Restrained neutral controls and visual hierarchy |
| [Linear](https://linear.app/) | Legible technical/product detail and quiet navigation |
| [Clerk](https://clerk.com/) | Light surfaces and understandable technical interface visuals |
| [Resend](https://resend.com/) | Clear audience positioning and primary/secondary CTA hierarchy |
| [Notion](https://www.notion.com/) | Whitespace and a strong typographic first screen |
| [Motion path example](https://examples.motion.dev/react/use-transform) | Path-drawing behavior; no visual styling copied |
| [Motion SVG documentation](https://motion.dev/docs/react-svg-animation) | Current pathLength API |
| [Motion accessibility documentation](https://motion.dev/docs/react-accessibility) | Reduced-motion treatment |

Tools: Playwright MCP for reference inspection and QA; web browsing for official documentation;
browser controls for the user-visible localhost preview; shell, Git, npm and apply_patch for implementation.
No Context7, shadcn, Pinterest, image generation or third-party animation galleries were needed.
No dependencies were added or removed in Phase 2.

## Files changed in Phase 2

- `components/hero.tsx`: focused homepage hero component.
- `components/sections.tsx`: re-export hero and remove its previous implementation/imports.
- `components/architecture-diagram.tsx`: replace ArchitectureDiagram; preserve the existing LifecycleMap.
- `components/header.tsx`: navigation, sticky header and accessible mobile behavior.
- `data/site.ts`: simplify navigation items; preserve all routes.
- `app/layout.tsx`: remove obsolete fixed-header offset.
- `app/globals.css`: responsive diagram styles and sticky-compatible overflow.
- `docs/phase-2-review.md`: decisions and review record.

Phase 1 changes are also present in the working tree; the total Git diff includes both phases.

## Validation completed

- Final `npm run build`: passed, including TypeScript and all 13 generated routes.
- Final `npm run lint -- --debug`: passed, exit 0. Diagnostics saved outside the repo.
- Responsive checks at 320, 390, 768, 1024, 1280 and 1440px: no horizontal overflow or clipped diagram labels.
- At 1280×720: two-line headline, primary CTA bottom approximately 554px.
- Keyboard: skip link, mobile menu order, Escape/focus return, closed-menu inertness and focus-out dismissal passed.
- Services/About links and active navigation state passed; capabilities anchor lands below the sticky header.
- Reduced motion: visible copy, no node transforms, no delayed reveals.
- JavaScript disabled: headline, five diagram nodes and mobile fallback navigation remain visible.
- Final local production checks: CLS 0 at desktop and mobile; LCP 372ms desktop / 256ms mobile.
  These are unthrottled localhost observations, not deployed performance guarantees.
- Final production browser checks produced no uncaught page errors.
- No known unresolved Phase 2 defects. Other sections retain their prior design and content pending approval for later phases.

## Review artifacts

Screenshots and reference captures: `E:\Bashgit Work\phase2-review`.
Development preview: http://127.0.0.1:3000/.
Production preview, open in the user's browser: http://localhost:3001/.

## Next phase recommendation

Phase 3: consolidate the repetitive operating-layer, philosophy and service material into clear
capability groups: Product & Backend Engineering, AI-enabled Systems, and Cloud & Reliability.
Define specific problems, deliverables and boundaries before adding more visual components.
Do not begin Phase 3 until the user approves Phase 2.
