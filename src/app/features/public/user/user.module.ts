// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// Routing
import { PublicUserRoutingModule } from './user-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    PublicUserRoutingModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicUserModule {}
