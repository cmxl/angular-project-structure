import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-header',
    template: `
    <header>
        <noobit-navbar></noobit-navbar>
    </header>
    `
})
export class HeaderComponent { }