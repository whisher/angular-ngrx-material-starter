// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';

// Models
import { Language, Theme } from '@api/models';

// Store
import { SettingsFacade } from '@stores/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-header',
  templateUrl: './header.component.html'
})
export class AdminLayoutHeaderComponent {
  @Input() sidenav!: MatDrawer;
  language$ = this.settingsFacade.language$;
  theme$ = this.settingsFacade.theme$;
  languages = ['en', 'it'] as Language[];

  themes = ['blue', 'light', 'dark'] as Theme[];
  constructor(private settingsFacade: SettingsFacade) {}
  onChangeTheme(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }
  onUseLanguage(event: MatSelectChange) {
    console.log(event.value);
    this.settingsFacade.useLanguage(event.value);
  }
}
