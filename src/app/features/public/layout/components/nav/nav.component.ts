// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class PublicLayoutNavComponent {
  @Input() sidenav?: MatDrawer;
  navigation = [
    { link: '/', label: 'Home' },
    { link: 'about-us', label: 'About' },
    { link: 'contact-us', label: 'Contact' }
  ];
}
