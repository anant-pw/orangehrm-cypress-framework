export class FileUpload {

    upload(selector: string, fileName: string): void {

        cy.get(selector).attachFile(fileName);

    }

}