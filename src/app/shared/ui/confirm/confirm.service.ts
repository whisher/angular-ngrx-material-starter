import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogConfirmDto } from './confirm.model';
import { IwdfConfirmComponent } from './confirm.component';

@Injectable()
export class ConfirmService {
  constructor(private dialog: MatDialog) {}
  open(data: DialogConfirmDto) {
    const dialogRef = this.dialog.open(IwdfConfirmComponent, {
      width: '350px',
      data
    });
    return dialogRef.afterClosed();
  }
}
