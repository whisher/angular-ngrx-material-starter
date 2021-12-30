// Core
import { Injectable } from '@angular/core';

// Rxjs
import { map, tap, withLatestFrom } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

// Ngx Translate
import { TranslateService } from '@ngx-translate/core';

// Services
import { LocalStorageService } from '@shared/services/local-storage';

// Store
import { selectSettings } from './settings.selectors';
import { SettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const SETTINGS_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffects {
  changeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.changeLanguage),
      map((action) => {
        this.translateService.use(action.language);
        return SettingsActions.updateSettingsStorage();
      })
    )
  );

  persistSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SettingsActions.updateSettingsStorage),
        withLatestFrom(this.store.pipe(select(selectSettings))),
        tap(([action, settings]) => {
          console.log('settings', settings as SettingsState);
          this.localStorageService.setItem(SETTINGS_KEY, settings);
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<SettingsState>,
    private localStorageService: LocalStorageService,
    private translateService: TranslateService
  ) {}
}
