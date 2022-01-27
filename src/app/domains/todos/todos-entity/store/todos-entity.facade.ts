// Core
import { Injectable } from '@angular/core';

// Ngrx
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

// Rxjs
import { Observable } from 'rxjs';

// Store
import { TodosEntityState, TodosEntityVmState } from './todos-entity.state';
import {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
  selectError,
  selectLoading,
  selectSelectedTodo,
  selectedVm
} from './todos-entity.selectors';
import * as TodosEntityActions from './todos-entity.actions';

// Models
import { ErrorDto, TodoDto } from '@api/models';

@Injectable()
export class TodosEntityFacade {
  get all$(): Observable<TodoDto[]> {
    return this.store.pipe(select(selectAll));
  }
  get entities$(): Observable<Dictionary<TodoDto>> {
    return this.store.pipe(select(selectEntities));
  }
  get error$(): Observable<ErrorDto | null> {
    return this.store.pipe(select(selectError));
  }
  get ids$(): Observable<number[] | string[]> {
    return this.store.pipe(select(selectIds));
  }
  get loading$(): Observable<boolean> {
    return this.store.pipe(select(selectLoading));
  }
  get selectedTodo$(): Observable<TodoDto | string | null | undefined> {
    return this.store.pipe(select(selectSelectedTodo));
  }
  get total$(): Observable<number> {
    return this.store.pipe(select(selectTotal));
  }
  get vm$(): Observable<TodosEntityVmState> {
    return this.store.pipe(select(selectedVm));
  }
  constructor(private store: Store<TodosEntityState>) {}

  add(data: TodoDto): void {
    this.store.dispatch(TodosEntityActions.add({ data }));
  }
  load(): void {
    this.store.dispatch(TodosEntityActions.load());
  }
  remove(data: { id: string }): void {
    this.store.dispatch(TodosEntityActions.remove({ data }));
  }
  update(data: TodoDto): void {
    this.store.dispatch(TodosEntityActions.update({ data }));
  }
}
