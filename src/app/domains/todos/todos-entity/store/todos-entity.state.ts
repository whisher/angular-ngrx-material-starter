import { EntityState } from '@ngrx/entity';
import { ErrorDto, TodoDto } from '@api/models';

export const todosEntityFeatureKey = 'todos_entity';

export interface TodosEntityState extends EntityState<TodoDto> {
  error: ErrorDto | null;
  loading: boolean;
  selectedTodoId: string | null;
}
export interface TodosEntityVmState {
  error: ErrorDto | null;
  loading: boolean;
  todos: TodoDto[];
  total: number;
}
