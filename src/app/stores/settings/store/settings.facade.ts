// Core
import { Injectable } from '@angular/core';

// Ngrx
import { select, Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';

// Store
import { Language } from '../models';
import { SettingsState } from './settings.state';
import { selectLanguage } from './settings.selectors';
import * as SettingsActions from './settings.actions';

@Injectable({ providedIn: 'root' })
export class SettingsFacade {
  get language$(): Observable<Language> {
    return this.store.pipe(select(selectLanguage));
  }

  constructor(private store: Store<SettingsState>) {}

  useLanguage(language: Language): void {
    this.store.dispatch(SettingsActions.changeLanguage({ language }));
  }
}
