// Core
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Libs
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// Env
import { environment } from '../../environments/environment';

// Meta
import { metaReducers } from './metareducers';

// Stores
import { AccountEffects } from './account/store/account.effects';
import { AuthEffects } from './auth/store/auth.effects';
import { CustomRouterSerializer, RouterEffects } from './router';
import { SettingsEffects } from './settings/store/settings.effects';
import * as fromInterceptors from './auth/interceptors';
import { reducers } from './stores.state';

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
