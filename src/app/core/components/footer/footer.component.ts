import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-footer',
    template: `<footer>NooBIT &copy; {{year}}</footer>`,
    styles: [`
        footer{
            text-align: center;
            padding: 100px 0;
            background-color: #303030;
        }
    `]
})
export class FooterComponent { 
    year = new Date().getFullYear();
}