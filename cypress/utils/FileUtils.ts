export class FileUtils {

    static verifyDownloaded(fileName: string): void {

        cy.readFile(
            `cypress/downloads/${fileName}`,
            { timeout: 15000 }
        ).should('exist');

    }

}