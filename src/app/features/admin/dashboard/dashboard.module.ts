import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminDashboardRoutingModule } from './dashboard-routing.module';

// Components

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, AdminDashboardRoutingModule],
  declarations: [...fromContainers.containers],
})
export class AdminDashboardModule {}
