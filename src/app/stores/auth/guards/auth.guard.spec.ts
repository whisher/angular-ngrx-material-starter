// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

// Store
import { AuthFacade } from '../store/auth.facade';
import { State } from '../store/auth.reducer';
import { selectIsAuthenticated } from '../store/auth.selectors';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let store: MockStore;
  let isAuthenticated: MemoizedSelector<State, boolean>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AuthFacade, provideMockStore()]
    });

    authGuard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
    isAuthenticated = store.overrideSelector(selectIsAuthenticated, false);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(authGuard.canLoad()).toBeObservable(expected);
  });

  it('should return true if the user state is logged in', () => {
    const expected = cold('(a|)', { a: true });

    isAuthenticated.setResult(true);

    expect(authGuard.canLoad()).toBeObservable(expected);
  });
});
