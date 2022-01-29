// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { settingsFeatureKey, SettingsState } from './settings.state';

export const selectFeature =
  createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectSettings = createSelector(
  selectFeature,
  (state: SettingsState) => state
);

export const selectLanguage = createSelector(
  selectFeature,
  (state: SettingsState) => state.language
);

export const selectTheme = createSelector(
  selectFeature,
  (state: SettingsState) => state.theme
);
