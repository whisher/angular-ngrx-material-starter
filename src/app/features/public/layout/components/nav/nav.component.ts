// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-nav',
  templateUrl: './nav.component.html'
})
export class PublicLayoutNavComponent {
  @Input() sidenav?: MatDrawer;
  navigation = [
    { link: '/home', label: 'Home' },
    { link: 'about-us', label: 'About' },
    { link: 'contact-us', label: 'Contact' }
  ];
}
