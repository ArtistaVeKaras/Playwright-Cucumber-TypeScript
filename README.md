# Playwright-Cucumber-TypeScript

## Environment files

- This project prefers env files scoped to the `env/` folder. The loader will try these in order: `env/.env.local`, `env/.env`, then fall back to repository-root `.env.local` and `.env`.
- Use `.env.local` for machine-specific secrets (usually ignored by git) and `.env` or `.env.example` for shared/default values.

