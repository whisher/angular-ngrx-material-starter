import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SettingsState } from '../models';

export const selectFeature = createFeatureSelector<SettingsState>('settings');

export const selectLanguage = createSelector(
  selectFeature,
  (state: SettingsState) => state.language
);
