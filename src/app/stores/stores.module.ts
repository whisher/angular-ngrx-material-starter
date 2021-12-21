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

// Router
import {
  CustomRouterSerializer,
  RouterEffects,
  routerReducers
} from './router';

// Stores
import { AccountEffects } from './account/store/account.effects';
import { accountReducer } from './account/store/account.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { authReducer } from './auth/store/auth.reducer';
import * as fromInterceptors from './auth/interceptors';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        account: accountReducer,
        auth: authReducer,
        ...routerReducers
      },
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true
        }
      }
    ),
    EffectsModule.forRoot([RouterEffects, AccountEffects, AuthEffects]),
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
