export class DatePicker {

    constructor(private selector: string) {}

    open() {
        cy.get(this.selector).click()
    }

    selectDay(day: number) {
        this.open()

        cy.contains('.oxd-calendar-date', day.toString())
            .click()
    }

    clear() {
        cy.get(this.selector)
            .clear()
    }

    type(date: string) {
        cy.get(this.selector)
            .clear()
            .type(date)
    }

    shouldHaveValue(date: string) {
        cy.get(this.selector)
            .should('have.value', date)
    }
}

export const datePicker = (selector: string) => new DatePicker(selector)