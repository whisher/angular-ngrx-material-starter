import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-home-main',
  templateUrl: './main.component.html'
})
export class PublicHomeMainComponent {}
