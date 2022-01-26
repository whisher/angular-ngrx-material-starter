// Ngrx
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

// Models
import { TodoDto } from '@api/models';

// Store
import { TodosState } from './todos-entity.state';
import * as TodosActions from './todos-entity.actions';

export function sortByName(a: TodoDto, b: TodoDto): number {
  return a.name.localeCompare(b.name);
}

export const todosAdapter: EntityAdapter<TodoDto> =
  createEntityAdapter<TodoDto>({
    selectId: (todo: TodoDto) => todo.id,
    sortComparer: false
  });
/*
A compare function used to sort the collection. 
The comparer function is only needed if the collection needs to be sorted before being displayed. 
Set to false to leave the collection unsorted, which is more performant during CRUD operations.
*/
export const initialState: TodosState = todosAdapter.getInitialState({
  error: null,
  loading: true,
  selectedTodoId: null
});

const _todosReducer = createReducer<TodosState>(
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
      loaded: false
    };
    return todosAdapter.addOne(data, current);
  }),
  on(TodosActions.load, () => {
    return initialState;
  }),
  on(TodosActions.loadSuccess, (state, { data }) => {
    const current = {
      ...state,
      error: null,
      loaded: false
    };
    return todosAdapter.addMany(data, current);
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
      loaded: false
    };
    return todosAdapter.removeOne(data.id, current);
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
      loaded: false
    };
    return todosAdapter.updateOne(data, current);
  }),
  on(TodosActions.todosFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false
    };
  })
);

export function todosReducer(state: TodosState | undefined, action: Action) {
  return _todosReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  todosAdapter.getSelectors();
