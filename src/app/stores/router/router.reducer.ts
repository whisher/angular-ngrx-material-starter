import { Params } from '@angular/router';
import { Action, ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const routerReducers: ActionReducerMap<State | unknown, Action> = {
  router: routerReducer
};
