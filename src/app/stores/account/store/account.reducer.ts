// Ngrx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { AccountState } from './account.state';
import * as AccountActions from './account.actions';

export const initialState: AccountState = {
  error: null,
  loaded: false,
  data: undefined
};

const _accountReducer = createReducer<AccountState>(
  initialState,
  on(AccountActions.load, () => {
    return initialState;
  }),
  on(
    AccountActions.loadFailure,
    AccountActions.loadWithoutRedirectFailure,
    (state, { error }) => {
      return {
        ...state,
        error,
        loaded: false,
        data: undefined
      };
    }
  ),
  on(
    AccountActions.loadSuccess,
    AccountActions.loadWithoutRedirectSuccess,
    (state, { data }) => {
      return {
        ...state,
        error: null,
        loaded: true,
        data: data
      };
    }
  )
);

export function accountReducer(
  state: AccountState | undefined,
  action: Action
) {
  return _accountReducer(state, action);
}
