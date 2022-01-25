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

export const todosAdapter: EntityAdapter<TodoDto> = createEntityAdapter<Book>({
  sortComparer: sortByName
});

export const initialState: TodosState = todosAdapter.getInitialState({
  error: null,
  loading: false
});
const _todosReducer = createReducer<AccountState>(
  initialState,
  on(AccountActions.load, () => {
    return initialState;
  }),
  on(AccountActions.loadFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loaded: false,
      data: undefined
    };
  }),
  on(
    AccountActions.loadSuccess,
    AccountActions.loadWithoutRedirectSuccess,
    (state, { data }) => {
      return {
        ...state,
        error: null,
        loaded: true,
        data: data
      };
    }
  )
);

export function accountReducer(
  state: AccountState | undefined,
  action: Action
) {
  return _accountReducer(state, action);
}
