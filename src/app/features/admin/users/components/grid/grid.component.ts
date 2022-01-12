import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-grid',
  templateUrl: './grid.component.html'
})
export class AdminUsersGridComponent {}
