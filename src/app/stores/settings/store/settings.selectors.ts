// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { SettingsState } from './settings.state';

export const selectFeature = createFeatureSelector<SettingsState>('settings');

export const selectSettings = createSelector(
  selectFeature,
  (state: SettingsState) => state
);

export const selectLanguage = createSelector(
  selectFeature,
  (state: SettingsState) => state.language
);
