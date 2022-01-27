// Ngrx
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Store
import { todosEntityFeatureKey, TodosEntityState } from './todos-entity.state';
import { todosEntityAdapter } from './todos-entity.reducer';

export const selectFeature = createFeatureSelector<TodosEntityState>(
  todosEntityFeatureKey
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
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
    return selectedId && entities[selectedId];
  }
);

export const selectedVm = createSelector(
  selectError,
  selectLoading,
  selectTotal,
  selectAll,
  (error, loading, total, todos) => {
    return { error, loading, todos, total };
  }
);
