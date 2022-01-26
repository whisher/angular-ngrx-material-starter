import { Language, Theme } from '../models';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  language: Language;
  theme: Theme;
}
