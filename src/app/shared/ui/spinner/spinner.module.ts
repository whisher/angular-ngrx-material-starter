// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { IwdfSpinnerComponent } from './spinner.component';

const declarations = [IwdfSpinnerComponent];

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations,
  exports: [...declarations]
})
export class IwdfSpinnerModule {}
