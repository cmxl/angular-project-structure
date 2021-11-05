import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'noobit-root',
  template: `
    <noobit-header></noobit-header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <noobit-footer></noobit-footer>
  `,
  styles: [`

    noobit-header {
      min-height: 50px;
      z-index: 9999;
    }

    noobit-footer {
      min-height: 100px;
      margin-top: auto;
      z-index: 9999;
    }

    .content {
      box-shadow:  12px 0 15px -4px #0f0f0f, 
                  -12px 0 15px -4px #0f0f0f;

      padding: 10px 20px;
      min-width: 480px;
      width: auto;
      max-width: 1280px;
      flex: 1;
      margin-left: auto;
      margin-right: auto;
      background: #606060;
    }
  `]
})
export class AppComponent { }
