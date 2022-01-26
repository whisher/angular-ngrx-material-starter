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
  //debugReducer,
  initStateFromLocalStorageReducer,
  resetStateReducer
} from './meta-reducers';

// Stores
import { AppState } from './domains.state';
import { CustomRouterSerializer, RouterEffects } from './router';
import * as fromAccount from './account/store';
import * as fromAuth from './auth/store';
import * as fromSettings from './settings/store';
import * as fromInterceptors from './auth/interceptors';

const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  [fromAccount.accountFeatureKey]: fromAccount.accountReducer,
  [fromAuth.authFeatureKey]: fromAuth.authReducer,
  [fromSettings.settingsFeatureKey]: fromSettings.settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorageReducer,
  resetStateReducer
];

if (!environment.production) {
  if (!environment.test) {
    //  metaReducers.unshift(debugReducer);
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
      fromAccount.AccountEffects,
      fromAuth.AuthEffects,
      fromSettings.SettingsEffects
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
export class DomainsModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainsModule) {
    if (parentModule) {
      throw new Error(
        'DomainsModule is already loaded. Import only in AppModule'
      );
    }
  }
}
