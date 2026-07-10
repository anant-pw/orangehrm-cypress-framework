import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly selectors = {
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'button[type="submit"]'
    };

    private username() {
        return cy.get(this.selectors.username);
    }

    private password() {
        return cy.get(this.selectors.password);
    }

    private loginButton() {
        return cy.get(this.selectors.loginButton);
    }

    open(): void {
        this.visit("/");
    }

    enterUsername(username: string): void {
        this.type(this.username(), username);
    }

    enterPassword(password: string): void {
        this.type(this.password(), password);
    }

    clickLogin(): void {
        this.click(this.loginButton());
    }
}