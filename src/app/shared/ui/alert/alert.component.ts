import { Attribute, Component, Input, OnInit } from '@angular/core';

enum AlertTypes {
  danger = 'danger'
}

@Component({
  selector: 'iwdf-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class IwdfAlertComponent implements OnInit {
  @Input() msg: string | undefined = 'Something went wrong';
  PREFIX = 'alert';
  icons = {
    danger: 'error_outline'
  };
  icon!: string;
  type!: string;
  constructor(@Attribute('color') public color: AlertTypes) {}

  ngOnInit(): void {
    this.icon = this.icons[this.color];
    this.type = `${this.PREFIX}-${this.color}`;
  }
}
