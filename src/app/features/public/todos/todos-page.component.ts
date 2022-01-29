// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-todos-page',
  template: '<router-outlet></router-outlet>'
})
export class PublicTodosPageComponent {}
