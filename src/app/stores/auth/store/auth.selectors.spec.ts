// Models
import { ErrorDto, LoginResponseDto } from '@api/models';

// Store
import * as fromAuthSelectors from './auth.selectors';
import { initialState, State } from './auth.reducer';

// Mocks

export const loginFailurePayload: ErrorDto = {
  message: 'Error'
};
export const loginResponsePayload: LoginResponseDto = {
  token: 'abc',
  expirationEpochSeconds: Date.now() + 10000
};
export const loginState: State = {
  error: null,
  loading: true,
  data: undefined
};
export const loginFailureState: State = {
  error: loginFailurePayload,
  loading: false,
  data: undefined
};
export const loginSuccessState: State = {
  error: null,
  loading: false,
  data: loginResponsePayload
};

describe('Auth Selectors', () => {
  describe('With initialState state', () => {
    it('should return null with selectError', () => {
      const result = fromAuthSelectors.selectError.projector(initialState);
      expect(result).toEqual(null);
    });
    it('should return false with selectIsAuthenticated', () => {
      const result =
        fromAuthSelectors.selectIsAuthenticated.projector(initialState);
      expect(result).toEqual(false);
    });
    it('should return false with selectLoading', () => {
      const result = fromAuthSelectors.selectLoading.projector(initialState);
      expect(result).toEqual(false);
    });
    it('should return null with selectToken', () => {
      const result = fromAuthSelectors.selectToken.projector(initialState);
      expect(result).toEqual(null);
    });
  });
  describe('With failure state', () => {
    it('should return loginFailurePayload with selectError', () => {
      const result = fromAuthSelectors.selectError.projector(loginFailureState);
      expect(result).toEqual(loginFailurePayload);
    });
    it('should return false with selectIsAuthenticated', () => {
      const result =
        fromAuthSelectors.selectIsAuthenticated.projector(loginFailureState);
      expect(result).toEqual(false);
    });
    it('should return false with selectLoading', () => {
      const result =
        fromAuthSelectors.selectLoading.projector(loginFailureState);
      expect(result).toEqual(false);
    });
    it('should return null with selectToken', () => {
      const result = fromAuthSelectors.selectToken.projector(loginFailureState);
      expect(result).toEqual(null);
    });
  });
  describe('With success state', () => {
    it('should return null with selectError', () => {
      const result = fromAuthSelectors.selectError.projector(loginSuccessState);
      expect(result).toEqual(null);
    });
    it('should return true with selectIsAuthenticated', () => {
      const result =
        fromAuthSelectors.selectIsAuthenticated.projector(loginSuccessState);
      expect(result).toEqual(true);
    });
    it('should return false with selectLoading', () => {
      const result =
        fromAuthSelectors.selectLoading.projector(loginSuccessState);
      expect(result).toEqual(false);
    });
    it('should return token with selectToken', () => {
      const result = fromAuthSelectors.selectToken.projector(loginSuccessState);
      expect(result).toEqual(loginResponsePayload.token);
    });
  });
});
