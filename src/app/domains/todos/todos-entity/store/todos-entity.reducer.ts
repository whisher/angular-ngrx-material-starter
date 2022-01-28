// Ngrx
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

// Models
import { TodoDto } from '@api/models';

// Store
import { TodosEntityState } from './todos-entity.state';
import * as TodosActions from './todos-entity.actions';

export function sortByName(a: TodoDto, b: TodoDto): number {
  return a.name.localeCompare(b.name);
}

export const todosEntityAdapter: EntityAdapter<TodoDto> =
  createEntityAdapter<TodoDto>({
    selectId: (todo: TodoDto) => todo.id,
    sortComparer: false
  });
/*
A compare function used to sort the collection. 
The comparer function is only needed if the collection needs to be sorted before being displayed. 
Set to false to leave the collection unsorted, which is more performant during CRUD operations.
*/
export const initialState: TodosEntityState =
  todosEntityAdapter.getInitialState({
    error: null,
    loading: true,
    selectedTodoId: null
  });

const _todosEntityReducer = createReducer<TodosEntityState>(
  initialState,
  on(TodosActions.add, (state) => {
    return {
      ...state,
      error: null,
      loading: true
    };
  }),
  on(TodosActions.addSuccess, (state, { data }) => {
    const current = {
      ...state,
      error: null,
      loading: false
    };
    return todosEntityAdapter.addOne(data, current);
  }),
  on(TodosActions.load, () => {
    return initialState;
  }),
  on(TodosActions.loadSuccess, (state, { data }) => {
    const current = {
      ...state,
      error: null,
      loading: false
    };
    return todosEntityAdapter.addMany(data, current);
  }),
  on(TodosActions.remove, (state) => {
    return {
      ...state,
      error: null,
      loading: true
    };
  }),
  on(TodosActions.removeSuccess, (state, { data }) => {
    const current = {
      ...state,
      error: null,
      loading: false
    };
    return todosEntityAdapter.removeOne(data.id, current);
  }),
  on(TodosActions.selectedTodo, (state, { data }) => {
    return {
      ...state,
      selectedTodoId: data.id
    };
  }),
  on(TodosActions.update, (state) => {
    return {
      ...state,
      error: null,
      loading: true
    };
  }),
  on(TodosActions.updateSuccess, (state, { data }) => {
    const current = {
      ...state,
      error: null,
      loading: false
    };
    return todosEntityAdapter.updateOne(data, current);
  }),
  on(TodosActions.todosFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false
    };
  })
);

export function todosEntityReducer(
  state: TodosEntityState | undefined,
  action: Action
) {
  return _todosEntityReducer(state, action);
}
