import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header-account',
  templateUrl: './header-account.component.html'
})
export class PublicLayoutHeaderAccountComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
}
