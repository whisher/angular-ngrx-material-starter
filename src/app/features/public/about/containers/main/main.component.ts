import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-about-main',
  templateUrl: './main.component.html'
})
export class PublicAboutMainComponent {}
