// Ngrx
import { ActionReducer } from '@ngrx/store';

// Store
import { AppState } from '../domains.state';
import * as AuthActions from '../auth/store/auth.actions';

export function resetStateReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    if (action !== null && action.type === AuthActions.logout.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
