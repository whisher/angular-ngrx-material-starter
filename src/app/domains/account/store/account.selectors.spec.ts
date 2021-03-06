// Models
import { ErrorDto, UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { initialState } from './account.reducer';
import * as fromAccountSelectors from './account.selectors';
import { AccountState } from './account.state';
import { AuthState } from '../../auth/store/auth.state';

// Mocks
export const loadFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loadResponseAdminPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'admin@admin.admin',
  role: UserRoleDto.admin,
  username: 'admin'
};
export const loadResponseUserPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.user,
  username: 'test'
};
export const loadFailureState: AccountState = {
  error: loadFailurePayload,
  loaded: false,
  data: undefined
};
export const loadSuccessAdminState: AccountState = {
  error: null,
  loaded: true,
  data: loadResponseAdminPayload
};
export const loadSuccessUserState: AccountState = {
  error: null,
  loaded: true,
  data: loadResponseUserPayload
};
export const loginSuccessState: AuthState = {
  error: null,
  loading: false,
  data: { token: 'abc', expirationEpochSeconds: Date.now() + 10000 }
};
describe('Account Selectors', () => {
  describe('With initialState state', () => {
    it('should return undefined with selectAccount', () => {
      const result = fromAccountSelectors.selectAccount.projector(initialState);
      expect(result).toEqual(undefined);
    });
    it('should return null with selectError', () => {
      const result = fromAccountSelectors.selectError.projector(initialState);
      expect(result).toEqual(null);
    });
    it('should return false with selectIsAdmin', () => {
      const result = fromAccountSelectors.selectIsAdmin.projector(initialState);
      expect(result).toEqual(false);
    });

    it('should return false with selectLoaded', () => {
      const result = fromAccountSelectors.selectLoaded.projector(initialState);
      expect(result).toEqual(false);
    });
  });
  describe('With loadFailureState state', () => {
    it('should return undefined with selectAccount', () => {
      const result =
        fromAccountSelectors.selectAccount.projector(loadFailureState);
      expect(result).toEqual(undefined);
    });
    it('should return null with selectError', () => {
      const result =
        fromAccountSelectors.selectError.projector(loadFailureState);
      expect(result).toEqual(loadFailurePayload);
    });
    it('should return false with selectIsAdmin', () => {
      const result = fromAccountSelectors.selectIsAdmin.projector(initialState);
      expect(result).toEqual(false);
    });

    it('should return false with selectLoaded', () => {
      const result = fromAccountSelectors.selectLoaded.projector(initialState);
      expect(result).toEqual(false);
    });
  });

  describe('With loadSuccessState state', () => {
    it('should return loadResponseUserPayload with selectAccount', () => {
      const result = fromAccountSelectors.selectAccount.projector(
        loginSuccessState,
        loadResponseUserPayload
      );
      expect(result).toEqual(loadResponseUserPayload);
    });
    it('should return null with selectError', () => {
      const result =
        fromAccountSelectors.selectError.projector(loadSuccessUserState);
      expect(result).toEqual(null);
    });
    it('should return false with selectIsAdmin', () => {
      const result =
        fromAccountSelectors.selectIsAdmin.projector(loadSuccessUserState);
      expect(result).toEqual(false);
    });

    it('should return true with selectIsAdmin', () => {
      const result = fromAccountSelectors.selectIsAdmin.projector(
        loadSuccessAdminState
      );
      expect(result).toEqual(true);
    });
    it('should return true with selectLoaded', () => {
      const result =
        fromAccountSelectors.selectLoaded.projector(loadSuccessUserState);
      expect(result).toEqual(true);
    });
  });
});
