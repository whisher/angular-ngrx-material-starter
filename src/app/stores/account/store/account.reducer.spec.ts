// Models
import { ErrorDto, UserAccountResponseDto, UserRoleDto } from '@api/models';

// Store
import { accountReducer, initialState, State } from './account.reducer';
import * as AccountActions from './account.actions';

// Mocks
export const loadFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loadResponsePayload: UserAccountResponseDto = {
  id: 'abc',
  email: 'test@test.test',
  role: UserRoleDto.user
};
export const loadFailureState: State = {
  error: loadFailurePayload,
  loaded: false,
  data: undefined
};
export const loadSuccessState: State = {
  error: null,
  loaded: true,
  data: loadResponsePayload
};
describe('AccountReducer', () => {
  describe('undefined action', () => {
    it('should return initialState', () => {
      const action = { type: 'NOOP' } as any;
      const result = accountReducer(undefined, action);
      expect(result).toBe(initialState);
    });
  });

  describe('load action', () => {
    it('should return initialState', () => {
      const loginAction = AccountActions.load();
      const result = accountReducer(initialState, loginAction);
      expect(result).toEqual(initialState);
    });
  });

  describe('load action', () => {
    it('should return initialState', () => {
      const loginAction = AccountActions.load();
      const result = accountReducer(initialState, loginAction);
      expect(result).toEqual(initialState);
    });
  });

  describe('load failure action', () => {
    it('should return loadFailureState', () => {
      const loadFailureAction = AccountActions.loadFailure({
        error: loadFailurePayload
      });
      const result = accountReducer(initialState, loadFailureAction);
      expect(result).toEqual(loadFailureState);
    });
  });

  describe('load success action', () => {
    it('should return loadSuccessState', () => {
      const loadSuccessAction = AccountActions.loadSuccess({
        data: loadResponsePayload
      });
      const result = accountReducer(initialState, loadSuccessAction);
      expect(result).toEqual(loadSuccessState);
    });
  });
});
