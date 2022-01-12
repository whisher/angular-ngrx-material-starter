import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminUsersRoutingModule } from './users-routing.module';

// Components

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, AdminUsersRoutingModule],
  declarations: [...fromContainers.containers]
})
export class AdminUsersModule {}
