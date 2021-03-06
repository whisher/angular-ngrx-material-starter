// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Routing
import { AdminUsersRoutingModule } from './users-routing.module';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// UI
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';
import { IwdfConfirmModule } from '@shared/ui/confirm';
import { IwdfSpinnerModule } from '@shared/ui/spinner';

// Services
import { UsersDialogFormService } from './dialogs';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromDialogs from './dialogs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    AdminUsersRoutingModule,
    IwdfFortawesomeModule,
    IwdfAlertModule,
    IwdfButtonSpinnerModule,
    IwdfConfirmModule,
    IwdfSpinnerModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
    ...fromDialogs.components
  ],
  providers: [UsersDialogFormService]
})
export class AdminUsersModule {}
