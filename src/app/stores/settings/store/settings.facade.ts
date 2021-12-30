// Core
import { Injectable } from '@angular/core';

// Ngrx
import { select, Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { Language, Theme } from '@api/models';

// Store
import { SettingsState } from './settings.state';
import { selectLanguage, selectTheme } from './settings.selectors';
import * as SettingsActions from './settings.actions';

@Injectable({ providedIn: 'root' })
export class SettingsFacade {
  get language$(): Observable<Language> {
    return this.store.pipe(select(selectLanguage));
  }

  get theme$(): Observable<Theme> {
    return this.store.pipe(select(selectTheme));
  }
  constructor(private store: Store<SettingsState>) {}

  useLanguage(language: Language): void {
    this.store.dispatch(SettingsActions.changeLanguage({ language }));
  }
}
