// Ngrx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { SettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'light-theme'
};

const _settingsReducer = createReducer(
  initialState,
  on(SettingsActions.changeLanguage, (state, action) => ({
    ...state,
    ...action
  }))
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return _settingsReducer(state, action);
}
