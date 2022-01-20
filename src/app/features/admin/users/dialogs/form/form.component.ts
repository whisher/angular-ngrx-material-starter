// Core
import { Component, Inject } from '@angular/core';

// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { UserRequestDto, UserResponseDto } from '@api/models';

@Component({
  selector: 'admin-users-dialog-form',
  templateUrl: './form.component.html'
})
export class AdminUsersDialogFormComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminUsersDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserResponseDto | undefined
  ) {}

  close(data: UserRequestDto) {
    this.dialogRef.close(data);
  }

  onSubmit(data: UserRequestDto) {
    this.close(data);
  }
}
