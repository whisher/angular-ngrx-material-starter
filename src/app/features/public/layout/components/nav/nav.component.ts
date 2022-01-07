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
    { link: '/home', label: 'iwdf.header.menu.home' },
    { link: 'about-us', label: 'iwdf.header.menu.about' },
    { link: 'contact-us', label: 'iwdf.header.menu.contact' }
  ];
}
