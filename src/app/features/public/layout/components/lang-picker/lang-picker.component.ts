// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Material
import { MatSelectChange } from '@angular/material/select';

// Models
import { Language } from '@domains/settings';

// Store
import { SettingsFacade } from '@domains/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-lang-picker',
  template: `
    <ng-container *ngIf="language$ | ngrxPush as language">
      <mat-select
        class="text-lg text-current md:text-white"
        [ngModel]="language"
        (selectionChange)="onUseLanguage($event)"
      >
        <mat-option *ngFor="let lang of languages" [value]="lang">
          <span class="text-lg">
            {{ lang.toUpperCase() }}
          </span>
        </mat-option>
      </mat-select>
    </ng-container>
  `
})
export class PublicLayoutLangPickerComponent {
  language$ = this.settingsFacade.language$;
  languages = ['en', 'it'] as Language[];

  constructor(private settingsFacade: SettingsFacade) {}
  onUseLanguage(event: MatSelectChange) {
    this.settingsFacade.useLanguage(event.value);
  }
}
