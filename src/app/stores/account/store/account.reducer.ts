import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from './account.actions';

import { ErrorDto, UserAccountResponseDto } from '@api/models';

export interface State {
  error: ErrorDto | null;
  loaded: boolean;
  data: UserAccountResponseDto | undefined;
}

export const initialState: State = {
  error: null,
  loaded: false,
  data: undefined
};

const _accountReducer = createReducer<State>(
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

export function accountReducer(state: State | undefined, action: Action) {
  return _accountReducer(state, action);
}
