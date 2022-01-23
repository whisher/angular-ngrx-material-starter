// NgRx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { AuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const initialState: AuthState = {
  error: null,
  loading: false,
  data: undefined
};

const _authReducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.login, (state) => {
    return {
      ...state,
      error: null,
      loading: true
    };
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false
    };
  }),
  on(AuthActions.loginSuccess, (state, { data }) => {
    return {
      ...state,
      error: null,
      loading: false,
      data: data
    };
  }),
  on(AuthActions.logout, () => {
    return {
      ...initialState
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
