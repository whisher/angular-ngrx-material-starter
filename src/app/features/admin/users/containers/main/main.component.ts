// Core
import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit
} from '@angular/core';

// Rxjs
import { Observable, Subscription } from 'rxjs';

// Models
import { UserActionDto } from '../../models';

// Services
import { ConfirmService } from '@shared/ui/confirm';
import { UsersDialogFormService } from '../../dialogs';

// Store
import { UsersState, UsersStore } from '../../services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-main',
  templateUrl: './main.component.html',
  providers: [UsersStore]
})
export class AdminUsersMainComponent implements OnDestroy, OnInit {
  private subscription: Subscription = new Subscription();
  vm$: Observable<UsersState> = this.store.vm$;
  constructor(
    private confirmService: ConfirmService,
    private dialogService: UsersDialogFormService,
    private readonly store: UsersStore
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.dialogService.getInsertedData().subscribe((result) => {
        if (result) {
          if ('id' in result) {
            this.store.update(result);
          } else {
            this.store.add(result);
          }
        }
      })
    );
  }

  handleUserAction(row: UserActionDto) {
    const { action, data } = row;
    if (action === 'edit') {
      this.dialogService.open(data);
    } else {
      this.subscription.add(
        this.confirmService
          .open({
            header: `Are you sure do you want to delete ${data.username}?`
          })
          .subscribe((result) => {
            if (result) {
              const { id } = data;
              this.store.remove({ id });
            }
          })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
