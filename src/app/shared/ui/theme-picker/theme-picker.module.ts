// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfThemePickerComponent } from './theme-picker.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    IwdfFortawesomeModule
  ],
  declarations: [IwdfThemePickerComponent],
  exports: [IwdfThemePickerComponent]
})
export class IwdfThemePickerModule {}
