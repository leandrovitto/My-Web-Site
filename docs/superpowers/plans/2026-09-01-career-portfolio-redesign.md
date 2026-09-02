# Career Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as an Italian-first, bilingual systems portfolio that positions Leandro for Senior IC and Tech Lead/Frontend Architect roles and makes CV download the primary conversion.

**Architecture:** Retain the Next.js Pages Router and static MDX content pipeline. Replace the current generic layout and card composition with a focused design system and page-specific sections; maintain locale data separately from presentation and expose a typed, defensive project model. The UI uses IBM Plex Mono selectively for display/data UI and a readable sans companion for body copy.

**Tech Stack:** Next.js 14 Pages Router, React 18, TypeScript, Tailwind CSS 3, next-translate, next-themes, Framer Motion, Cypress.

**Spec:** `docs/superpowers/specs/2026-09-01-career-portfolio-redesign-design.md`

## Global Constraints

- Keep Next.js Pages Router, Tailwind, and `next-translate`; do not migrate to App Router.
- Italian is the default locale; English is a complete alternative locale.
- Use IBM Plex Mono for headings, metadata, navigation, tags, metrics, and CTAs; body copy uses a readable sans-serif.
- Light mode is default and dark mode must use deliberate contrast tokens.
- The locale control must preserve the current pathname and query.
- The locale-appropriate CV download is the primary action.
- Respect `prefers-reduced-motion`, keyboard navigation, visible focus, semantic landmarks, one H1 per page, and WCAG AA contrast.
- Do not add a CMS, contact-form backend, analytics service, or WakaTime replacement.

---

## File structure

- Create: `.eslintrc.json` — non-interactive Next ESLint configuration.
- Create: `src/components/layouts/SiteShell.tsx` — shared page shell, skip link, header, footer, and main landmark.
- Create: `src/components/portfolio/CvDownload.tsx` — locale-aware CV link/button.
- Create: `src/components/portfolio/SectionHeading.tsx` — consistent section heading and eyebrow.
- Create: `src/components/portfolio/MetricStrip.tsx` — accessible credibility metrics.
- Create: `src/components/portfolio/CaseStudyCard.tsx` — resilient work card used by Home and Work.
- Create: `src/components/portfolio/CaseStudyGrid.tsx` — client-side category filter and card grid.
- Create: `src/components/portfolio/Timeline.tsx` — semantic Profile timeline.
- Create: `src/lib/portfolio.ts` — typed project normalization and featured selection.
- Modify: `src/@types/content.d.ts` — make optional project fields explicit and add optional outcome metadata.
- Modify: `src/styles/globals.css`, `tailwind.config.js` — font import, CSS variables, theme tokens, reduced-motion utilities.
- Modify: `src/routes.ts`, `src/hooks/MenuHook.ts`, `src/components/layouts/navbar/*`, `src/components/layouts/Footer.tsx` — career-first navigation and locale-preserving language menu.
- Modify: `src/pages/_app.tsx`, `src/pages/_document.tsx`, `i18n.json` — default Italian locale, correct document language, remove hardcoded version badge.
- Modify: `src/pages/index.tsx`, `src/pages/about.tsx`, `src/pages/portfolio.tsx` — new Home, Profile, and Work page assemblies.
- Modify: `src/components/layouts/meta/*` — per-page locale-aware metadata and social image props.
- Modify: `locales/{it,en}/*.json`, `content/projects/_{it,en}/*.mdx` — concise bilingual copy and case-study fields.
- Remove or stop importing: obsolete homepage animation/manifest components and `WakaTime.tsx` from user-facing page assemblies.
- Create/modify: `cypress/e2e/career-portfolio.cy.js` — navigation, locale persistence, CV, and theme E2E coverage.

## Task 1: Establish quality guardrails and design tokens

**Files:**
- Create: `.eslintrc.json`
- Modify: `tailwind.config.js`
- Modify: `src/styles/globals.css`
- Test: `package.json` scripts (no source change required unless a script is missing)

