// Core
import { Renderer2 } from '@angular/core';

// Testing
import { TestBed } from '@angular/core/testing';

// Service
import { ThemePickerService } from './theme-picker.service';

describe('ThemePickerService', () => {
  let themePickerService: ThemePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, ThemePickerService]
    });
    themePickerService = TestBed.inject(ThemePickerService);
  });

  it('should be created', () => {
    expect(themePickerService).toBeTruthy();
  });
});
