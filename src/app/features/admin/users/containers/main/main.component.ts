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
  readonly vm$: Observable<UsersState> = this.store.vm$;
  constructor(
    private dialogService: UsersDialogFormService,
    private readonly store: UsersStore
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.dialogService.getInsertedData().subscribe((result) => {
        if (result) {
          if ('id' in result) {
            this.store.update(result);
            console.log('container update', result);
          } else {
            this.store.create(result);
            console.log('container create', result);
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
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
