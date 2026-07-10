export abstract class BasePage {

    protected click(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
        element.click();
    }

    protected type(
        element: Cypress.Chainable<JQuery<HTMLElement>>,
        value: string
    ): void {
        element.clear().type(value);
    }

    protected shouldBeVisible(
        element: Cypress.Chainable<JQuery<HTMLElement>>
    ): void {
        element.should("be.visible");
    }

    protected visit(path: string): void {
        cy.visit(path);
    }
}