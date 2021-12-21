// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Components
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class PublicLayoutModule {}
