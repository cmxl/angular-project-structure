import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule
    ],
    exports: []
})
export class LoginModule { }