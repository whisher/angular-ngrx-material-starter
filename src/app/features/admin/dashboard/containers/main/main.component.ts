import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-dashboard-main',
  templateUrl: './main.component.html'
})
export class AdminDashboardMainComponent {}
