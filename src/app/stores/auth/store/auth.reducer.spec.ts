// Models
import { ErrorDto, LoginRequestDto, LoginResponseDto } from '@api/models';

// Store
import * as AuthActions from './auth.actions';
import { authReducer, initialState } from './auth.reducer';
import { AuthState } from '../store/auth.state';

// Mocks
export const loginRequestPayload: LoginRequestDto = {
  email: 'test@test.test',
  password: 'abcd'
};
export const loginSuccessPayload: LoginResponseDto = {
  token: 'abc',
  expirationEpochSeconds: 12345
};
export const loginFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loginState: AuthState = {
  error: null,
  loading: true,
  data: undefined
};
export const loginFailureState: AuthState = {
  error: loginFailurePayload,
  loading: false,
  data: undefined
};
export const loginSuccessState: AuthState = {
  error: null,
  loading: false,
  data: loginSuccessPayload
};
describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return initialState', () => {
      const action = { type: 'NOOP' } as any;
      const result = authReducer(undefined, action);
      expect(result).toBe(initialState);
    });
  });

  describe('login action', () => {
    it('should return loginState', () => {
      const loginAction = AuthActions.login({
        credentials: loginRequestPayload
      });
      const result = authReducer(initialState, loginAction);
      expect(result).toEqual(loginState);
    });
  });

  describe('login failure action', () => {
    it('should return loginFailureState', () => {
      const loginFailureAction = AuthActions.loginFailure({
        error: loginFailurePayload
      });
      const result = authReducer(initialState, loginFailureAction);
      expect(result).toEqual(loginFailureState);
    });
  });

  describe('login success action', () => {
    it('should return loginSuccessState', () => {
      const loginSuccessAction = AuthActions.loginSuccess({
        data: loginSuccessPayload
      });
      const result = authReducer(initialState, loginSuccessAction);
      expect(result).toEqual(loginSuccessState);
    });
  });

  describe('logout action', () => {
    it('should return initialState', () => {
      const logoutAction = AuthActions.logout();
      const result = authReducer(initialState, logoutAction);
      expect(result).toEqual(initialState);
    });
  });
});
