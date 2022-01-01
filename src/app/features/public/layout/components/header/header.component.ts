// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header',
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
  @Input() sidenav!: MatDrawer;
}
