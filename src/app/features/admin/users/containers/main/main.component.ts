// Core
import { Component, ChangeDetectionStrategy } from '@angular/core';

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
export class AdminUsersMainComponent {
  readonly vm$: Observable<UsersState> = this.store.vm$;
  constructor(
    private dialogService: UsersDialogFormService,
    private readonly store: UsersStore
  ) {}

  handleUserAction(row: UserActionDto) {
    const { action, data } = row;

    if (action === 'edit') {
      this.dialogService.open(data);
    } else {
    }
  }
}
