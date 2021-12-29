import { MetaReducer, ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '@shared/services/local-storage';

import * as AuthActions from './auth/store/auth.actions';

// https://stackoverflow.com/a/56256929/356380
function merge(a: any, b: any) {
  return Object.entries(b).reduce((o, [k, v]) => {
    o[k] =
      v && typeof v === 'object'
        ? merge((o[k] = o[k] || (Array.isArray(v) ? [] : {})), v)
        : v;
    return o;
  }, a);
}

export function initStateFromLocalStorage(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return function (state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return merge(newState, LocalStorageService.loadInitialState());
    }
    return newState;
  };
}

export function onLogoutReset(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action !== null && action.type === AuthActions.logout.type) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
const metaReducersList: any = [initStateFromLocalStorage, onLogoutReset];

export const metaReducers: MetaReducer<any>[] = metaReducersList;
