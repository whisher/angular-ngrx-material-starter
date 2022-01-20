// Core
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, Subject } from 'rxjs';

// Material
import { MatDialog } from '@angular/material/dialog';

// Models
import { UserResponseDto } from '@api/models';

// Components
import { AdminUsersDialogFormComponent } from './form.component';

@Injectable()
export class UsersDialogFormService {
  private subject = new Subject<UserResponseDto | undefined>();
  private store = this.subject.asObservable();
  constructor(private dialog: MatDialog) {}

  open(data: UserResponseDto | undefined) {
    const dialogRef = this.dialog.open(AdminUsersDialogFormComponent, {
      width: '650px',
      data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subject.next(result);
      }
    });
  }

  getInsertedData(): Observable<UserResponseDto | undefined> {
    return this.store;
  }
}
