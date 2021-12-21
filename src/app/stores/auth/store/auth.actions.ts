// Ngrx
import { createAction, props } from '@ngrx/store';

// Models
import { ErrorDto, LoginRequestDto, LoginResponseDto } from '@api/models';

export const login = createAction(
  '[Auth Page] Login',
  props<{ credentials: LoginRequestDto }>()
);

export const loginFailure = createAction(
  '[Auth Api] Login Failure',
  props<{ error: ErrorDto }>()
);

export const loginSuccess = createAction(
  '[Auth Api] Login Success',
  props<{ data: LoginResponseDto }>()
);

export const logout = createAction('[Auth Page] Logout');
