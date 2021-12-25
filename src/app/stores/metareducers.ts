import { MetaReducer, ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '@shared/services/local-storage';

import { AUTH_KEY } from './auth/store/auth.effects';
import * as AuthActions from './auth/store/auth.actions';

export function onLogoutReset(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action !== null && action.type === AuthActions.logout.type) {
      state = undefined;
    }
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      const data = LocalStorageService.loadInitialState(AUTH_KEY);
      if (data) {
        state = { ...state, ...{ auth: { data } } };
      }
    }
    return reducer(state, action);
  };
}

const metaReducersList: any = [onLogoutReset];

export const metaReducers: MetaReducer<any>[] = metaReducersList;
