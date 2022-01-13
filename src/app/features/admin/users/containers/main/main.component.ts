// Core
import { Component, ChangeDetectionStrategy } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

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
  constructor(private readonly store: UsersStore) {}
}
