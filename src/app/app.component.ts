import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'noobit-root',
  template: `
    <noobit-header></noobit-header>
    <router-outlet></router-outlet>
    <noobit-footer></noobit-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'dragsidropsi';
}
