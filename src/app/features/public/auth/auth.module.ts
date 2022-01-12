// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Routing
import { PublicAuthRoutingModule } from './auth-routing.module';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    TranslateModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    PublicAuthRoutingModule,
    IwdfAlertModule,
    IwdfButtonSpinnerModule,
    IwdfFortawesomeModule
  ],
  declarations: [...fromComponents.components, ...fromContainers.components],
  providers: []
})
export class PublicAuthModule {}
