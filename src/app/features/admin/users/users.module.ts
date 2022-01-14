// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// Routing
import { AdminUsersRoutingModule } from './users-routing.module';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// UI
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfSpinnerModule } from '@shared/ui/spinner';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromDialogs from './dialogs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    AdminUsersRoutingModule,
    IwdfFortawesomeModule,
    IwdfAlertModule,
    IwdfSpinnerModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
    ...fromDialogs.components
  ]
})
export class AdminUsersModule {}
