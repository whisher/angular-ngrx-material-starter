import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-spinner',
  templateUrl: './spinner.component.html'
})
export class IwdfSpinnerComponent {
  @Input() size = 2;
  @Input() stroke = 5;
}
