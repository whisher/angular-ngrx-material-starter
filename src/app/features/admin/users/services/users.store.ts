import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { UserService } from '@api/services/user.service';
import { ErrorDto, UserResponseDto } from '@api/models';

export interface UsersState {
  error: ErrorDto | null;
  loaded: boolean;
  loading: boolean;
  users: UserResponseDto[];
}

const initialState: UsersState = {
  error: null,
  loaded: false,
  loading: false,
  users: []
};

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  constructor(private readonly service: UserService) {
    super(initialState);
    this.all();
  }

  private readonly error$: Observable<ErrorDto | null> = this.select(
    (state: UsersState) => {
      return state.error;
    }
  );

  private readonly loaded$: Observable<boolean> = this.select(
    (state: UsersState) => {
      return state.loaded;
    }
  );

  private readonly loading$: Observable<boolean> = this.select(
    (state: UsersState) => {
      return state.loading;
    }
  );

  private readonly users$: Observable<UserResponseDto[]> = this.select(
    (state: UsersState) => {
      return state.users;
    }
  );

  readonly vm$ = this.select(
    this.error$,
    this.loaded$,
    this.loading$,
    this.users$,
    (error, loaded, loading, users) => ({
      error,
      loaded,
      loading,
      users
    })
  );

  /* private readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading
  }));*/

  private readonly all = this.effect<void>((users$: Observable<void>) => {
    return users$.pipe(
      switchMap(() =>
        this.service.all().pipe(
          tap({
            next: (users) => {
              this.setState((state) => {
                return {
                  ...state,
                  loaded: true,
                  users
                };
              });
            },
            error: (error) => {
              this.setState((state) => {
                return {
                  ...state,
                  error
                };
              });
            }
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
  /*
  readonly create = this.effect<TodoDto>((todos$: Observable<TodoDto>) => {
    return todos$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      concatMap((todo: TodoDto) =>
        this.service.create(todo).pipe(
          tap({
            next: (res) => {
              this.all();
            },
            error: (e) => {
              this.setState((state) => {
                return {
                  ...state,
                  error: true
                };
              });
            }
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly update = this.effect<TodoDto>((todos$: Observable<TodoDto>) => {
    return todos$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      concatMap((todo: TodoDto) =>
        this.service.update(todo).pipe(
          tap({
            next: (res) => {
              const { id } = todo;
              this.setState((state) => {
                return {
                  ...state,
                  loading: false,
                  todos: state.todos.map((current) => {
                    if (Number(current.id) === Number(id)) {
                      return res;
                    }
                    return current;
                  })
                };
              });
            },
            error: (e) => {
              this.setState((state) => {
                return {
                  ...state,
                  error: true
                };
              });
            }
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly remove = this.effect<TodoDto>((todos$: Observable<TodoDto>) => {
    return todos$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      concatMap((todo: TodoDto) =>
        this.service.remove(todo).pipe(
          tap({
            next: (res) => {
              this.all();
            },
            error: (e) => {
              this.setState((state) => {
                return {
                  ...state,
                  error: true
                };
              });
            }
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
*/
  selectTodo(userId: string): Observable<UserResponseDto | undefined> {
    return this.select((state: UsersState) =>
      state.users.find((user) => user.id === userId)
    );
  }
}