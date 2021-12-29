import { Action, createReducer, on } from '@ngrx/store';
import { Language } from '../models';
import { changeLanguage } from './settings.actions';

export interface State {
  language: Language;
  theme: string;
}
export const initialState: State = {
  language: 'en',
  theme: 'light-theme'
};

const _settingsReducer = createReducer(
  initialState,
  on(changeLanguage, (state, action) => ({ ...state, ...action }))
);

export function settingsReducer(state: State | undefined, action: Action) {
  return _settingsReducer(state, action);
}
