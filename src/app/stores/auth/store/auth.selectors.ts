import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './auth.reducer';

export const selectFeature = createFeatureSelector<State>('auth');

export const selectError = createSelector(selectFeature, (state: State) => {
  return state.error;
});

export const selectIsAuthenticated = createSelector(
  selectFeature,
  (state: State) => {
    if (!state.data) {
      return false;
    }
    const expirationEpoch = state.data.expirationEpochSeconds;
    const now = Date.now();
    return expirationEpoch > now;
  }
);

export const selectLoading = createSelector(selectFeature, (state: State) => {
  return state.loading;
});

export const selectToken = createSelector(selectFeature, (state: State) => {
  if (state.data) {
    return state.data.token;
  }
  return null;
});
