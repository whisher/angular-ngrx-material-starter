// Testing
import { TestBed } from '@angular/core/testing';

// Service
import { IwdfThemeSwitchService } from './theme-switch.service';

describe('IwdfThemeSwitchService', () => {
  let iwdfThemeSwitchService: IwdfThemeSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IwdfThemeSwitchService]
    });
    iwdfThemeSwitchService = TestBed.inject(IwdfThemeSwitchService);
  });

  it('should be created', () => {
    expect(iwdfThemeSwitchService).toBeTruthy();
  });
});
