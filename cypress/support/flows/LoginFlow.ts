import { ENVIRONMENT } from "../../../config/config";
import { LoginPage } from "../pages/LoginPage";
import { Logger } from "../../utils/Logger";

export class LoginFlow {

    private loginPage = new LoginPage();

login(username: string, password: string): void {

    Logger.step("Opening Login Page");

    this.loginPage.open();

    Logger.step("Entering Username");

    this.loginPage.enterUsername(username);

    Logger.step("Entering Password");

    this.loginPage.enterPassword(password);

    Logger.step("Clicking Login Button");

    this.loginPage.clickLogin();

    Logger.success("Login completed");
    }

    loginAsAdmin(): void {
        this.login(ENVIRONMENT.username, ENVIRONMENT.password);
    }
}