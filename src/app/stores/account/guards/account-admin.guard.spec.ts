// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

// Models
import { UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { AccountFacade } from '../store/account.facade';
import { State } from '../store/account.reducer';
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
      providers: [AccountFacade, provideMockStore()]
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
    const expected = cold('(a|)', { a: false });
    loaded.setResult(true);
    expect(accountAdminGuard.canLoad()).toBeObservable(expected);
  });

  it('should return false if the account state is defined and the role is user', () => {
    const expected = cold('(a|)', { a: false });
    loaded.setResult(true);
    account.setResult(loadResponseUserPayload);
    expect(accountAdminGuard.canLoad()).toBeObservable(expected);
  });

  it('should return true if the account state is defined and the role is admin', () => {
    const expected = cold('(a|)', { a: true });
    loaded.setResult(true);
    account.setResult(loadResponseAdminPayload);
    expect(accountAdminGuard.canLoad()).toBeObservable(expected);
  });
});
