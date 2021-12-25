// Core
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Testing
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// Ngrx
import { StoreModule, Store } from '@ngrx/store';

// Store
import * as AuthActions from '../store/auth.actions';
import { routerReducers } from '../../router/router.reducer';
import { authReducer } from '../store/auth.reducer';
import { AuthFacade } from '../store/auth.facade';

// Interceptor
import { AuthTokenInterceptor } from './auth-token.interceptor';

import { State } from '../store/auth.reducer';

// Mocks
interface Data {
  name: string;
}
const testUrl = '/data';

describe('AuthTokenInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: Store<State>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...routerReducers,
          auth: authReducer
        })
      ],
      providers: [
        Store,
        AuthFacade,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthTokenInterceptor,
          multi: true
        }
      ]
    });
    store = TestBed.inject(Store);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should not add an Authorization header', () => {
    const testData: Data = { name: 'Test Data' };
    httpClient.get<Data>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const httpRequest = httpTestingController.expectOne(testUrl);
    httpRequest.flush(testData);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });

  it('should  add an Authorization header', () => {
    store.dispatch(
      AuthActions.loginSuccess({
        data: { expirationEpochSeconds: 1000, token: 'abcde' }
      })
    );
    const testData: Data = { name: 'Test Data' };
    httpClient.get<Data>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const httpRequest = httpTestingController.expectOne(testUrl);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    httpRequest.flush(testData);
  });
});
