import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-user-main',
  templateUrl: './main.component.html'
})
export class PublicUserMainComponent {
  navigation = [
    { link: '/todos/data', label: 'Todos Data' },
    { link: '/todos/entity', label: 'Todos Entity' }
  ];
}
