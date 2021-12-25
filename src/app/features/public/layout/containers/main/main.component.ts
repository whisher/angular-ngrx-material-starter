// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Stores
import { AuthFacade } from '@stores/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-main',
  templateUrl: './main.component.html'
})
export class PublicLayoutMainComponent {
  isAuthenticated$ = this.authFacade.isAuthenticated$;
  constructor(private authFacade: AuthFacade) {}
}
