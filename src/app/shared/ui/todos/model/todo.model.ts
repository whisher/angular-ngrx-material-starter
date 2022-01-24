import { TodoDto } from '@api/models';

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export type TodoActionsType = 'delete' | 'update';

export interface TodoActions {
  action: TodoActionsType;
  data: TodoDto;
}
