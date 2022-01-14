// Core
import { Component, Inject, OnInit } from '@angular/core';

// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'admin-users-dialog-form',
  templateUrl: './form.component.html'
})
export class AdminUsersDialogFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AdminUsersDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; email: string }
  ) {}

  ngOnInit(): void {
    console.log('pp');
  }

  close() {
    this.dialogRef.close(true);
  }
}
