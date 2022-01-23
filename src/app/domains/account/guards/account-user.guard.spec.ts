// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

// Models
import { UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { AccountFacade } from '../store/account.facade';
import { AccountState } from '../store/account.state';
import { initialState } from '../store/account.reducer';
import { selectAccount, selectLoaded } from '../store/account.selectors';

import { AccountUserGuard } from './account-user.guard';

// Mocks
export const loadResponseAdminPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.admin,
  username: 'test'
};
export const loadResponseUserPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.user,
  username: 'test'
};
describe('AccountUserGuard', () => {
  let accountUserGuard: AccountUserGuard;
  let store: MockStore;
  let account: MemoizedSelector<
    AccountState,
    UserAccountResponseDto | undefined
  >;
  let loaded: MemoizedSelector<AccountState, boolean>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AccountFacade, provideMockStore({ initialState })]
    });

    accountUserGuard = TestBed.inject(AccountUserGuard);
    store = TestBed.inject(MockStore);
    account = store.overrideSelector(selectAccount, undefined);
    loaded = store.overrideSelector(selectLoaded, false);
  });

  it('should be created', () => {
    expect(accountUserGuard).toBeTruthy();
  });

  it('should return false if the account state is undefined', () => {
    loaded.setResult(true);
    accountUserGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(false);
    });
  });

  it('should return true if the account state is defined and the role is user', () => {
    loaded.setResult(true);
    account.setResult(loadResponseUserPayload);
    accountUserGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(true);
    });
  });

  it('should return true if the account state is defined and the role is admin', () => {
    loaded.setResult(true);
    account.setResult(loadResponseAdminPayload);
    accountUserGuard.canLoad().subscribe((canLoad) => {
      expect(canLoad).toBe(true);
    });
  });
});
