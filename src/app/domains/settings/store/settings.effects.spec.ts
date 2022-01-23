// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RunHelpers, TestScheduler } from 'rxjs/testing';
import { TranslateLoaderStubsModule } from '@testing';

// Rxjs
import { Observable } from 'rxjs';

// Ngx Translate
import { TranslateService } from '@ngx-translate/core';

// Services
import { LocalStorageService } from '@shared/services/local-storage';
import { ThemePickerService } from '@shared/services/theme-picker';

// Store
import { SettingsEffects } from './settings.effects';
import { initialState } from './settings.reducer';
import * as SettingsActions from './settings.actions';
import { SettingsState } from './settings.state';

describe('SettingsEffects', () => {
  const localStorageService = jasmine.createSpyObj('LocalStorageService', [
    'setItem'
  ]);
  let effects: SettingsEffects;
  let actions: Observable<any>;
  let store: MockStore<SettingsState>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateLoaderStubsModule],
      providers: [
        SettingsEffects,
        TranslateService,

        { provide: LocalStorageService, useValue: localStorageService },
        ThemePickerService,
        provideMockStore({ initialState }),
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.inject(SettingsEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('changeLanguage$', () => {
    it('should handle changeLanguage action and return a updateSettingsStorage action', () => {
      const action = SettingsActions.changeLanguage({ language: 'it' });
      const outcome = SettingsActions.updateSettingsStorage();

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        expectObservable(effects.changeLanguage$).toBe('-b', { b: outcome });
      });
    });
  });

  describe('changeTheme$', () => {
    it('should handle changeTheme action and return a updateSettingsStorage action', () => {
      const action = SettingsActions.changeTheme({ theme: 'dark' });
      const outcome = SettingsActions.updateSettingsStorage();

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        expectObservable(effects.changeTheme$).toBe('-b', { b: outcome });
      });
    });
  });

  describe('updateSettingsStorage$', () => {
    it('should call setItem with updateSettingsStorage action', () => {
      const action = SettingsActions.updateSettingsStorage();
      testScheduler.run(({ hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        effects.updateSettingsStorage$.subscribe((data) => {
          expect(localStorageService.setItem).toHaveBeenCalled();
        });
      });
    });
  });
});
