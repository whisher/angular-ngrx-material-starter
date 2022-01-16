// Core
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

// Material
import { MatDialog } from '@angular/material/dialog';

// Models
import { UserRequestDto, UserResponseDto } from '@api/models';

// Components
import { AdminUsersDialogFormComponent } from './form.component';

@Injectable()
export class UsersDialogFormService {
  constructor(private dialog: MatDialog) {}
  open(
    data: UserResponseDto | undefined
  ): Observable<UserRequestDto | undefined> {
    const dialogRef = this.dialog.open(AdminUsersDialogFormComponent, {
      width: '650px',
      data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('The dialog was service', result);
      }
    });
    return dialogRef.afterClosed();
  }
}
