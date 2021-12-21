// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { IwdfButtonSpinnerComponent } from './button-spinner.component';

const declarations = [IwdfButtonSpinnerComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [...declarations],
  exports: [...declarations]
})
export class IwdfButtonSpinnerModule {}
