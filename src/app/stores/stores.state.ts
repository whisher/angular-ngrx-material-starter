// Ngrx
import { RouterReducerState } from '@ngrx/router-store';

// Stores
import { AccountState } from './account/store/account.state';
import { AuthState } from './auth/store/auth.state';
import { RouterStateUrl } from './router/router.state';
import { SettingsState } from './settings/store/settings.state';

export interface AppState {
  account: AccountState;
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
