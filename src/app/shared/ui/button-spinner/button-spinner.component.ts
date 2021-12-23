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
      <div class="d-flex justify-content-center align-items-center">
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
  `,
  styles: [
    `
      .mat-progress-spinner {
        margin-left: 0.5rem;
      }
    `
  ]
})
export class IwdfButtonSpinnerComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() loading = false;
}
