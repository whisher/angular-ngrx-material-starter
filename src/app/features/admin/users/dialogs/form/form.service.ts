import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AdminUsersDialogFormComponent } from './form.component';

@Injectable()
export class UsersDialogFormService {
  constructor(private dialog: MatDialog) {}
  open(data: { id: number; email: string }) {
    const dialogRef = this.dialog.open(AdminUsersDialogFormComponent, {
      width: '650px',
      data
    });
    return dialogRef.afterClosed();
  }
}
