// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfTodosFormComponent } from './form/form.component';

const declarations = [IwdfTodosFormComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    IwdfFortawesomeModule
  ],
  declarations,
  exports: [...declarations]
})
export class IwdfTodosModule {}
