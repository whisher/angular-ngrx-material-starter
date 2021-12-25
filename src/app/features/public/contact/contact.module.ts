// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { PublicContactRoutingModule } from './contact-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, PublicContactRoutingModule],
  declarations: [...fromContainers.containers]
})
export class PublicContactModule {}
