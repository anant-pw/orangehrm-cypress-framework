export class Logger {

    static info(message: string): void {
        cy.log(message);
    }

    static step(message: string): void {
        cy.log(`STEP: ${message}`);
    }

    static success(message: string): void {
        cy.log(`SUCCESS: ${message}`);
    }

    static error(message: string): void {
        cy.log(`ERROR: ${message}`);
    }
}