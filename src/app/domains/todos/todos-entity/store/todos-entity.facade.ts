// Core
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';

// Store
import { AccountState } from './account.state';
import {
  selectAccount,
  selectError,
  selectIsAdmin,
  selectLoaded
} from './account.selectors';
import * as AccountActions from './account.actions';

// Models
import { ErrorDto, UserAccountResponseDto } from '@api/models';

@Injectable()
export class TodoFacade {
  get data$(): Observable<UserAccountResponseDto | undefined> {
    return this.store.pipe(select(selectAccount));
  }

  get error$(): Observable<ErrorDto | null> {
    return this.store.pipe(select(selectError));
  }

  get isAdmin$(): Observable<boolean> {
    return this.store.pipe(select(selectIsAdmin));
  }

  get loaded$(): Observable<boolean> {
    return this.store.pipe(select(selectLoaded));
  }

  constructor(private store: Store<AccountState>) {}

  load(): void {
    this.store.dispatch(AccountActions.load());
  }

  loadWithoutRedirect(): void {
    this.store.dispatch(AccountActions.loadWithoutRedirect());
  }
}
