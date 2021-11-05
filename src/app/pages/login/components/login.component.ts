import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1>Login</h1>`
})
export class LoginComponent { }