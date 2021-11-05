import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1>Home</h1>`
})
export class HomeComponent { }