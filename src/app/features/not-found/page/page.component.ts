import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-not-found-page',
  templateUrl: './page.component.html'
})
export class NotFoundPageComponent {}
