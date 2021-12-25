import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-contact-main',
  templateUrl: './main.component.html'
})
export class PublicContactMainComponent {}
