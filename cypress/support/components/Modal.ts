export class Modal {

    constructor(private selector: string) {}

    get() {
        return cy.get(this.selector)
    }

    shouldBeVisible() {
        this.get().should('be.visible')
    }

    shouldNotExist() {
        this.get().should('not.exist')
    }

    close() {
        this.get()
            .find('.oxd-dialog-close-button')
            .click()
    }

    clickButton(buttonText: string) {
        this.get()
            .contains('button', buttonText)
            .click()
    }
}

export const modal = (selector: string) => new Modal(selector)