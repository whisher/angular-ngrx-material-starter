// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfTodosFormComponent } from './form/form.component';
import { IwdfTodosGridComponent } from './grid/grid.component';
import { IwdfTodosRowComponent } from './row/row.component';

const declarations = [
  IwdfTodosFormComponent,
  IwdfTodosGridComponent,
  IwdfTodosRowComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    IwdfFortawesomeModule
  ],
  declarations,
  exports: [...declarations]
})
export class IwdfTodosModule {}
