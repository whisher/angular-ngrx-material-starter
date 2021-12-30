// Core
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Ngrx
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// Env
import { environment } from '../../environments/environment';

// Meta
import {
  debugReducer,
  initStateFromLocalStorageReducer,
  resetStateReducer
} from './meta-reducers';

// Stores
import { AppState } from './stores.state';
import { AccountEffects } from './account/store/account.effects';
import { accountReducer } from './account/store/account.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { authReducer } from './auth/store/auth.reducer';
import { CustomRouterSerializer, RouterEffects } from './router';
import { SettingsEffects } from './settings/store/settings.effects';
import { settingsReducer } from './settings/store/settings.reducer';
import * as fromInterceptors from './auth/interceptors';

const reducers: ActionReducerMap<AppState> = {
  account: accountReducer,
  auth: authReducer,
  router: routerReducer,
  settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorageReducer,
  resetStateReducer
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debugReducer);
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([
      RouterEffects,
      AccountEffects,
      AuthEffects,
      SettingsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer
    })
  ],
  providers: [...fromInterceptors.interceptors]
})
export class StoresModule {
  constructor(@Optional() @SkipSelf() parentModule: StoresModule) {
    if (parentModule) {
      throw new Error(
        'StoresModule is already loaded. Import only in AppModule'
      );
    }
  }
}
