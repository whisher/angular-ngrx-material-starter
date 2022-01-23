// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicTodosEntityRoutingModule } from './todos-entity-routing.module';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Ui
import { IwdfTodosModule } from '@shared/ui/todos';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    PublicTodosEntityRoutingModule,
    IwdfFortawesomeModule,
    IwdfTodosModule
  ],
  declarations: [...fromContainers.containers]
})
export class PublicTodosEntityModule {}
