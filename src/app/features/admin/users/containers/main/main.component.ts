// Core
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { UserActionDto } from '../../models';

// Services
import { UsersDialogFormService } from '../../dialogs';

// Store
import { UsersState, UsersStore } from '../../services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-main',
  templateUrl: './main.component.html',
  providers: [UsersStore]
})
export class AdminUsersMainComponent implements OnInit {
  readonly vm$: Observable<UsersState> = this.store.vm$;
  constructor(
    private dialogService: UsersDialogFormService,
    private readonly store: UsersStore
  ) {}

  ngOnInit() {
    this.dialogService.getData().subscribe((result) => {
      if (result) {
        console.log('container', result);
      }
      console.log('container', result);
    });
  }

  handleUserAction(row: UserActionDto) {
    const { action, data } = row;

    if (action === 'edit') {
      this.dialogService.open(data);
    } else {
    }
  }
}
