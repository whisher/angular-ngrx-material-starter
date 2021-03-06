import { Attribute, Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-common-types';

export const enum AlertColor {
  accent = 'accent',
  primary = 'primary',
  warn = 'warn'
}

@Component({
  selector: 'iwdf-alert',
  templateUrl: './alert.component.html'
})
export class IwdfAlertComponent implements OnInit {
  @Input() msg: string | undefined = 'Something went wrong';
  private readonly PREFIX = 'bg';
  cls!: string;
  icons = {
    accent: 'info-circle',
    primary: 'check-circle',
    warn: 'exclamation-circle'
  };
  type!: IconName;
  constructor(@Attribute('color') public color: AlertColor) {}

  ngOnInit(): void {
    this.cls = `${this.PREFIX}-${this.color}`;
    this.type = this.icons[this.color] as IconName;
  }
}
