import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-footer',
  templateUrl: './footer.component.html'
})
export class AdminLayoutFooterComponent {}
