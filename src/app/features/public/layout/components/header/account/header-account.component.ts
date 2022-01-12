// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Models
import { UserAccountResponseDto } from '@api/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header-account',
  templateUrl: './header-account.component.html'
})
export class PublicLayoutHeaderAccountComponent {
  @Input() account: UserAccountResponseDto | undefined = undefined;
}
