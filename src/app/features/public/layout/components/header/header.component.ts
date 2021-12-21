import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-header',
  templateUrl: './header.component.html',
  styles: [
    `
      header {
        height: var(--public-header-height);
      }
    `
  ]
})
export class PublicLayoutHeaderComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
}
