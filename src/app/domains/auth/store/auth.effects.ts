// Core
import { Injectable } from '@angular/core';

// Rxjs
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Models
import { ErrorDto } from '@api/models';
import { LoginResponseDto } from '@api/models/auth.model';

// Services
import { AuthService } from '@api/services/auth.service';
import { LocalStorageService } from '@shared/services/local-storage';

// Store
import * as AuthActions from './auth.actions';
import * as RouterActions from '../../router/router.actions';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.service.login(action.credentials).pipe(
          map((data: LoginResponseDto) => {
            this.localStorageService.setItem<{ data: LoginResponseDto }>(
              AUTH_KEY,
              {
                data
              }
            );
            return AuthActions.loginSuccess({ data });
          }),
          catchError((error: ErrorDto) => {
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        this.localStorageService.removeItem(AUTH_KEY);
        return RouterActions.routerGo({
          path: ['/auth/login'],
          extras: { replaceUrl: true }
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private localStorageService: LocalStorageService
  ) {}
}
