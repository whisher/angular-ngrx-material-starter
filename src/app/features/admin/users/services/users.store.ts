import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, concatMap, switchMap, tap } from 'rxjs/operators';
import { UserService } from '@api/services/user.service';
import { ErrorDto, UserRequestDto, UserResponseDto } from '@api/models';

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

  private readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading
  }));

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
                  loading: false,
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

  readonly create = this.effect<UserResponseDto>(
    (users$: Observable<UserResponseDto>) => {
      return users$.pipe(
        tap({
          next: () => {
            this.setLoading(true);
          }
        }),
        concatMap((user: UserRequestDto) =>
          this.service.create(user).pipe(
            tap({
              next: (res) => {
                this.all();
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
    }
  );

  readonly update = this.effect<UserResponseDto>(
    (users$: Observable<UserResponseDto>) => {
      return users$.pipe(
        tap({
          next: () => {
            this.setLoading(true);
          }
        }),
        concatMap((user: UserResponseDto) =>
          this.service.update(user).pipe(
            tap({
              next: (res) => {
                const { id } = user;
                this.setState((state) => {
                  return {
                    ...state,
                    loading: false,
                    users: state.users.map((current) => {
                      if (current.id === id) {
                        return res;
                      }
                      return current;
                    })
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
    }
  );
  /*
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
