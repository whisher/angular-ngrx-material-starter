import { Action, createReducer, on } from '@ngrx/store';

import { SettingsState } from '../models';
import { changeLanguage } from './settings.actions';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'light-theme'
};

const _settingsReducer = createReducer(
  initialState,
  on(changeLanguage, (state, action) => ({ ...state, ...action }))
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return _settingsReducer(state, action);
}
