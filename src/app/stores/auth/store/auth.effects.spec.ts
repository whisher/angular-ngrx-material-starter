// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RunHelpers, TestScheduler } from 'rxjs/testing';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { ErrorDto, LoginRequestDto, LoginResponseDto } from '@api/models';

// Store
import { AuthEffects } from './auth.effects';
import { initialState /*, State*/ } from './auth.reducer';
import * as AuthActions from './auth.actions';
import * as RouterActions from '../../router/router.actions';

// Services
import { AuthService } from '@api/services/auth.service';

// Mocks
export const loginFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loginRequestPayload: LoginRequestDto = {
  email: 'test@test.test',
  password: 'abcd'
};
export const loginSuccessPayload: LoginResponseDto = {
  token: 'abc',
  expirationEpochSeconds: 12345
};

describe('AuthEffects', () => {
  const authService = jasmine.createSpyObj('AuthService', ['login']);
  let effects: AuthEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: AuthService, useValue: authService }
      ]
    });

    effects = TestBed.inject(AuthEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('login$', () => {
    it('should handle login action and return a loginSuccess action', () => {
      const action = AuthActions.login({ credentials: loginRequestPayload });
      const outcome = AuthActions.loginSuccess({ data: loginSuccessPayload });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: loginSuccessPayload });
        authService.login.and.returnValue(response);

        expectObservable(effects.login$).toBe('--b', { b: outcome });
      });
    });
    it('should handle login action and return a loginFailure action', () => {
      const action = AuthActions.login({ credentials: loginRequestPayload });
      const outcome = AuthActions.loginFailure({ error: loginFailurePayload });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, loginFailurePayload);
        authService.login.and.returnValue(response);
        expectObservable(effects.login$).toBe('--b', { b: outcome });
      });
    });
  });

  describe('logout$', () => {
    it("should handle logout action and return a routerGo action with {path: ['/auth/login'],extras: { replaceUrl: true }}", () => {
      const action = AuthActions.logout();
      const outcome = RouterActions.routerGo({
        path: ['/auth/login'],
        extras: { replaceUrl: true }
      });

      testScheduler.run(({ expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        expectObservable(effects.logout$).toBe('-b', { b: outcome });
      });
    });
  });
});
