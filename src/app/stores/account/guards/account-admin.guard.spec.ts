// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

// Models
import { UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { AccountFacade } from '../store/account.facade';
import { initialState, State } from '../store/account.reducer';
import { selectAccount, selectLoaded } from '../store/account.selectors';

import { AccountAdminGuard } from './account-admin.guard';

// Mocks
export const loadResponseAdminPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.admin
};
export const loadResponseUserPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.user
};
describe('AccountAdminGuard', () => {
  let accountAdminGuard: AccountAdminGuard;
  let store: MockStore;
  let account: MemoizedSelector<State, UserAccountResponseDto | undefined>;
  let loaded: MemoizedSelector<State, boolean>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AccountFacade, provideMockStore({ initialState })]
    });

    accountAdminGuard = TestBed.inject(AccountAdminGuard);
    store = TestBed.inject(MockStore);
    account = store.overrideSelector(selectAccount, undefined);
    loaded = store.overrideSelector(selectLoaded, false);
  });

  it('should be created', () => {
    expect(accountAdminGuard).toBeTruthy();
  });

  it('should return false if the account state is undefined', () => {
    loaded.setResult(true);
    accountAdminGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(false);
    });
  });

  it('should return false if the account state is defined and the role is user', () => {
    loaded.setResult(true);
    account.setResult(loadResponseUserPayload);
    accountAdminGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(false);
    });
  });

  it('should return true if the account state is defined and the role is admin', () => {
    loaded.setResult(true);
    account.setResult(loadResponseAdminPayload);
    accountAdminGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(true);
    });
  });
});
