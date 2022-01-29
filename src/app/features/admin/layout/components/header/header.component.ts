// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';

// Models
import { Language, Theme } from '@domains/settings';

// Store
import { AccountFacade } from '@domains/account';
import { SettingsFacade } from '@domains/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-header',
  templateUrl: './header.component.html'
})
export class AdminLayoutHeaderComponent {
  @Input() sidenav!: MatDrawer;
  account$ = this.accountFacade.data$;
  language$ = this.settingsFacade.language$;
  theme$ = this.settingsFacade.theme$;
  languages = ['en', 'it'] as Language[];

  themes = ['blue', 'light', 'dark'] as Theme[];
  constructor(
    private accountFacade: AccountFacade,
    private settingsFacade: SettingsFacade
  ) {}
  onChangeTheme(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }
  onUseLanguage(event: MatSelectChange) {
    this.settingsFacade.useLanguage(event.value);
  }
}
