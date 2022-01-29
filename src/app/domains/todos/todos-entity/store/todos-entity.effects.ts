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
import * as TodosEntityActions from './todos-entity.actions';

@Injectable()
export class TodosEntityEffects {
  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosEntityActions.add),
      switchMap((action) =>
        this.service.add(action.data).pipe(
          map((data) => TodosEntityActions.addSuccess({ data })),
          catchError((error) => of(TodosEntityActions.todosFailure({ error })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosEntityActions.load),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((data) => TodosEntityActions.loadSuccess({ data })),
          catchError((error) => of(TodosEntityActions.todosFailure({ error })))
        )
      )
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosEntityActions.remove),
      switchMap((action) =>
        this.service.remove(action.data).pipe(
          map((data) => TodosEntityActions.removeSuccess({ data })),
          catchError((error) => of(TodosEntityActions.todosFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosEntityActions.update),
      switchMap((action) =>
        this.service.update(action.data).pipe(
          map((data) => TodosEntityActions.updateSuccess({ data })),
          catchError((error) => of(TodosEntityActions.todosFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: TodoService) {}
}