**Interfaces:**
- Produces CSS custom properties `--surface`, `--surface-raised`, `--ink`, `--muted`, `--line`, `--accent`, and `--signal` for all later components.
- Produces Tailwind font families `mono` and `sans` used by page and component class names.

- [ ] **Step 1: Add the failing lint configuration check**

Run: `npm run lint`

Expected: the command currently opens the Next ESLint setup prompt instead of completing non-interactively.

- [ ] **Step 2: Add the minimal ESLint configuration**

Create `.eslintrc.json`:

```json
{
  "extends": ["next/core-web-vitals"]
}
```

- [ ] **Step 3: Configure the design tokens and font families**

Add IBM Plex Mono via a CSS `@import` in `src/styles/globals.css`, define the light tokens on `:root`, override them under `.dark`, and add this reduced-motion guard:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Extend `tailwind.config.js` with `fontFamily.mono` starting with `"IBM Plex Mono"` and a system sans stack under `fontFamily.sans`.

- [ ] **Step 4: Run the lint and style/build checks**

Run: `npm run lint && npm run build`

Expected: lint exits without prompts; build compiles successfully.

- [ ] **Step 5: Commit the guardrails**

```bash
git add .eslintrc.json tailwind.config.js src/styles/globals.css
git commit -m "chore: establish portfolio design tokens"
```

## Task 2: Build the shared shell, navigation, locale behavior, and CV CTA

**Files:**
- Create: `src/components/layouts/SiteShell.tsx`
- Create: `src/components/portfolio/CvDownload.tsx`
- Modify: `src/components/layouts/navbar/Navbar.tsx`
- Modify: `src/components/layouts/navbar/ChangeLanguage.tsx`
- Modify: `src/components/layouts/navbar/ThemeToggler.tsx`
- Modify: `src/components/layouts/Footer.tsx`
- Modify: `src/hooks/MenuHook.ts`
- Modify: `src/routes.ts`
- Modify: `locales/it/common.json`, `locales/en/common.json`
- Test: `cypress/e2e/career-portfolio.cy.js`

**Interfaces:**
- `CvDownload({ className?, variant? }): ReactElement` resolves `config.link_cv_it` for `it` and `config.link_cv_en` for `en`.
- `SiteShell({ children }: { children: ReactNode }): ReactElement` wraps each page with header, `main`, footer, and skip link.
- `ChangeLanguage` reads `{ asPath, locale }` from `useRouter()` and renders links with `href={asPath}` and `locale={lng.code}`.

- [ ] **Step 1: Write the failing navigation/CV Cypress test**

Create `cypress/e2e/career-portfolio.cy.js` with:

