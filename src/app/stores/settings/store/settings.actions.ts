// Ngrx
import { createAction, props } from '@ngrx/store';

import { Language } from '../models';

export const changeLanguage = createAction(
  '[Settings Page] Change Language',
  props<{ language: Language }>()
);
