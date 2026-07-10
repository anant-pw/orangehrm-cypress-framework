import { ApiManager } from "../api/ApiManager";
import { FileUpload } from "../components/FileUpload";

export class ApplicationManager {

    readonly api = new ApiManager();
    readonly fileUpload = new FileUpload();
    // existing modules...
    // login
    // dashboard
    // admin
}