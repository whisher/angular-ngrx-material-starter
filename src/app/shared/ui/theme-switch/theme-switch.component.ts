// Core
import { Component /*, Input */ } from '@angular/core';

// Models
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

// Provider
import { IwdfThemeSwitchService } from './theme-switch.service';

@Component({
  selector: 'iwdf-theme-switch',
  templateUrl: './theme-switch.component.html',
  providers: [IwdfThemeSwitchService]
})
export class IwdfThemeSwitchComponent {
  //@Input() theme!: string;
  isChecked = this.themeSwitchService.getIsDark();
  constructor(private themeSwitchService: IwdfThemeSwitchService) {}

  onToggle(event: MatSlideToggleChange) {
    this.isChecked = event.checked;
    this.themeSwitchService.toggleTheme();
  }
}
