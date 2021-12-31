// Core
import { Renderer2 } from '@angular/core';

// Testing
import { TestBed } from '@angular/core/testing';

// Service
import { IwdfThemePickerService } from './theme-picker.service';

describe('IwdfThemePickerService', () => {
  let iwdfThemePickerService: IwdfThemePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, IwdfThemePickerService]
    });
    iwdfThemePickerService = TestBed.inject(IwdfThemePickerService);
  });

  it('should be created', () => {
    expect(iwdfThemePickerService).toBeTruthy();
  });
});
