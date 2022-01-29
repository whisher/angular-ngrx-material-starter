// Core
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Models
import { Theme } from '@domains/settings';

@Component({
  selector: 'iwdf-theme-picker',
  templateUrl: './theme-picker.component.html'
})
export class IwdfThemePickerComponent {
  @Input() theme!: Theme;
  @Input() themes: Theme[] = [];
  @Output() themeChange: EventEmitter<Theme> = new EventEmitter<Theme>();

  onChangeTheme(theme: Theme) {
    this.themeChange.emit(theme);
  }
}
