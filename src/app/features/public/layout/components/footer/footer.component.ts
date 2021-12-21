import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-layout-footer',
  templateUrl: './footer.component.html'
})
export class PublicLayoutFooterComponent {}
