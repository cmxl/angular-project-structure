import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-header',
    template: `
    <header>
        <nav>
            <ul>
                <li><a [routerLink]="['/']">Home</a></li>
                <li><a [routerLink]="['/login']">Login</a></li>
            </ul>
        </nav>
    </header>
    `
})
export class HeaderComponent { }