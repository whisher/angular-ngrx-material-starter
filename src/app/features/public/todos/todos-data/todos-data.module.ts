// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicTodosDataRoutingModule } from './todos-data-routing.module';

// Store
import { DomainsTodosDataModule } from '@domains/todos/todos-data';

// Ui
import { IwdfSpinnerModule } from '@shared/ui/spinner';
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MatCardModule,
    PublicTodosDataRoutingModule,
    DomainsTodosDataModule,
    IwdfSpinnerModule,
    IwdfTodosModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicTodosDataModule {}
