import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header',
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
  @Input() sidenav!: MatDrawer;
  languages = ['en', 'it'];
  onUseLanguage(event: MatSelectChange) {
    console.log(event.value);
  }
}
