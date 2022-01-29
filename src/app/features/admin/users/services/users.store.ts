// Core
import { Injectable } from '@angular/core';

// Rxjs
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

// Ngrx
import { ComponentStore } from '@ngrx/component-store';

// Models
import { ErrorDto, UserRequestDto, UserResponseDto } from '@api/models';

// Services
import { UserService } from '@api/services/user.service';

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
    this.getAll();
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

  private readonly getAll = this.effect((users$: Observable<void>) => {
    return users$.pipe(
      switchMap(() =>
        this.service.getAll().pipe(
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
                  loaded: false,
                  loading: false,
                  users: [],
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

  readonly add = this.effect((user$: Observable<UserRequestDto>) => {
    return user$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      switchMap((user: UserRequestDto) =>
        this.service.add(user).pipe(
          tap({
            next: (res) => {
              this.getAll();
            },
            error: (error) => {
              this.setState((state) => {
                return {
                  loaded: false,
                  loading: false,
                  users: [],
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

  readonly remove = this.effect((user$: Observable<{ id: string }>) => {
    return user$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      switchMap((id: { id: string }) =>
        this.service.remove(id).pipe(
          tap({
            next: (res) => {
              this.getAll();
            },
            error: (error) => {
              this.setState((state) => {
                return {
                  loaded: false,
                  loading: false,
                  users: [],
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

  readonly update = this.effect((user$: Observable<UserRequestDto>) => {
    return user$.pipe(
      tap({
        next: () => {
          this.setLoading(true);
        }
      }),
      switchMap((user: UserRequestDto) =>
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
                  loaded: false,
                  loading: false,
                  users: [],
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

  selectUser(userId: string): Observable<UserResponseDto | undefined> {
    return this.select((state: UsersState) =>
      state.users.find((user) => user.id === userId)
    );
  }
}
