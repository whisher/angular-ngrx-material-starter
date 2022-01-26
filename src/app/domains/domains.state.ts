// Ngrx
import { RouterReducerState } from '@ngrx/router-store';

// Stores
import { RouterStateUrl } from './router/router.state';
import { accountFeatureKey, AccountState } from './account/store';
import { authFeatureKey, AuthState } from './auth/store';
import { settingsFeatureKey, SettingsState } from './settings/store';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  [accountFeatureKey]: AccountState;
  [authFeatureKey]: AuthState;
  [settingsFeatureKey]: SettingsState;
}
