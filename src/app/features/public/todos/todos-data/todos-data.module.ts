// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicTodosDataRoutingModule } from './todos-data-routing.module';

// Ui
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    PublicTodosDataRoutingModule,
    IwdfTodosModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicTodosDataModule {}
