// Core
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

// Material
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Model
import { DialogConfirmDto } from './confirm.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-confirm',
  templateUrl: './confirm.component.html'
})
export class IwdfConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogConfirmDto,
    public dialogRef: MatDialogRef<IwdfConfirmComponent>
  ) {}
}
