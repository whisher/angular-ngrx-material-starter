// Store
import { initialState } from './settings.reducer';
import * as fromSettingsSelectors from './settings.selectors';

describe('Settings Selectors', () => {
  describe('With initialState state', () => {
    it('should return settings state with selectSettings', () => {
      const result =
        fromSettingsSelectors.selectSettings.projector(initialState);
      expect(result).toEqual(initialState);
    });
    it('should return default lang with selectLanguage', () => {
      const result =
        fromSettingsSelectors.selectLanguage.projector(initialState);
      expect(result).toEqual('en');
    });
    it('should return default theme with selectTheme', () => {
      const result = fromSettingsSelectors.selectTheme.projector(initialState);
      expect(result).toEqual('light');
    });
  });
});
