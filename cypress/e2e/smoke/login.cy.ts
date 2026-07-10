import { app } from "../../core";
import { Logger } from "../../utils/Logger";

describe('Login', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Admin can login successfully', () => {
        Logger.info("Starting Login Test");

        app.login.loginAsAdmin();

        app.dashboard.verifyDashboardLoaded();
        Logger.success("Dashboard displayed");
    });

});