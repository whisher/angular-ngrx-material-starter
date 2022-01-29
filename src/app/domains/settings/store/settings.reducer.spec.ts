// Models
import { Language, Theme } from '../models';

// Store
import * as SettingsActions from './settings.actions';
import { settingsReducer, initialState } from './settings.reducer';
import { SettingsState } from './settings.state';

// Mocks
export const changeLanguagePayload: { language: Language } = {
  language: 'it'
};
export const changeThemePayload: { theme: Theme } = {
  theme: 'dark'
};
export const changeLanguageState: SettingsState = {
  language: 'it',
  theme: 'light'
};
export const changeThemeState: SettingsState = {
  language: 'en',
  theme: 'dark'
};
describe('SettingsReducer', () => {
  describe('undefined action', () => {
    it('should return initialState', () => {
      const action = { type: 'NOOP' } as any;
      const result = settingsReducer(undefined, action);
      expect(result).toBe(initialState);
    });
  });

  describe('change language action', () => {
    it('should return changeLanguageState', () => {
      const changeLanguageAction = SettingsActions.changeLanguage(
        changeLanguagePayload
      );
      const result = settingsReducer(initialState, changeLanguageAction);
      expect(result).toEqual(changeLanguageState);
    });
  });

  describe('change theme action', () => {
    it('should return changeThemeState', () => {
      const changeLanguageAction =
        SettingsActions.changeTheme(changeThemePayload);
      const result = settingsReducer(initialState, changeLanguageAction);
      expect(result).toEqual(changeThemeState);
    });
  });
});
