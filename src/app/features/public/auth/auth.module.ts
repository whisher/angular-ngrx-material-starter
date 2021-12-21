// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Routing
import { PublicAuthRoutingModule } from './auth-routing.module';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';

// Components
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PublicAuthRoutingModule,
    IwdfAlertModule,
    IwdfButtonSpinnerModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: []
})
export class PublicAuthModule {}
