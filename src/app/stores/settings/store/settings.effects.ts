// Core
import { Injectable } from '@angular/core';

// Rxjs
import { tap } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Ngx Translate
import { TranslateService } from '@ngx-translate/core';

import { changeLanguage } from './settings.actions';

@Injectable()
export class SettingsEffects {
  changeLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeLanguage),
        tap((action) => this.translateService.use(action.language))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private translateService: TranslateService
  ) {}
}
