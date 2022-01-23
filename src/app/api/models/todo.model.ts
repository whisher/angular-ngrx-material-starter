export interface TodoDto {
  id?: string;
  done: boolean;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';
