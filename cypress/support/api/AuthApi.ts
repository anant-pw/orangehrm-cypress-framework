import { ApiClient } from "./ApiClient";

export class AuthApi {

    constructor(private api: ApiClient) {}

    login(username: string, password: string) {

        return this.api.post(
            '/web/index.php/auth/validate',
            {
                username,
                password
            }
        );
    }
}