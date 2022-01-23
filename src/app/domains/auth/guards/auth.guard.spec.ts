// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

// Store
import { AuthFacade } from '../store/auth.facade';
import { initialState } from '../store/auth.reducer';
import { selectIsAuthenticated } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let store: MockStore;
  let isAuthenticated: MemoizedSelector<AuthState, boolean>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AuthFacade, provideMockStore({ initialState })]
    });

    authGuard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
    isAuthenticated = store.overrideSelector(selectIsAuthenticated, false);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return false if the user state is not logged in', () => {
    authGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(false);
    });
  });

  it('should return true if the user state is logged in', () => {
    isAuthenticated.setResult(true);
    authGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(true);
    });
  });
});
