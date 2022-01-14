// Core
import { Component, OnInit } from '@angular/core';

// Services
import { UsersDialogFormService } from '../../dialogs';

@Component({
  selector: 'admin-users-form',
  templateUrl: './form.component.html',
  providers: [UsersDialogFormService]
})
export class AdminUsersFormComponent implements OnInit {
  constructor(private dialogService: UsersDialogFormService) {}

  ngOnInit(): void {
    console.log('pp');
  }

  open() {
    this.dialogService.open({ id: 3, email: '' });
  }
}
