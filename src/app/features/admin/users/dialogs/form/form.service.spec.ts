import { TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsersDialogFormService } from './form.service';

describe('UsersDialogFormService', () => {
  const mockDialogRef = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => {} })
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialog,
          useValue: mockDialogRef
        },
        UsersDialogFormService
      ]
    })
  );

  it('should be created', () => {
    const stepConfirmService = TestBed.inject(UsersDialogFormService);
    expect(stepConfirmService).toBeTruthy();
  });
});
