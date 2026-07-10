import { ApiClient } from "./ApiClient";
import { AuthApi } from "./AuthApi";

export class ApiManager {

    private client = new ApiClient();

    readonly auth = new AuthApi(this.client);

    get(url: string, headers = {}) {
        return this.client.get(url, headers);
    }

    post(url: string, body: any, headers = {}) {
        return this.client.post(url, body, headers);
    }

    put(url: string, body: any, headers = {}) {
        return this.client.put(url, body, headers);
    }

    delete(url: string, headers = {}) {
        return this.client.delete(url, headers);
    }
}