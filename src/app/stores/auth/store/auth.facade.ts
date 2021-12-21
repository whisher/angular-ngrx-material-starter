// Core
import { Injectable } from '@angular/core';

// Ngrx
import { ActionsSubject, select, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { ErrorDto, LoginRequestDto, LoginResponseDto } from '@api/models';

import { State } from './auth.reducer';
import {
  selectError,
  selectIsAuthenticated,
  selectLoading,
  selectToken
} from './auth.selectors';

import * as AuthActions from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  get error$(): Observable<ErrorDto | null> {
    return this.store.pipe(select(selectError));
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.store.pipe(select(selectIsAuthenticated));
  }

  get loading$(): Observable<boolean> {
    return this.store.pipe(select(selectLoading));
  }

  get token$(): Observable<string | null> {
    return this.store.pipe(select(selectToken));
  }

  constructor(
    private store: Store<State>,
    private actionsSubject: ActionsSubject
  ) {}

  login(credentials: LoginRequestDto): void {
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  OnLoginSuccess(): Observable<{
    data: LoginResponseDto | undefined;
  }> {
    return this.actionsSubject.pipe(ofType(AuthActions.loginSuccess));
  }
}
