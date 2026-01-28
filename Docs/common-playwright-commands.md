# Common Playwright Commands

## Run tests in headed mode

```bash
npx playwright test --headed
```

## Run tests in headless mode

```bash
npx playwright test 
```

## Run specific test file

```bash
npx playwright test tests/example-1.spec.ts
```

## Run tests with trace viewer

```bash
npx playwright test --headed --trace on
```

## Run cucumber test with the index file by adding a specific flag e.g regression

```bash
npm run cucumber regression
```
