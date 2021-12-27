// Core
import { Router } from '@angular/router';

// Testing
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

// Store
import { AuthFacade } from '../store/auth.facade';
import { initialState, State } from '../store/auth.reducer';
import { selectIsAuthenticated } from '../store/auth.selectors';

// Services
import { AuthLoggedGuard } from './auth-logged.guard';

describe('AuthLoggedGuard', () => {
  let authLoggedGuard: AuthLoggedGuard;
  let isAuthenticated: MemoizedSelector<State, boolean>;
  let router: Router;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthFacade, provideMockStore({ initialState })]
    });
    store = TestBed.inject(MockStore);
    authLoggedGuard = TestBed.inject(AuthLoggedGuard);
    isAuthenticated = store.overrideSelector(selectIsAuthenticated, false);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authLoggedGuard).toBeTruthy();
  });

  it('should return true if the user state is not logged in', () => {
    authLoggedGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(true);
    });
  });

  it('should return false if the user state is logged in', () => {
    const spy = spyOn(router, 'parseUrl');
    isAuthenticated.setResult(true);
    authLoggedGuard.canLoad().subscribe({
      next: () => {
        expect(spy).toHaveBeenCalledOnceWith('/');
      }
    });
  });
});
