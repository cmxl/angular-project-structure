import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'noobit-root',
  template: `
    <noobit-header></noobit-header>
    <section class="section">
      <router-outlet></router-outlet>
    </section>
    <noobit-footer></noobit-footer>
  `,
  styles: [`
    .section {
      flex: 1;
    }
  `]
})
export class AppComponent { }
