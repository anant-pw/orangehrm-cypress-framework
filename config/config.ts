import { qa } from "./environments/qa";
import { dev } from "./environments/dev";
import { uat } from "./environments/uat";
import { production } from "./environments/production";

const environments = {
    dev,
    qa,
    uat,
    production
};

const selectedEnvironment =
    (process.env.ENV as keyof typeof environments) || "qa";

export const ENVIRONMENT =
    environments[selectedEnvironment];