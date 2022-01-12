// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// UI
import { IwdfThemePickerModule } from '@shared/ui/theme-picker';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveComponentModule,
    TranslateModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    IwdfFortawesomeModule,
    IwdfThemePickerModule
  ],
  declarations: [...fromComponents.components, ...fromContainers.components]
})
export class PublicLayoutModule {}
