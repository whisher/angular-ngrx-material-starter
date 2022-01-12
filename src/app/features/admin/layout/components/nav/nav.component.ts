// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-nav',
  templateUrl: './nav.component.html'
})
export class AdminLayoutNavComponent {
  navigation = [
    { link: '/admin/dashboard', label: 'Dashboard' },
    { link: '/admin/users', label: 'Users' }
  ];
}
