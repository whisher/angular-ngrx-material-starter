// Core
import { Injectable } from '@angular/core';

// Ngrx
import { select, Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';

// Store
import { TodosEntityState } from './todos-entity.state';
import { selectSelectedTodo, selectedVm } from './todos-entity.selectors';
import * as TodosEntityActions from './todos-entity.actions';

// Models
import { ErrorDto, TodoDto } from '@api/models';

export interface TodosEntityVm {
  error: ErrorDto | null;
  loading: boolean;
  todos: TodoDto[];
  total: number;
}

@Injectable()
export class TodosEntityFacade {
  get selectedTodo$(): Observable<TodoDto | null> {
    return this.store.pipe(select(selectSelectedTodo));
  }
  get vm$(): Observable<TodosEntityVm> {
    return this.store.pipe(select(selectedVm));
  }
  constructor(private store: Store<TodosEntityState>) {}

  add(data: Partial<TodoDto>): void {
    this.store.dispatch(TodosEntityActions.add({ data }));
  }
  load(): void {
    this.store.dispatch(TodosEntityActions.load());
  }
  remove(data: { id: string }): void {
    this.store.dispatch(TodosEntityActions.remove({ data }));
  }
  selected(data: { id: string }): void {
    this.store.dispatch(TodosEntityActions.selectedTodo({ data }));
  }
  update(data: TodoDto): void {
    this.store.dispatch(TodosEntityActions.update({ data }));
  }
}
