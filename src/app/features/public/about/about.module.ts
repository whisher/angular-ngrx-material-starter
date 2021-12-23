// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { PublicAboutRoutingModule } from './about-routing.module';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, PublicAboutRoutingModule],
  declarations: [...fromContainers.containers]
})
export class PublicAboutModule {}
