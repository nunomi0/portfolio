# YUKYUN LEE Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the approved React portfolio at `https://nunomi0.github.io/portfolio/` with a small 40 × 40 px profile photo and the complete source-backed portfolio content.

**Architecture:** A Vite React/TypeScript single page reads typed local records and imported approved images. Focused components handle factual sections, tooltips, the project dialog, and theme selection; one stylesheet follows the frozen visual mockup. Verification is intentionally limited to one content smoke suite, one interaction smoke suite, a production build, one desktop/mobile browser pass, and the live Pages check.

**Tech Stack:** React, TypeScript, Vite, Vitest, React Testing Library, Playwright, CSS, GitHub Actions, GitHub Pages.

**Sources:**
- `docs/superpowers/specs/2026-08-10-portfolio-site-design.md`
- `docs/superpowers/specs/reference/portfolio-approved-mockup.html`
- `docs/superpowers/specs/reference/assets/`

---

## Chunk 1: Build the Portfolio

### Task 1: Scaffold React and add the content smoke test

**Files:**
- Create: `package.json`, `package-lock.json`, `.gitignore`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vite.config.ts`, `index.html`
- Create: `src/vite-env.d.ts`, `src/main.tsx`, `src/App.tsx`, `src/test/setup.ts`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Create the Vite/React/TypeScript test setup**

Use React 19, Vite 8, TypeScript, Vitest, React Testing Library, jsdom, and Playwright. Set Vite `base: '/portfolio/'`, Vitest environment `jsdom`, `<html lang="ko">`, and title `YUKYUN LEE`. Add `src/vite-env.d.ts` containing `/// <reference types="vite/client" />` so image imports type-check. Add scripts `dev`, `build`, `preview`, `test`, `test:run`, and `test:e2e`. Ignore `node_modules`, `dist`, coverage/browser artifacts, `.superpowers`, and `.DS_Store`.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: lockfile created; exit 0.

- [ ] **Step 3: Write one failing content smoke test**

The single App suite must check only the high-value contract:
- H1 `YUKYUN LEE` and profile alt text;
- headings in order: Tech Stack, Experience, Education & Training, Certificates, Awards & Competitions, Portfolio;
- 6 education entries, SQLD/OPIc IH/TOPCIT only, 9 awards, and 7 projects;
- each project stack is visible before opening;
- no `SEOUL`, intro paragraph, employment-status line, `정보처리기사`, `AWS SAA`, or `준비중`.

- [ ] **Step 4: Run RED**

Run: `npm run test:run -- src/App.test.tsx`

Expected: FAIL because the complete page is not implemented.

