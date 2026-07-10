export class Table {

    constructor(private selector: string) {}

    getRows() {
        return cy.get(`${this.selector} tbody tr`)
    }

    getRow(row: number) {
        return this.getRows().eq(row)
    }

    getCell(row: number, column: number) {
        return this.getRow(row).find('td').eq(column)
    }

    clickCell(row: number, column: number) {
        this.getCell(row, column).click()
    }

    findRowByText(text: string) {
        return this.getRows().contains('td', text).parent()
    }
}

export const table = (selector: string) => new Table(selector)