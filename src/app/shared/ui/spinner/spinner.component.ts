import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

const enum SpinnerColor {
  accent = 'accent',
  primary = 'primary',
  warn = 'warn'
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-spinner',
  templateUrl: './spinner.component.html'
})
export class IwdfSpinnerComponent {
  @Input() size = 2;
  @Input() stroke = 5;
  constructor(@Attribute('color') public color: SpinnerColor) {}
}
