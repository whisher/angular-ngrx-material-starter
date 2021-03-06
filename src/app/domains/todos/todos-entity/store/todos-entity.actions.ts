import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ErrorDto, TodoDto } from '@api/models';

export const load = createAction('[Todos Api] Load');

export const loadSuccess = createAction(
  '[Todos Api] Load Success',
  props<{ data: TodoDto[] }>()
);

export const add = createAction(
  '[Todos Api] Add',
  props<{ data: Partial<TodoDto> }>()
);

export const addSuccess = createAction(
  '[Todos Api] Add Success',
  props<{ data: TodoDto }>()
);

export const remove = createAction(
  '[Todos Api] Remove',
  props<{ data: { id: string } }>()
);

export const removeSuccess = createAction(
  '[Todos Api] Remove Success',
  props<{ data: { id: string } }>()
);

export const selectedTodo = createAction(
  '[Todos Page] Selected',
  props<{ data: { id: string } }>()
);

export const update = createAction(
  '[Todos Api] Update',
  props<{ data: TodoDto }>()
);

export const updateSuccess = createAction(
  '[Todos Api] Update Success',
  props<{ data: Update<TodoDto> }>()
);

export const todosFailure = createAction(
  '[Todos Api] Load Failure',
  props<{ error: ErrorDto }>()
);
