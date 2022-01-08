// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';

// Models
import { UserAccountResponseDto } from '@api/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header',
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  @Input() account: UserAccountResponseDto | undefined = undefined;
  @Input() sidenav!: MatDrawer;
}
