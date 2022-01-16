// Core
import { Component } from '@angular/core';

// Services
import { UsersDialogFormService } from '../../dialogs';

@Component({
  selector: 'admin-users-add',
  templateUrl: './add.component.html'
})
export class AdminUsersAddComponent {
  constructor(private dialogService: UsersDialogFormService) {}

  open() {
    this.dialogService.open(undefined);
  }
}
