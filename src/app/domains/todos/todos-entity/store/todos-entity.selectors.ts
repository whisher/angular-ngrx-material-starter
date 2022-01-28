// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { todosEntityFeatureKey, TodosEntityState } from './todos-entity.state';
import { todosEntityAdapter } from './todos-entity.reducer';

export const selectFeature = createFeatureSelector<TodosEntityState>(
  todosEntityFeatureKey
);

export const { selectAll, selectEntities, selectIds } =
  todosEntityAdapter.getSelectors(selectFeature);

export const selectedId = createSelector(
  selectFeature,
  (state: TodosEntityState) => state.selectedTodoId
);

export const selectError = createSelector(
  selectFeature,
  (state: TodosEntityState) => state.error
);

export const selectLoading = createSelector(
  selectFeature,
  (state: TodosEntityState) => state.loading
);

export const selectSelectedTodo = createSelector(
  selectEntities,
  selectedId,
  (entities, selectedId) => {
    if (selectedId) {
      const current = entities[selectedId];
      return current ? current : null;
    }
    return null;
  }
);

export const selectedVm = createSelector(
  selectError,
  selectLoading,
  selectAll,
  (error, loading, todos) => {
    const total = todos.filter((todo) => !todo.isDone).length;
    return { error, loading, todos, total };
  }
);
