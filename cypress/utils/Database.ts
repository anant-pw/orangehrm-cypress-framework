export class Database {

    static query(query: string) {

        return cy.task("queryDatabase", {

            dbConfig: Cypress.env("db"),

            query

        });

    }

}