// Core
import { Injectable } from '@angular/core';

// Rxjs
import { map, tap, withLatestFrom } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

// Ngx Translate
import { TranslateService } from '@ngx-translate/core';

// Services
import { LocalStorageService } from '@shared/services/local-storage';
import { ThemePickerService } from '@shared/services/theme-picker';

// Store
import { selectSettings } from './settings.selectors';
import { SettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const SETTINGS_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffects implements OnInitEffects {
  ngrxOnInitEffects() {
    return { type: 'INIT_SETTINGS' };
  }
  changeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.changeLanguage),
      map((action) => {
        this.translateService.use(action.language);
        return SettingsActions.updateSettingsStorage();
      })
    )
  );

  changeTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.changeTheme),
      withLatestFrom(this.store.pipe(select(selectSettings))),
      map(([action, theme]) => {
        this.themePickerService.setStyle(action.theme);
        return SettingsActions.updateSettingsStorage();
      })
    )
  );

  initSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('INIT_SETTINGS'),
        withLatestFrom(this.store.pipe(select(selectSettings))),
        tap(([action, settings]) => {
          this.translateService.use(settings.language);
          this.themePickerService.init(settings.theme);
        })
      ),
    { dispatch: false }
  );

  updateSettingsStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SettingsActions.updateSettingsStorage),
        withLatestFrom(this.store.pipe(select(selectSettings))),
        tap(([action, settings]) => {
          this.localStorageService.setItem<SettingsState>(
            SETTINGS_KEY,
            settings
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<SettingsState>,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private themePickerService: ThemePickerService
  ) {}
}
