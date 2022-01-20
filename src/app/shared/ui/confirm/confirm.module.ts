// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Services
import { ConfirmService } from './confirm.service';

// Components
import { IwdfConfirmComponent } from './confirm.component';

const declarations = [IwdfConfirmComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations,
  providers: [ConfirmService],
  exports: [...declarations]
})
export class IwdfConfirmModule {}
