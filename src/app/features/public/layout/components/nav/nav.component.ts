import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-nav',
  templateUrl: './nav.component.html'
})
export class PublicLayoutNavComponent {
  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];
}
