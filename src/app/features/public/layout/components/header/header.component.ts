import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';

// Store
import { SettingsFacade } from '@stores/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header',
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
  @Input() sidenav!: MatDrawer;
  language$ = this.settingsFacade.language$;
  theme$ = this.settingsFacade.theme$;
  languages = ['en', 'it'];
  themes = ['light', 'dark'];
  constructor(private settingsFacade: SettingsFacade) {}
  onUseLanguage(event: MatSelectChange) {
    this.settingsFacade.useLanguage(event.value);
  }
}
