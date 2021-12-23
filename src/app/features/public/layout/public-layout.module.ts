// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Components
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    MatBadgeModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    IwdfFortawesomeModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class PublicLayoutModule {}
