// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { PublicUserRoutingModule } from './user-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, PublicUserRoutingModule],
  declarations: [...fromContainers.containers]
})
export class PublicUserModule {}
