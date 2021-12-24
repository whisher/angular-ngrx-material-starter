import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-button-spinner',
  template: `
    <button
      mat-raised-button
      [color]="color"
      [disabled]="loading"
      class="block w-full"
    >
      <div class="flex justify-center items-center gap-3">
        <ng-content></ng-content>
        <ng-container *ngIf="loading">
          <mat-progress-spinner
            aria-label="spinner"
            mode="indeterminate"
            [strokeWidth]="2"
            [diameter]="20"
            [color]="color"
          ></mat-progress-spinner>
        </ng-container>
      </div>
    </button>
  `
})
export class IwdfButtonSpinnerComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() loading = false;
}
