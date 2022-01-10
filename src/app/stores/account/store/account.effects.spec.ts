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
import * as RouterActions from '../../router/router.actions';

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
        userService.account.and.returnValue(response);

        expectObservable(effects.load$).toBe('--b', { b: outcome });
      });
    });

    it('should handle load action and return a loadFailure action', () => {
      const action = AccountActions.load();
      const outcome = AccountActions.loadFailure({
        error: accountFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, accountFailurePayload);
        userService.account.and.returnValue(response);
        expectObservable(effects.load$).toBe('--b', { b: outcome });
      });
    });
  });

  describe('loadWithoutRedirect$', () => {
    it('should handle loadWithoutRedirect action and return a loadWithoutRedirectSuccess action', () => {
      const action = AccountActions.loadWithoutRedirect();
      const outcome = AccountActions.loadWithoutRedirectSuccess({
        data: accountSuccessPayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: accountSuccessPayload });
        userService.account.and.returnValue(response);

        expectObservable(effects.loadWithoutRedirect$).toBe('--b', {
          b: outcome
        });
      });
    });

    it('should handle loadWithoutRedirect action and return a loadFailure action', () => {
      const action = AccountActions.loadWithoutRedirect();
      const outcome = AccountActions.loadFailure({
        error: accountFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, accountFailurePayload);
        userService.account.and.returnValue(response);
        expectObservable(effects.loadWithoutRedirect$).toBe('--b', {
          b: outcome
        });
      });
    });
  });
  describe('loadSuccess$', () => {
    it("should handle loadSuccess action and return a routerGo action with { path: ['/user'] }", () => {
      const action = AccountActions.loadSuccess({
        data: accountSuccessPayload
      });
      const outcome = RouterActions.routerGo({ path: ['/user'] });

      testScheduler.run(({ expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        expectObservable(effects.loadSuccess$).toBe('-b', { b: outcome });
      });
    });
    it("should handle loadSuccess action and return a routerGo action with { path: ['/admin'] }", () => {
      const action = AccountActions.loadSuccess({
        data: { ...accountSuccessPayload, ...{ role: 'admin' as UserRoleDto } }
      });
      const outcome = RouterActions.routerGo({ path: ['/admin'] });

      testScheduler.run(({ expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        expectObservable(effects.loadSuccess$).toBe('-b', { b: outcome });
      });
    });
  });
});
