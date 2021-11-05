import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-footer',
    template: `<footer>&copy; {{year}}</footer>`
})
export class FooterComponent { 
    year = new Date().getFullYear();
}