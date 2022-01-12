// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Stores
import { AccountFacade } from '@stores/account';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-main',
  templateUrl: './main.component.html'
})
export class PublicLayoutMainComponent {
  account$ = this.accountFacade.data$;
  constructor(private accountFacade: AccountFacade) {}
}
