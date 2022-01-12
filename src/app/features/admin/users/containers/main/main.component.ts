import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-main',
  templateUrl: './main.component.html'
})
export class AdminUsersMainComponent {}
