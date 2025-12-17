<!-- Copilot instructions for contributors and AI agents. Keep concise and actionable. -->
# Copilot / AI Agent Instructions

Purpose: Help an AI coding agent become productive quickly in this repo (Playwright + Cucumber + TypeScript).

- **Big picture**: This repo contains two complementary test styles:
  - Playwright Test runner tests in the `tests/` directory (configured by `playwright.config.ts`).
  - BDD-style Cucumber feature tests under `src/features/` driven by `cucumber-js` with TypeScript step definitions in `src/step-definitions/`.

- **Where to look first**:
  - Project scripts: `package.json` — main entry points and CI commands (`npm test`, `npm run cucumberWithTS`, `precucumber`).
  - Playwright config: `playwright.config.ts` — `testDir`, reporter, and projects (chromium/firefox/webkit).
  - Cucumber features: `src/features/*.feature` and step definitions `src/step-definitions/` (including `hooks/` and `world/`).
  - CI workflow: `.github/workflows/playwright.yml` — shows CI installs and runs `npm run cucumberWithTS`.

- **Key commands (use these in suggestions or when editing CI/dev docs)**:
  - Run Playwright tests (chromium): `npm test` (alias runs `npx playwright test --project=chromium`).
  - Run Cucumber features with TypeScript: `npm run cucumberWithTS` (uses `--require-module ts-node/register` and a `--require` glob for step-definitions).
  - Prepare reports: `npm run precucumber` (clears `reports/` then recreates it).
  - CI installs browsers: `npx playwright install --with-deps` (must be present in CI steps when suggesting changes).

- **Project-specific patterns & conventions**:
  - Step definitions are TypeScript and loaded via `ts-node/register` (see `cucumberWithTS` script).
  - Shared test state: `src/step-definitions/world/CucumberWorld.ts` — use this World class for storing scenario-level state (baseUrl, user data).
  - Browser fixtures/hooks: `src/step-definitions/hooks/` — `browserContextFixture.ts` exposes `page` and `context`; `hooks.ts` handles Before/After and reads env from `env/.env`.
  - Timeouts and utilities: `src/utils/playwright-timeouts.ts` and `src/utils/cucumber-timeout.ts` centralize timeout settings — update these for global timeout changes.
  - Logging: `logger/logger.ts` provides the Winston logger used in hooks and step-definitions.

- **Integration points to be careful with**:
  - Cucumber runs rely on the `--require` glob in `package.json` (`src/step-definitions/**/**/*.ts`) — keep glob patterns accurate when moving files.
  - Hooks load environment variables from `env/.env`; changes to config should preserve backwards compatibility or update `hooks.ts` accordingly.
  - CI expects Playwright browsers installed; any CI edits should keep the `npx playwright install --with-deps` step.

- **When editing tests or scaffolding new steps**:
  - Add new features under `src/features/` and create matching step files in `src/step-definitions/` following the existing folder hierarchy.
  - If you need browser access in steps, use `pageFixture` from `src/step-definitions/hooks/browserContextFixture.ts` rather than creating new contexts directly.
  - Use `CucumberWorld` for passing small amounts of cross-step state instead of globals.

- **Files worth reading for context**:
  - `package.json` (scripts and dependencies)
  - `playwright.config.ts` (test runner behavior)
  - `src/step-definitions/hooks/hooks.ts` (browser lifecycle and env loading)
  - `src/step-definitions/world/CucumberWorld.ts` (shared world/state)
  - `src/utils/*` (timeouts and helpers)
  - `.github/workflows/playwright.yml` (CI run commands)

If anything here is unclear or you want the agent to follow a different convention (naming, tag strategy, or runner of choice), tell me which part to update.
