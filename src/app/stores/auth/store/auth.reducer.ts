// NgRx
import { Action, createReducer, on } from '@ngrx/store';

// Models
import { ErrorDto, LoginResponseDto } from '@api/models';

// Store
import * as AuthActions from './auth.actions';

export interface State {
  error: ErrorDto | null;
  loading: boolean;
  data: LoginResponseDto | undefined;
}

export const initialState: State = {
  error: null,
  loading: false,
  data: undefined
};

const _authReducer = createReducer<State>(
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

export function authReducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
