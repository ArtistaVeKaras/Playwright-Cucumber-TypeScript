// dotenv.config.ts
import dotenv from 'dotenv';

// Prefer env-scoped files inside the `env/` folder, then fall back to repo root
dotenv.config({
  path: ['env/.env.local', 'env/.env', '.env.local', '.env'],
});