### Task 2: Add exact records, approved assets, and factual sections

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/assets/profile.png`, `src/assets/projects/*.webp`
- Create: `src/components/Header.tsx`, `InfoSection.tsx`, `TechStack.tsx`, `Credentials.tsx`, `Awards.tsx`, `Portfolio.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Copy approved assets without re-encoding**

```bash
mkdir -p src/assets/projects
cp docs/superpowers/specs/reference/assets/profile-photo-crop.png src/assets/profile.png
cp docs/superpowers/specs/reference/assets/project-*.webp src/assets/projects/
cmp docs/superpowers/specs/reference/assets/profile-photo-crop.png src/assets/profile.png
```

Expected: `cmp` exits 0.

- [ ] **Step 2: Add typed source-backed records**

Create types and arrays for Tech Stack, Experience, Education, Certificates, Awards, and Projects. Copy every string, date, stack, metadata row, work item, link, image dimension, and alt text exactly from the approved design spec; do not paraphrase. Certificates are SQLD, OPIc IH, and TOPCIT with exact date tooltips. Awards have no tooltip field. Import every image from TypeScript so Vite creates base-aware URLs and project detail images cannot depend on root-relative paths. Preserve project display order Koala, Mongkids, ThorVG, CookAssistant, SmartGlasses, STEP, ONDUE and original project numbers.

- [ ] **Step 3: Render the factual page**

Compose the sections in the approved order. `Header` renders the approved crop in a 40 × 40 CSS frame with intrinsic `1254 × 1254` attributes. Education shows all descriptions directly and has no tooltip. Portfolio is last and every row shows name, summary, date, and technology stack.

- [ ] **Step 4: Run GREEN and build**

Run: `npm run test:run -- src/App.test.tsx && npm run build`

Expected: content smoke suite passes; production build exits 0.

- [ ] **Step 5: Commit foundation and content**

```bash
git add .gitignore package.json package-lock.json tsconfig*.json vite.config.ts index.html src
git commit -m "feat: build portfolio content"
```

### Task 3: Add tooltip, modal, theme, and approved visual behavior

**Files:**
- Create: `src/components/TooltipItem.tsx`, `ProjectDialog.tsx`, `ThemeDock.tsx`
- Create: `src/hooks/useTheme.ts`
- Create: `src/styles.css`
- Modify: `src/components/TechStack.tsx`, `InfoSection.tsx`, `Credentials.tsx`, `Awards.tsx`, `Portfolio.tsx`
- Modify: `src/App.tsx`, `src/main.tsx`
- Test: `src/interactions.test.tsx`
- Create: `playwright.config.ts`, `tests/portfolio.spec.ts`

- [ ] **Step 1: Write one failing interaction smoke suite**

Keep it compact. Test only:
- one Tech/Certificate tooltip opens on hover/focus and closes on Escape/outside press;
- Education and Awards have no tooltip;
- first visit is dark, theme buttons switch/persist, and exactly one has `aria-pressed="true"`;
- clicking Koala opens a labeled dialog with technology first and 3 related images;
- close button/Escape close it and focus returns to Koala;
- body scroll is unlocked after close.

- [ ] **Step 2: Run RED**

Run: `npm run test:run -- src/interactions.test.tsx`

Expected: FAIL because interactions are not implemented.

- [ ] **Step 3: Implement grouped tooltips**

Use controlled tooltip state for Tech Stack, Experience, and Certificates only. Show inactive tooltip elements with `hidden`; use `aria-describedby` only while open. Support fine-pointer hover, keyboard focus/Escape, coarse-pointer tap toggle, and outside dismissal. Scope fade/blur only to siblings in the same group. Render Awards and Education without tooltip triggers.

- [ ] **Step 4: Implement theme dock**

Default to dark when storage is absent/invalid/inaccessible. Persist `system`, `light`, or `dark`; system reacts to `prefers-color-scheme`. Render the GitHub link plus three Korean-labeled theme buttons with exactly one pressed state, fixed above the bottom fade.

- [ ] **Step 5: Implement project dialog**

Use a native portaled `<dialog aria-labelledby="project-dialog-title" aria-describedby="project-dialog-summary">`. The left pane contains only mapped project images; the right pane shows project number/title, technology first, metadata, exact summary, work items, and link. Lock body scroll while open, close by button/Escape/backdrop, and restore opener focus.

- [ ] **Step 6: Port the approved CSS**

Port the frozen mockup's layout/tokens/spacing/motion/dialog/bottom fade/dock. Apply the latest photo rule `.portrait { width: 40px; height: 40px; }` on desktop and mobile, no yellow backing, dark initial theme, responsive modal stacking at 680 px, no horizontal overflow at 320 px, and reduced-motion handling.

- [ ] **Step 7: Run interaction GREEN**

Run: `npm run test:run && npm run build`

Expected: both compact suites pass; build exits 0.

- [ ] **Step 8: Run one desktop/mobile browser smoke pass**

Playwright uses the production preview at `/portfolio/` with 1470 × 860 and 390 × 844 viewports. Check no console errors, photo box 40 × 40, no horizontal overflow, theme switch, and one project dialog/image load. Do not add screenshot baselines or exhaustive per-item browser cases.

Run: `npx playwright install chromium && npm run test:e2e`

Expected: desktop and mobile smoke tests pass.

- [ ] **Step 9: Commit interactions and styling**

```bash
git add src playwright.config.ts tests
git commit -m "feat: add portfolio interactions and styling"
```

## Chunk 2: Deploy to GitHub Pages

### Task 4: Configure, publish, and verify Pages

**Files:**
- Create: `.github/workflows/deploy-pages.yml`

- [ ] **Step 1: Add the official Pages workflow**

Trigger on `main` push and manual dispatch. Use Node 22, `npm ci`, `npm run test:run`, `npm run build`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4` with `dist`, and `actions/deploy-pages@v4`. Set `contents: read`, `pages: write`, `id-token: write`, and the `github-pages` environment.

- [ ] **Step 2: Run final local checks**

Run:

```bash
npm run test:run
npm run build
npm run test:e2e
git diff --check
```

Expected: all exit 0; `dist/index.html` uses `/portfolio/` asset URLs.

- [ ] **Step 3: Enable workflow publishing before the first push**

Check `gh api repos/nunomi0/portfolio/pages`. If absent, create it with `build_type=workflow`; if present with another build type, update it to `workflow`.

- [ ] **Step 4: Commit and push**

```bash
git add .github/workflows/deploy-pages.yml
git commit -m "ci: deploy portfolio to github pages"
git push origin main
```

- [ ] **Step 5: Monitor the deployment**

Watch the `deploy-pages.yml` run until success. If GitHub did not start it after Pages creation, dispatch it once with `gh workflow run deploy-pages.yml` and watch that run.

- [ ] **Step 6: Verify the public site**

Open `https://nunomi0.github.io/portfolio/` and check HTTP 200, no console errors, the 40 × 40 photo, section content, one theme switch, and one project dialog. Report the live URL only after this succeeds.
