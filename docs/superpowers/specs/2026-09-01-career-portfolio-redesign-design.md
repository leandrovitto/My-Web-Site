# Career Portfolio Redesign

## Objective

Redesign leandrovitto.com as a career portfolio for Senior Individual Contributor and Tech Lead / Frontend Architect roles. The site must lead with professional impact, make the CV download the primary conversion, and support Italian first with a complete English experience.

## Product decisions

- Primary audience: Italian and international recruiters, hiring managers, and product/engineering leaders.
- Primary language: Italian. English is a complete alternate locale, not machine-translated fallback copy.
- Primary action: download the locale-appropriate CV.
- Secondary actions: visit LinkedIn and send email.
- Positioning: hands-on senior engineer who combines frontend depth, system architecture, delivery quality, and mentoring.

## Information architecture

### Home

1. Compact navigation with name/mark, Work, Profile, language control, and CV CTA.
2. Hero with the role statement, a succinct value proposition, and CV CTA.
3. Credibility strip: 10+ years, B2B/B2C product experience, mentoring/team leadership.
4. Three featured case studies: SmartplateMenu, Codewave, and TubeHorizon.
5. Working principles: architecture, product delivery, quality, and collaboration; concise rather than manifesto-like.
6. Minimal contact footer.

### Work

- A structured, filterable collection of projects with featured work first.
- Every case study exposes: challenge, role, decision(s), relevant stack, and outcome or an explicit qualitative result when a numeric metric is unavailable.
- Missing images, project URLs, galleries, and metrics must render gracefully without breaking the card layout.

### Profile

- A concise professional summary and career timeline.
- Competencies grouped by the value delivered: frontend systems, delivery & quality, platform/cloud, and AI/product exploration.
- Education and certifications stay available but compact.
- Sport, trading, and other personal notes become a short optional personal section below professional information.

## Content treatment

Keep and elevate:

- Professional experience and mentoring.
- The CV in both languages.
- Product projects, especially SmartplateMenu, Codewave, and TubeHorizon.
- Recent AI, architecture, and platform capabilities when supported by project evidence.

Reduce or relocate:

- The long manifesto becomes a concise “how I work” section.
- The exhaustive technology list becomes grouped capabilities.
- WakaTime embeds are removed from the redesign and are not replaced in this scope.
- Decorative animations and non-career content no longer lead a page.

## Visual system

- Direction: systems portfolio—editorial grid, clear information hierarchy, and project evidence instead of generic component-library cards.
- Typography: IBM Plex Mono for display headings, navigation, labels, tags, metrics, and CTAs. Use a readable sans-serif companion for body copy.
- Colors: blue-gray/near-white primary background, near-black navy ink, electric blue as the principal interaction color, and lime only for small signals or status accents.
- Theme: light mode is default; dark mode uses deliberate contrast tokens rather than a blind inversion.
- Components: square-to-subtly-rounded geometry, crisp borders, high-density project metadata, and no gratuitous shadows.
- Motion: short purposeful transitions only, fully disabled or reduced with `prefers-reduced-motion`; no perpetual rotations or pulsing elements.

## Technical architecture

- Retain Next.js Pages Router, Tailwind, and `next-translate` for this redesign.
- Create a page-level shell and reusable primitives for navigation, section header, metric, case-study card, tag, CTA, and timeline entry.
- Keep locale content separate from presentation. Case-study data must be typed and include optional image, href, gallery, stack, metric, and result fields.
- The locale control must preserve the current route.
- Supply locale-correct document language, titles, descriptions, canonical URLs, Open Graph image/title/description, and Twitter data on all pages.

## Accessibility and resilience

- Semantic landmarks, one H1 per page, keyboard-operable navigation, visible focus styles, and coherent heading order.
- Useful image alt text; decorative images use empty alt text intentionally.
- Respect reduced-motion preferences and maintain WCAG AA contrast for normal text and controls.
- External links use safe `rel="noreferrer"` where appropriate and clearly expose their destination in accessible labels.
- Project cards and content sections must remain useful with missing optional data.

## Verification

- Configure lint so it is non-interactive and run it with the build.
- Run production build and resolve type/lint failures.
- Add or update E2E checks for locale switching, navigation, CV link, and light/dark theme behavior.
- Manually inspect desktop and mobile layouts, keyboard navigation, and reduced motion.
- Verify SEO metadata for Italian and English routes.

## Existing issues to fix during implementation

- `npm run lint` currently prompts to create an ESLint configuration.
- The `TechSkills` effect depends on the state it sets, causing unnecessary repeat fetches.
- Site version/update date is hardcoded in the app shell.
- Multiple image alt values are generic or inaccurate.
- WakaTime uses four third-party SVG embeds on the portfolio page.

## Out of scope

- A CMS, contact form backend, analytics platform, or migration to the Next.js App Router.
- New project content not already available in the repository, except concise editorial restructuring and project outcome copy supplied by the owner.
