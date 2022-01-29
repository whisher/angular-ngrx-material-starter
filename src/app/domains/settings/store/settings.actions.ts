// Ngrx
import { createAction, props } from '@ngrx/store';

import { Language, Theme } from '../models';

export const changeLanguage = createAction(
  '[Settings Page] Change Language',
  props<{ language: Language }>()
);

export const changeTheme = createAction(
  '[Settings Page] Change Theme',
  props<{ theme: Theme }>()
);

export const updateSettingsStorage = createAction(
  '[Settings Page] Persist Settings'
);
