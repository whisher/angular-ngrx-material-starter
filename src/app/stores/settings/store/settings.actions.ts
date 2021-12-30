// Ngrx
import { createAction, props } from '@ngrx/store';

import { Language } from '@api/models';

export const changeLanguage = createAction(
  '[Settings Page] Change Language',
  props<{ language: Language }>()
);

export const updateSettingsStorage = createAction(
  '[Settings Page] Persist Settings'
);
