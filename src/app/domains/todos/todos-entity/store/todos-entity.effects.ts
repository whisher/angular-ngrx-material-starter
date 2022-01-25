// Core
import { Injectable } from '@angular/core';

// Rxjs
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Services
import { TodoService } from '@api/services/todo.service';

// Store
import * as TodosActions from './todos-entity.actions';

@Injectable()
export class TodosEffects {
  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.add),
      switchMap((action) =>
        this.service.add(action.data).pipe(
          map((data) => TodosActions.addSuccess({ data })),
          catchError((error) => of(TodosActions.todosFailure({ error })))
        )
      )
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.remove),
      switchMap((action) =>
        this.service.remove(action.data).pipe(
          map((data) => TodosActions.removeSuccess({ data })),
          catchError((error) => of(TodosActions.todosFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.update),
      switchMap((action) =>
        this.service.update(action.data).pipe(
          map((data) => TodosActions.updateSuccess({ data })),
          catchError((error) => of(TodosActions.todosFailure({ error })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.load),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((data) => TodosActions.loadSuccess({ data })),
          catchError((error) => of(TodosActions.todosFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: TodoService) {}
}
