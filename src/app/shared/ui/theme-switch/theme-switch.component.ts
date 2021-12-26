// Core
import { Component, OnInit } from '@angular/core';

// Models
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

// Provider
import { IwdfThemeSwitchService } from './theme-switch.service';

@Component({
  selector: 'iwdf-theme-switch',
  templateUrl: './theme-switch.component.html',
  providers: [IwdfThemeSwitchService]
})
export class IwdfThemeSwitchComponent implements OnInit {
  isChecked = false;
  constructor(private themeSwitchService: IwdfThemeSwitchService) {}

  ngOnInit(): void {
    console.log('pippo');
  }
  onToggle(event: MatSlideToggleChange) {
    console.log('pippo');
    this.isChecked = event.checked;
    this.themeSwitchService.toggleDarkTheme();
  }
}
