// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { AccountState } from './account.state';

import { selectIsAuthenticated } from '../../auth/store/auth.selectors';

export const selectFeature = createFeatureSelector<AccountState>('account');

export const selectData = createSelector(
  selectFeature,
  (state: AccountState) => {
    if (state) {
      return state.data;
    }
    return undefined;
  }
);

export const selectAccount = createSelector(
  selectIsAuthenticated,
  selectData,
  (isAuthenticated, account) => {
    if (isAuthenticated) {
      return account;
    }
    return undefined;
  }
);

export const selectError = createSelector(
  selectFeature,
  (state: AccountState) => {
    return state.error;
  }
);

export const selectIsAdmin = createSelector(
  selectFeature,
  (state: AccountState) => {
    if (!state.data) {
      return false;
    }
    const role = state.data.role;
    if (!role) {
      return false;
    }

    return role === 'admin';
  }
);

export const selectLoaded = createSelector(
  selectFeature,
  (state: AccountState) => {
    return state.loaded;
  }
);
