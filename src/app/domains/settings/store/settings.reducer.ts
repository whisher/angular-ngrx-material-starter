// Ngrx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { SettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'light'
};

const _settingsReducer = createReducer(
  initialState,
  on(
    SettingsActions.changeLanguage,
    SettingsActions.changeTheme,
    (state, action) => {
      const { type, ...rest } = action;
      return { ...state, ...rest };
    }
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return _settingsReducer(state, action);
}
