import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IwdfAlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [IwdfAlertComponent],
  exports: [IwdfAlertComponent]
})
export class IwdfAlertModule {}
