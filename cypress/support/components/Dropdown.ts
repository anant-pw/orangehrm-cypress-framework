export class Dropdown {

    constructor(private selector: string) {}

    open() {
        cy.get(this.selector).click()
    }

    select(option: string) {
        this.open()

        cy.contains('.oxd-select-dropdown div', option)
            .click()
    }

    shouldHaveValue(value: string) {
        cy.get(this.selector)
            .should('contain', value)
    }
}

export const dropdown = (selector: string) => new Dropdown(selector)