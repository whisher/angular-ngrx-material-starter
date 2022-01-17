import { TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { OgConfirmService } from './confirm.service';

import { OgConfirmComponent } from './confirm.component';

describe('OgConfirmService', () => {
  const mockDialogRef = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => {} })
  };
  let ogConfirmService: OgConfirmService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialog,
          useValue: mockDialogRef
        },
        OgConfirmService
      ]
    })
  );

  beforeEach(() => {
    ogConfirmService = TestBed.inject(OgConfirmService);
  });

  it('should be created', () => {
    expect(ogConfirmService).toBeTruthy();
  });

  it('dialogRef open should have been called with data', () => {
    const data = { type: '' };
    ogConfirmService.openDialog(data);
    expect(mockDialogRef.open).toHaveBeenCalledWith(OgConfirmComponent, {
      width: '350px',
      data
    });
  });
});
