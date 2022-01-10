// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RunHelpers, TestScheduler } from 'rxjs/testing';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { ErrorDto, UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { AccountEffects } from './account.effects';
import { initialState } from './account.reducer';
import * as AccountActions from './account.actions';
//import * as RouterActions from '../../router/router.actions';

// Services
import { UserService } from '@api/services/user.service';

// Mocks
export const accountFailurePayload: ErrorDto = {
  message: 'Error'
};

export const accountSuccessPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: 'user' as UserRoleDto,
  username: 'test'
};

describe('AccountEffects', () => {
  const userService = jasmine.createSpyObj('UserService', ['account']);
  let effects: AccountEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: UserService, useValue: userService }
      ]
    });

    effects = TestBed.inject(AccountEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('load$', () => {
    it('should handle load action and return a loadSuccess action', () => {
      const action = AccountActions.load();
      const outcome = AccountActions.loadSuccess({
        data: accountSuccessPayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: accountSuccessPayload });
        userService.load.and.returnValue(response);

        expectObservable(effects.load$).toBe('--b', { b: outcome });
      });
    });
    /*
    it('should handle login action and return a loginFailure action', () => {
      const action = AuthActions.login({ credentials: loginRequestPayload });
      const outcome = AuthActions.loginFailure({ error: loginFailurePayload });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, loginFailurePayload);
        authService.login.and.returnValue(response);
        expectObservable(effects.login$).toBe('--b', { b: outcome });
      });
    });*/
  });

  /*describe('logout$', () => {
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
  });*/
});
