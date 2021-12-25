// Core
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';

// Store
import { State } from './account.reducer';
import {
  selectAccount,
  selectError,
  selectIsAdmin,
  selectLoaded
} from './account.selectors';
import * as AccountActions from './account.actions';

// Models
import { ErrorDto, UserAccountResponseDto } from '@api/models';

@Injectable({ providedIn: 'root' })
export class AccountFacade {
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

  constructor(private store: Store<State>) {}

  load(): void {
    this.store.dispatch(AccountActions.load());
  }

  loadWithoutRedirect(): void {
    this.store.dispatch(AccountActions.loadWithoutRedirect());
  }
}
