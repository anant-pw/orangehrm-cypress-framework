import { LoginFlow } from "../support/flows/LoginFlow";
import { FileUpload } from "../support/components/FileUpload";
import { DashboardValidation } from "../validations/DashboardValidation";

export class Application {

    readonly login = new LoginFlow();

    readonly dashboard = new DashboardValidation();

    readonly fileUpload = new FileUpload();

}