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

const declarations = [IwdfThemePickerComponent];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    IwdfFortawesomeModule
  ],
  declarations,
  exports: [...declarations]
})
export class IwdfThemePickerModule {}
