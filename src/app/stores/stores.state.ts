// Ngrx
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

// Stores
import { AccountState } from './account/store/account.state';
import { accountReducer } from './account/store/account.reducer';
import { AuthState } from './auth/store/auth.state';
import { authReducer } from './auth/store/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { SettingsState } from './settings/store/settings.state';
import { settingsReducer } from './settings/store/settings.reducer';

export const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  auth: authReducer,
  router: routerReducer,
  settings: settingsReducer
};

export interface AppState {
  account: AccountState;
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
