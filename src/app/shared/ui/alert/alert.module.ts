// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfAlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule, IwdfFortawesomeModule],
  declarations: [IwdfAlertComponent],
  exports: [IwdfAlertComponent]
})
export class IwdfAlertModule {}
