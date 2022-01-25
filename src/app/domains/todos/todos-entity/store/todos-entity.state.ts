import { EntityState } from '@ngrx/entity';
import { ErrorDto, TodoDto } from '@api/models';

export interface TodosState extends EntityState<TodoDto> {
  error: ErrorDto | null;
  loading: boolean;
}
