// Core
import { Renderer2 } from '@angular/core';

// Testing
import { TestBed } from '@angular/core/testing';

// Service
import { IwdfThemeSwitchService } from './theme-switch.service';

describe('IwdfThemeSwitchService', () => {
  let iwdfThemeSwitchService: IwdfThemeSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, IwdfThemeSwitchService]
    });
    iwdfThemeSwitchService = TestBed.inject(IwdfThemeSwitchService);
  });

  it('should be created', () => {
    expect(iwdfThemeSwitchService).toBeTruthy();
  });
});