```js
describe('career portfolio shell', () => {
  it('exposes the primary Italian CV action and the Work/Profile navigation', () => {
    cy.visit('/');
    cy.get('[data-cy="cv-download"]').should('have.attr', 'href').and('include', 'drive.google.com');
    cy.get('[data-cy="main-nav"]').contains('Progetti').should('have.attr', 'href', '/portfolio');
    cy.get('[data-cy="main-nav"]').contains('Profilo').should('have.attr', 'href', '/about');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: FAIL because the `data-cy` hooks and Italian-first labels do not exist.

- [ ] **Step 3: Implement the shell and locale-aware CTA**

Create `CvDownload` as an anchor, not `window.open`, so users can copy, open, and navigate with the keyboard:

```tsx
const href = lang === 'it' ? config.link_cv_it : config.link_cv_en;
return <a data-cy="cv-download" href={href} target="_blank" rel="noreferrer">{t('cv.download')}</a>;
```

Create `SiteShell` with `<a href="#main-content">Salta al contenuto</a>`, `<header>`, `<main id="main-content">`, and `<footer>`. Replace the existing nested/duplicated nav with one `nav` bearing `data-cy="main-nav"`. Use `asPath` in `ChangeLanguage` so `/about` remains `/about` when the locale changes. Keep the three-state theme behavior but add an accessible `aria-label` that describes the next theme action.

- [ ] **Step 4: Run the focused E2E test and keyboard smoke test**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: PASS. Manually tab from the skip link through navigation, theme, locale, and CV control; focus must remain visible.

- [ ] **Step 5: Commit the shared shell**

```bash
git add src/components/layouts/SiteShell.tsx src/components/portfolio/CvDownload.tsx src/components/layouts/navbar src/components/layouts/Footer.tsx src/hooks/MenuHook.ts src/routes.ts locales/it/common.json locales/en/common.json cypress/e2e/career-portfolio.cy.js
git commit -m "feat: add career portfolio shell and CV CTA"
```

## Task 3: Normalize project data and create reusable Work components

**Files:**
- Create: `src/lib/portfolio.ts`
- Create: `src/components/portfolio/SectionHeading.tsx`
- Create: `src/components/portfolio/MetricStrip.tsx`
- Create: `src/components/portfolio/CaseStudyCard.tsx`
- Create: `src/components/portfolio/CaseStudyGrid.tsx`
- Modify: `src/@types/content.d.ts`
- Modify: `content/projects/_it/{smartplatemenu,codewave-dev,tubehorizon}.mdx`
- Modify: `content/projects/_en/{smartplatemenu,codewave-dev,tubehorizon}.mdx`
- Test: `cypress/e2e/career-portfolio.cy.js`

**Interfaces:**
- `PortfolioProject` has required `slug`, `title`, `date`, `category`, `content`, `portfolio`; optional `imageUrl`, `href`, `gallery`, `stack`, `outcome`, and `featured`.
- `normalizeProject(project: ProjectContent): PortfolioProject` returns arrays as `[]` and empty optional strings as `undefined`.
- `getFeaturedProjects(projects: PortfolioProject[], limit = 3): PortfolioProject[]` uses `featured === true` first, then descending date.
- `CaseStudyCard({ project, priority? })` does not render empty image, outcome, link, or stack regions.

- [ ] **Step 1: Write the failing project-card fallback test**

Append this test:

```js
it('renders featured work and supports a category filter', () => {
  cy.visit('/portfolio');
  cy.get('[data-cy="case-study"]').should('have.length.at.least', 3);
  cy.get('[data-cy="project-filter"]').contains('SaaS').click();
  cy.get('[data-cy="case-study"]').each(($card) => cy.wrap($card).should('contain.text', 'SaaS'));
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: FAIL because no filter or case-study hooks exist.

- [ ] **Step 3: Implement normalized data and resilient components**

Use this normalization shape:

```ts
export function normalizeProject(project: ProjectContent): PortfolioProject {
  return {
    ...project,
    imageUrl: project.imageUrl || undefined,
    href: project.href && project.href !== '#' ? project.href : undefined,
    gallery: project.gallery ?? [],
    stack: project.stack ?? [],
    outcome: project.outcome || undefined,
    featured: project.featured === true,
  };
}
```

Build a filter button group with `aria-pressed`, a visible selected state, and `data-cy="project-filter"`. Add concise `featured: true` and `outcome` frontmatter for the three named projects in both locales; never invent a numeric metric.

- [ ] **Step 4: Run focused tests and build**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js && npm run build`

Expected: PASS; Work renders with and without optional fields.

- [ ] **Step 5: Commit the work primitives**

```bash
git add src/lib/portfolio.ts src/components/portfolio src/@types/content.d.ts content/projects cypress/e2e/career-portfolio.cy.js
git commit -m "feat: add resilient case study components"
```

## Task 4: Rebuild the Home page as the career conversion page

**Files:**
- Create: `src/components/pages/homepage/CareerHero.tsx`
- Create: `src/components/pages/homepage/FeaturedWork.tsx`
- Create: `src/components/pages/homepage/WorkingPrinciples.tsx`
- Modify: `src/pages/index.tsx`
- Modify: `locales/it/home.json`, `locales/en/home.json`
- Modify: `locales/it/common.json`, `locales/en/common.json`
- Test: `cypress/e2e/career-portfolio.cy.js`

**Interfaces:**
- `CareerHero` renders the only H1 on Home and includes `CvDownload`.
- `FeaturedWork({ projects: PortfolioProject[] })` consumes exactly the three projects returned by `getFeaturedProjects`.
- `WorkingPrinciples` accepts localized items with `title` and `description`; it does not render raw HTML.

- [ ] **Step 1: Write the failing Home content test**

Append:

```js
it('leads with professional positioning and three featured case studies', () => {
  cy.visit('/');
  cy.get('h1').should('contain.text', 'Senior Software Engineer');
  cy.get('[data-cy="featured-work"] [data-cy="case-study"]').should('have.length', 3);
  cy.get('[data-cy="cv-download"]').should('be.visible');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: FAIL because the existing home has no career hero or featured-work region.

- [ ] **Step 3: Implement Home with static featured project props**

In `getStaticProps`, read projects for the selected locale, normalize them, and return `featuredProjects: getFeaturedProjects(projects)`. Assemble Home with `SiteShell`, career hero, metric strip, featured work, working principles, and minimal contact footer. Remove imports of `SolarSystem`, `Manifest`, `Details`, and the old generic `TechSkills` section from the Home page. Replace translated `dangerouslySetInnerHTML` copy with paragraphs and links built from React elements.

- [ ] **Step 4: Run Home test, build, and responsive smoke test**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js && npm run build`

Expected: PASS. Inspect 375px and 1440px widths; the hero CTA and all three featured cards remain visible and readable.

- [ ] **Step 5: Commit the Home redesign**

```bash
git add src/components/pages/homepage src/pages/index.tsx locales/it/home.json locales/en/home.json locales/it/common.json locales/en/common.json cypress/e2e/career-portfolio.cy.js
git commit -m "feat: redesign career portfolio home"
```

## Task 5: Rebuild Work and Profile pages around evidence and career history

**Files:**
- Create: `src/components/portfolio/Timeline.tsx`
- Modify: `src/pages/portfolio.tsx`
- Modify: `src/pages/about.tsx`
- Modify: `src/components/pages/about/ExperienceAndEducation.tsx`
- Modify: `src/components/pages/about/TechSkills.tsx`
- Modify: `locales/it/{about,portfolio}.json`, `locales/en/{about,portfolio}.json`
- Test: `cypress/e2e/career-portfolio.cy.js`

**Interfaces:**
- `Timeline({ entries }: { entries: TimelineEntry[] })` renders an ordered list with dates and semantic headings.
- Work receives normalized `PortfolioProject[]`, renders `CaseStudyGrid`, and never imports `WakaTime`.
- Profile groups technical capabilities by localized heading rather than listing every library as primary content.

- [ ] **Step 1: Write the failing Work/Profile E2E test**

Append:

```js
it('shows evidence-led Work and a semantic career timeline', () => {
  cy.visit('/portfolio');
  cy.get('h1').should('contain.text', 'Progetti');
  cy.get('embed').should('not.exist');
  cy.visit('/about');
  cy.get('[data-cy="career-timeline"] ol').should('exist');
  cy.get('[data-cy="capability-group"]').should('have.length.at.least', 3);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: FAIL because Work has no H1 and still embeds WakaTime; Profile has no timeline hook.

- [ ] **Step 3: Implement evidence-led page assemblies**

Use `SiteShell` in both pages. Replace Work’s old `Portfolio`, `Projects`, and `WakaTime` assembly with an H1, introductory copy, and `CaseStudyGrid`. Replace raw HTML rendering in `ExperienceAndEducation` with typed timeline entries and a semantic `<ol>`. Fix `TechSkills` by changing the effect dependency from `[tech, lang]` to `[lang]`, then render grouped capability cards with `data-cy="capability-group"`. Keep hobbies as a short final profile note.

- [ ] **Step 4: Run focused E2E and production build**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js && npm run build`

Expected: PASS; no `<embed>` exists on Work and Profile presents career history before optional personal notes.

- [ ] **Step 5: Commit the career page redesigns**

```bash
git add src/components/portfolio/Timeline.tsx src/pages/portfolio.tsx src/pages/about.tsx src/components/pages/about locales/it/about.json locales/en/about.json locales/it/portfolio.json locales/en/portfolio.json cypress/e2e/career-portfolio.cy.js
git commit -m "feat: redesign work and profile pages"
```

## Task 6: Complete metadata, locale defaults, image semantics, and regression coverage

**Files:**
- Modify: `i18n.json`
- Modify: `src/pages/_app.tsx`
- Modify: `src/pages/_document.tsx`
- Modify: `src/components/layouts/meta/BaseMeta.tsx`
- Modify: `src/components/layouts/meta/OpenGraphMeta.tsx`
- Modify: `src/components/layouts/meta/TwitterCardMeta.tsx`
- Modify: `src/components/layouts/meta/Meta.tsx`
- Modify: all newly retained `next/image` usages with generic alt values
- Modify: `cypress/e2e/career-portfolio.cy.js`
- Test: `cypress/e2e/career-portfolio.cy.js`

**Interfaces:**
- `Meta` accepts `image?: string`, `title?: string`, `description?: string`, `url: string`, and creates locale-correct canonical/social metadata.
- `_document` derives `lang` from `useRouter()` through `Document.getInitialProps` or the Next.js document context locale.

- [ ] **Step 1: Write failing locale, metadata, and theme tests**

Append:

```js
it('preserves the current route when switching locale', () => {
  cy.visit('/about');
  cy.get('[data-cy="language-menu"]').click();
  cy.contains('English').click();
  cy.location('pathname').should('eq', '/about');
});

it('cycles the deliberate theme controls', () => {
  cy.visit('/');
  cy.get('#btn_theme_toggler').click();
  cy.get('html').should('have.class', 'dark');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx cypress run --spec cypress/e2e/career-portfolio.cy.js`

Expected: locale test FAILS because the current control always links to `/`.

- [ ] **Step 3: Implement locale and SEO corrections**

Set `defaultLocale` to `it` in `i18n.json`. Remove the fixed version/update badge from `_app.tsx`. Use the document context locale in `_document.tsx` to output `<Html lang={locale ?? 'it'}>`. Ensure `Meta` passes `image` to `TwitterCardMeta`, includes locale-specific canonical URLs without duplicate slashes, and sets an explicit `og:image:alt`. Replace inaccurate alt text (`studio`, `background`, empty project screenshots) with descriptive localized values or empty alt only for intentionally decorative imagery.

- [ ] **Step 4: Run full verification**

Run: `npm run lint && npm run build && npx cypress run`

Expected: all commands exit 0. Manually inspect `/`, `/about`, and `/portfolio` in both locales at 375px and 1440px; test skip link, visible focus, dark mode, and reduced motion in browser devtools.

- [ ] **Step 5: Commit release-quality refinements**

```bash
git add i18n.json src/pages/_app.tsx src/pages/_document.tsx src/components/layouts/meta src/components cypress/e2e/career-portfolio.cy.js
git commit -m "fix: complete portfolio accessibility and SEO"
```

## Final verification checklist

- [ ] Confirm `git status --short` contains only the intended redesign changes; preserve the user-owned `package-lock.json` change unless it is deliberately required by a dependency update.
- [ ] Run `npm run lint`, `npm run build`, and `npx cypress run` after the final commit.
- [ ] Check generated HTML for Italian and English title, description, canonical, Open Graph title/description/image/alt, Twitter title/description/image, and `html[lang]`.
- [ ] Verify external CV, LinkedIn, and email controls have meaningful accessible names and valid destinations.
- [ ] Review 375px, 768px, and 1440px screenshots for overflow, contrast, and keyboard focus.
