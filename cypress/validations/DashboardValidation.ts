import { DashboardPage } from "../support/pages/DashboardPage";

export class DashboardValidation {

    private dashboardPage = new DashboardPage();

    verifyDashboardLoaded(): void {

        this.dashboardPage
            .getDashboardHeader()
            .should("have.text", "Dashboard");
    }
}