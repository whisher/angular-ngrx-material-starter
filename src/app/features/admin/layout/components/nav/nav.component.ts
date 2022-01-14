// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Fortawesome
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type IconNavDto = [IconPrefix, IconName];

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-nav',
  templateUrl: './nav.component.html'
})
export class AdminLayoutNavComponent {
  navigation = [
    {
      label: 'Dashboard',
      link: '/admin/dashboard',
      icon: ['fas', 'chart-bar'] as IconNavDto
    },
    {
      label: 'Users',
      link: '/admin/users',
      icon: ['fas', 'users'] as IconNavDto
    }
  ];
}
