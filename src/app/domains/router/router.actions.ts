import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const routerBack = createAction('[Router] Back');

export const routerForward = createAction('[Router] Forward');

export const routerGo = createAction(
  '[Router] Go',
  props<{
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }>()
);
