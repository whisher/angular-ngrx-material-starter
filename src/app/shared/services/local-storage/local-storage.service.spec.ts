import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject<LocalStorageService>(LocalStorageService);
  });

  afterEach(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testLocalStorage should be executable', () => {
    spyOn(service, 'testLocalStorage');
    service.testLocalStorage();
    expect(service.testLocalStorage).toHaveBeenCalled();
  });

  it('should get, set, and remove the item', () => {
    service.setItem<string>('TEST', 'item');
    expect(service.getItem<string>('TEST')).toBe('item');
    service.removeItem('TEST');
    expect(service.getItem<string>('TEST')).toEqual(undefined);
  });

  it('should load initial state', () => {
    service.setItem('IWDF-TEST', { test: 'test' });
    expect(LocalStorageService.loadInitialState()).toEqual({
      test: { test: 'test' }
    });
  });
});
