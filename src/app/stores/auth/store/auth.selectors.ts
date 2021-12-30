// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { AuthState } from './auth.state';

export const selectFeature = createFeatureSelector<AuthState>('auth');

export const selectError = createSelector(selectFeature, (state: AuthState) => {
  return state.error;
});

export const selectIsAuthenticated = createSelector(
  selectFeature,
  (state: AuthState) => {
    if (!state.data) {
      return false;
    }
    const expirationEpoch = state.data.expirationEpochSeconds;
    const now = Date.now();
    return expirationEpoch > now;
  }
);

export const selectLoading = createSelector(
  selectFeature,
  (state: AuthState) => {
    return state.loading;
  }
);

export const selectStatus = createSelector(
  selectError,
  selectLoading,
  (error, loading) => {
    return {
      error,
      loading
    };
  }
);

export const selectToken = createSelector(selectFeature, (state: AuthState) => {
  if (state.data) {
    return state.data.token;
  }
  return null;
});
