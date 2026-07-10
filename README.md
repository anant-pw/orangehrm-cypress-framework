# Enterprise Cypress + TypeScript Automation Framework

An enterprise-grade UI automation framework built using **Cypress** and **TypeScript** following the **Page Object Model (POM)** with a centralized **ApplicationManager** architecture.

---

# Tech Stack

- Cypress
- TypeScript
- Page Object Model (POM)
- ApplicationManager
- Allure Reports
- MySQL (via `cy.task`)
- Git
- GitHub Actions
- Jenkins
- Docker

---

# Features

- Page Object Model
- Centralized ApplicationManager
- Reusable UI Components
- Environment-based execution
- Smoke & Regression suites
- Test Data Builders
- Factories
- Fixtures
- Custom Commands
- Hooks
- MySQL Integration
- File Upload & Download Utilities
- Allure Reporting
- Parallel Execution
- Cross Browser Execution
- Docker Support
- GitHub Actions
- Jenkins Pipeline

---

# Project Structure

```
.
├── cypress
│   ├── e2e
│   │   ├── smoke
│   │   └── regression
│   │
│   ├── fixtures
│   │
│   ├── support
│   │   ├── builders
│   │   ├── components
│   │   ├── database
│   │   ├── factories
│   │   ├── managers
│   │   ├── pages
│   │   ├── utils
│   │   └── validations
│   │
│   ├── downloads
│   ├── screenshots
│   └── videos
│
├── config
├── Dockerfile
├── docker-compose.yml
├── cypress.config.ts
├── package.json
└── tsconfig.json
```

---

# Framework Architecture

```
Spec File
     │
     ▼
ApplicationManager
     │
     ▼
Page Objects
     │
     ▼
Reusable Components
     │
     ▼
Cypress Commands
     │
     ▼
Application
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Install Cypress

```bash
npx cypress install
```

---

# Running Tests

## Open Cypress

```bash
npx cypress open
```

## Run All Tests

```bash
npx cypress run
```

## Run Smoke Suite

```bash
npx cypress run --spec "cypress/e2e/smoke/**/*.cy.ts"
```

## Run Regression Suite

```bash
npx cypress run --spec "cypress/e2e/regression/**/*.cy.ts"
```

## Run Specific Test

```bash
npx cypress run --spec "cypress/e2e/smoke/login.cy.ts"
```

---

# Cross Browser Execution

Chrome

```bash
npx cypress run --browser chrome
```

Firefox

```bash
npx cypress run --browser firefox
```

Edge

```bash
npx cypress run --browser edge
```

---

# Parallel Execution

```bash
npm run parallel
```

---

# Environment Configuration

Example:

```
config/
    qa.json
    stage.json
    prod.json
```

Run using

```bash
npx cypress run --env config=qa
```

---

# Writing a Test

Example

```typescript
describe("Login", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("Login as Admin", () => {

        app.login.loginAsAdmin();

    });

});
```

Tests should contain only business flow.

---

# ApplicationManager

Access all pages through the ApplicationManager.

Example

```typescript
app.login.loginAsAdmin();

app.dashboard.verifyDashboard();

app.user.addUser();
```

Avoid creating page objects manually.

---

# Page Objects

Responsibilities

- Locators
- User actions

Example

```typescript
login(username, password)

logout()

clickLogin()
```

Do **not** place assertions inside page objects.

---

# Validations

Store assertions separately.

Example

```typescript
loginValidation.verifyLoginSuccess();

dashboardValidation.verifyDashboard();
```

---

# Reusable Components

The framework contains reusable components for commonly used UI controls.

- Table
- Dropdown
- Modal
- DatePicker
- FileUpload

Example

```typescript
dropdown.select("Admin");

table.selectRow(2);
```

---

# Test Data Management

## Fixtures

Static JSON data

```typescript
cy.fixture("login");
```

---

## Builders

Create custom objects.

```typescript
UserBuilder()
    .withName("John")
    .withRole("Admin")
    .build();
```

---

## Factories

Generate predefined objects.

```typescript
UserFactory.admin();

UserFactory.employee();
```

---

# Database Support

Database operations are executed using `cy.task()`.

Example

```typescript
cy.task("executeQuery", query);

cy.task("insertUser", user);
```

---

# File Upload

Example

```typescript
uploadFile();
```

---

# File Download Verification

Example

```typescript
verifyDownloadedFile();
```

---

# Reporting

Execute tests

```bash
npx cypress run
```

Generate report

```bash
npm run allure:generate
```

Open report

```bash
npm run allure:open
```

---

# Docker

Build image

```bash
docker build -t orangehrm-cypress .
```

Run container

```bash
docker run --rm orangehrm-cypress
```

Using Docker Compose

```bash
docker compose up
```

---

# Git Workflow

```bash
git add .

git commit -m "message"

git push
```

---

# CI/CD

## GitHub Actions

Pipeline

```
Checkout

↓

Install Dependencies

↓

Run Cypress Tests

↓

Generate Allure Report

↓

Upload Artifacts
```

## Jenkins

Pipeline

```
Checkout

↓

Install Dependencies

↓

Run Cypress

↓

Generate Allure Report

↓

Archive Reports
```

---

# Adding a New Page

1. Create a Page Object.
2. Add locators.
3. Add page methods.
4. Register the page in `ApplicationManager`.
5. Access it using:

```typescript
app.newPage.someMethod();
```

---

# Adding a New Test

1. Create a new spec under:

```
cypress/e2e/smoke
```

or

```
cypress/e2e/regression
```

2. Implement business flow.

```typescript
app.login.loginAsAdmin();

app.user.addUser();
```

3. Validate expected results.

---

# Best Practices

- Keep tests readable.
- Store actions inside page objects.
- Store assertions inside validation classes.
- Reuse common UI components.
- Avoid duplicate locators.
- Use builders and factories for test data.
- Keep tests independent.
- Use environment-specific configuration.
- Use `cy.session()` for faster authenticated tests.

---

# Framework Flow

```
Spec
   │
   ▼
ApplicationManager
   │
   ▼
Page Objects
   │
   ▼
Reusable Components
   │
   ▼
Cypress
   │
   ▼
Application
```

---

# Author

Enterprise Cypress + TypeScript Automation Framework
