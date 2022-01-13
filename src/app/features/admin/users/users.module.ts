// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Routing
import { AdminUsersRoutingModule } from './users-routing.module';

// UI
import { IwdfSpinnerModule } from '@shared/ui/spinner';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    AdminUsersRoutingModule,
    IwdfSpinnerModule
  ],
  declarations: [...fromComponents.components, ...fromContainers.components]
})
export class AdminUsersModule {}
