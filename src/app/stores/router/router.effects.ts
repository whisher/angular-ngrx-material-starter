// Core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// Rxjs
import { tap, map } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import { routerBack, routerForward, routerGo } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerGo),
        map((action) => action),
        tap(({ path, queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerBack),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  forward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerForward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}
