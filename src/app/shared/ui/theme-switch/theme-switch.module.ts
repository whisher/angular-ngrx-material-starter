// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { IwdfThemeSwitchComponent } from './theme-switch.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  declarations: [IwdfThemeSwitchComponent],
  exports: [IwdfThemeSwitchComponent]
})
export class IwdfThemeSwitchModule {}
