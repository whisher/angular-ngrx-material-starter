// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicTodosEntityRoutingModule } from './todos-entity-routing.module';

// Store
import { DomainsTodosEntityModule } from '@domains/todos/todos-entity';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfSpinnerModule } from '@shared/ui/spinner';
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MatCardModule,
    PublicTodosEntityRoutingModule,
    DomainsTodosEntityModule,
    IwdfAlertModule,
    IwdfSpinnerModule,
    IwdfTodosModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicTodosEntityModule {}
