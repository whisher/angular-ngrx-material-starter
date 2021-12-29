import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './settings.reducer';

export const selectFeature = createFeatureSelector<State>('settings');

export const selectLanguage = createSelector(
  selectFeature,
  (state: State) => state.language
);
