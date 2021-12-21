// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { PublicHomeRoutingModule } from './home-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, PublicHomeRoutingModule],
  declarations: [...fromContainers.containers]
})
export class PublicHomeModule {}
