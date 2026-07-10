import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {

    private getHeader() {
        return cy.get("h6");
    }

    getDashboardHeader() {
        return this.getHeader();
    }
}