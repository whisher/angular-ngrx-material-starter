import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './account.reducer';

export const selectFeature = createFeatureSelector<State>('account');

export const selectAccount = createSelector(selectFeature, (state: State) => {
  if (state) {
    return state.data;
  }
  return undefined;
});

export const selectError = createSelector(selectFeature, (state: State) => {
  return state.error;
});

export const selectIsAdmin = createSelector(selectFeature, (state: State) => {
  if (!state.data) {
    return false;
  }
  const role = state.data.role;
  if (!role) {
    return false;
  }

  return role === 'admin';
});

export const selectLoaded = createSelector(selectFeature, (state: State) => {
  return state.loaded;
});
