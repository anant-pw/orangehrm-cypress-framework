export class ApiClient {

    get(url: string, headers = {}) {
        return cy.request({
            method: 'GET',
            url,
            headers
        });
    }

    post(url: string, body: any, headers = {}) {
        return cy.request({
            method: 'POST',
            url,
            body,
            headers
        });
    }

    put(url: string, body: any, headers = {}) {
        return cy.request({
            method: 'PUT',
            url,
            body,
            headers
        });
    }

    delete(url: string, headers = {}) {
        return cy.request({
            method: 'DELETE',
            url,
            headers
        });
    }
}