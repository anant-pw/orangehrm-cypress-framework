import { defineConfig } from "cypress";

import { ENVIRONMENT } from "./config/config";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import { executeQuery } from "./cypress/tasks/db";

export default defineConfig({
  e2e: {
    baseUrl: ENVIRONMENT.baseUrl,

    supportFile: "cypress/support/e2e.ts",

    fixturesFolder: "cypress/fixtures",

    downloadsFolder: "cypress/downloads",

    viewportWidth: 1366,

    viewportHeight: 768,

    screenshotOnRunFailure: true,

    video: true,

    retries: {
      runMode: 2,
      openMode: 0
    },

    env: {
       allure: true
    },

    setupNodeEvents(on, config) {
       on("task", {

        queryDatabase({ dbConfig, query }) {
            return executeQuery(dbConfig, query);
        }

    });
      allureWriter(on, config);
      return config;
    }
  }
});