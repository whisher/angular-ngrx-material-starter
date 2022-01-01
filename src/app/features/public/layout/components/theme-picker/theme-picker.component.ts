import { ChangeDetectionStrategy, Component } from '@angular/core';

// Models
import { Theme } from '@api/models';

// Store
import { SettingsFacade } from '@stores/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-theme-picker',
  template: `
    <ng-container *ngIf="theme$ | ngrxPush as theme">
      <iwdf-theme-picker
        [theme]="theme"
        [themes]="themes"
        (themeChange)="onChangeTheme($event)"
      ></iwdf-theme-picker>
    </ng-container>
  `
})
export class PublicLayoutThemePickerComponent {
  theme$ = this.settingsFacade.theme$;
  themes = ['blue', 'light', 'dark'] as Theme[];
  constructor(private settingsFacade: SettingsFacade) {}
  onChangeTheme(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }
}
