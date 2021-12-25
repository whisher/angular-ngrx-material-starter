import { createAction, props } from '@ngrx/store';

import { ErrorDto, UserAccountResponseDto } from '@api/models';

export const load = createAction('[Account Api] Load');

export const loadFailure = createAction(
  '[Account Api] Load Failure',
  props<{ error: ErrorDto }>()
);

export const loadSuccess = createAction(
  '[Account Api] Load Success',
  props<{ data: UserAccountResponseDto }>()
);

export const loadWithoutRedirect = createAction(
  '[Account Api] Load without redirect'
);

export const loadWithoutRedirectFailure = createAction(
  '[Account Api] Load without redirect Failure',
  props<{ error: ErrorDto }>()
);

export const loadWithoutRedirectSuccess = createAction(
  '[Account Api] Load without redirect Success',
  props<{ data: UserAccountResponseDto }>()
);
