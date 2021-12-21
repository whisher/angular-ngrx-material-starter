// Models
import { ErrorDto, UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import * as fromAccountSelectors from './account.selectors';
import { initialState, State } from './account.reducer';

// Mocks
export const loadFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loadResponseAdminPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'admin@admin.admin',
  role: UserRoleDto.admin
};
export const loadResponseUserPayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.user
};
export const loadFailureState: State = {
  error: loadFailurePayload,
  loaded: false,
  data: undefined
};
export const loadSuccessAdminState: State = {
  error: null,
  loaded: true,
  data: loadResponseAdminPayload
};
export const loadSuccessUserState: State = {
  error: null,
  loaded: true,
  data: loadResponseUserPayload
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
      const result =
        fromAccountSelectors.selectAccount.projector(loadSuccessUserState);
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
