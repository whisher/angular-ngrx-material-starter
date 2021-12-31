// Ngrx
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

// Services
import { LocalStorageService } from '@shared/services/local-storage';

// Store
import { AppState } from '../stores.state';

export function initStateFromLocalStorageReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
