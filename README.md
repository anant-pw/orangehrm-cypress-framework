# Cypress + TypeScript Automation Framework

A Cypress + TypeScript UI automation framework for the OrangeHRM demo app, using the Page Object Model with a thin `Application` access layer and separated Page/Validation classes.

---

## Tech Stack

- Cypress 15 + TypeScript
- Allure reporting (`@shelex/cypress-allure-plugin`)
- `cypress-parallel` for parallel spec execution
- MySQL (`mysql2`) via `cy.task`
- GitHub Actions

---

## What's Actually Implemented

- Page Object Model: `BasePage` → `LoginPage`, `DashboardPage`
- Business-flow layer: `LoginFlow` (wraps `LoginPage`)
- Assertions kept out of page objects, in a separate `Validations` layer (`DashboardValidation`)
- Central `app` singleton (`cypress/core/index.ts`) as the single entry point into flows/validations
- Per-environment config (`dev`, `qa`, `uat`, `production`) selected via `process.env.ENV`
- MySQL query support wired through `cy.task("queryDatabase")` → `cypress/tasks/db.ts`
- Allure reporting and `cypress-parallel` configured and runnable
- GitHub Actions workflow running the smoke suite on push/PR

**Test coverage today: 2 specs** — login success and dashboard header load. Everything above is proven only against those two flows.

---

## Project Structure

```
.
├── cypress
│   ├── e2e/smoke              # login.cy.ts, dashboard.cy.ts
│   ├── core                   # Application.ts (entry point), index.ts (app singleton)
│   ├── fixtures
│   ├── support
│   │   ├── pages               # BasePage, LoginPage, DashboardPage
│   │   ├── flows                # LoginFlow
│   │   ├── components           # Table, Dropdown, Modal, DatePicker, FileUpload
│   │   ├── api                  # ApiClient, ApiManager, AuthApi
│   │   ├── factories             # EmployeeFactory, EmployeeBuilder
│   │   └── managers              # ApplicationManager (not currently used by any spec)
│   ├── validations              # DashboardValidation
│   ├── utils                    # Database, FileUtils, Logger
│   └── tasks                    # db.ts (MySQL query executor)
├── config                       # config.ts, environment.ts, environments/{dev,qa,uat,production}.ts
├── .github/workflows/cypress.yml
├── cypress.config.ts
├── package.json
└── tsconfig.json
```

---

## Installation

```bash
npm install
npx cypress install
```

## Running Tests

```bash
npx cypress open                 # interactive
npx cypress run                  # all specs
npm run smoke                    # cypress/e2e/smoke/**/*.cy.ts (the only suite that exists)
npm run parallel                 # smoke suite via cypress-parallel, 2 threads
npx cypress run --browser chrome # or firefox / edge
```

## Environment Configuration

```bash
ENV=qa npx cypress run
```

Environments live in `config/environments/*.ts` and are selected in `config/config.ts` via `process.env.ENV` (defaults to `qa`).

---

## Writing a Test

```typescript
import { app } from "../../core";

describe("Login", () => {
  beforeEach(() => cy.visit("/"));

  it("Admin can login successfully", () => {
    app.login.loginAsAdmin();
    app.dashboard.verifyDashboardLoaded();
  });
});
```

Tests call only `app.<flow>.<method>()` — no direct page-object instantiation, no assertions inside flows.

---

## Architecture

```
Spec
  │
  ▼
app (Application singleton)
  │
  ▼
Flow / Validation classes
  │
  ▼
Page Objects (extend BasePage)
  │
  ▼
Cypress commands
  │
  ▼
OrangeHRM demo app
```

Rules:
- Page objects hold locators + actions only, no assertions.
- Assertions live in `Validations` classes.
- Tests read as business flow (`app.login.loginAsAdmin()`), not raw Cypress calls.

---

## Database Queries

```typescript
Database.query("SELECT * FROM hs_hr_employee");
```

Executes via `cy.task("queryDatabase")`, configured in `cypress.config.ts`, implemented in `cypress/tasks/db.ts`. Not currently called from any spec — verified working at the plumbing level only.

---

## Reporting

```bash
npm run allure:generate
npm run allure:open
```

---

## CI

`.github/workflows/cypress.yml` runs on push to `main` and on PRs: checkout → install → `cypress install` → `npm run smoke`. No regression job, no Docker step, no artifact upload configured yet.

---

## Built But Not Yet Wired Into Any Test

These exist in the codebase and are implemented, but no spec currently exercises them. Treat as scaffolding, not proven functionality:

- `EmployeeListPage`, `EmployeePage` (page objects for employee list/detail screens)
- `EmployeeFactory`, `EmployeeBuilder` (test data generation)
- `Table`, `Dropdown`, `Modal`, `DatePicker`, `FileUpload` (reusable UI components)
- `ApiClient`, `ApiManager`, `AuthApi` (API-layer request helpers)
- `ApplicationManager` (a second, unused access-point pattern — superseded by `core/Application.ts`; should be deleted or merged, not left as a parallel path)

## Not Present

- Regression suite (`cypress/e2e/regression` referenced in `package.json` scripts but does not exist)
- Docker / docker-compose
- Jenkins pipeline
- Cross-browser CI matrix (Chrome/Firefox/Edge scripts exist locally but CI only runs default Electron/Chrome)

---

## Adding a New Page

1. Create a page object extending `BasePage` under `cypress/support/pages`.
2. Add a `Flow` or `Validation` class that uses it.
3. Register the flow/validation on `Application` (`cypress/core/Application.ts`).
4. Access it via `app.<name>.<method>()`.
