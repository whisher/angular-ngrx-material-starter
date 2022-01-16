// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfAlertComponent } from './alert.component';

const declarations = [IwdfAlertComponent];

@NgModule({
  imports: [CommonModule, IwdfFortawesomeModule],
  declarations,
  exports: [...declarations]
})
export class IwdfAlertModule {}
