import { TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmService } from './confirm.service';

import { IwdfConfirmComponent } from './confirm.component';

describe('ConfirmService', () => {
  const mockDialogRef = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => {} })
  };
  let confirmService: ConfirmService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialog,
          useValue: mockDialogRef
        },
        ConfirmService
      ]
    })
  );

  beforeEach(() => {
    confirmService = TestBed.inject(ConfirmService);
  });

  it('should be created', () => {
    expect(ConfirmService).toBeTruthy();
  });

  it('dialogRef open should have been called with data', () => {
    const data = { header: '' };
    confirmService.open(data);
    expect(mockDialogRef.open).toHaveBeenCalledWith(IwdfConfirmComponent, {
      width: '350px',
      data
    });
  });
});
