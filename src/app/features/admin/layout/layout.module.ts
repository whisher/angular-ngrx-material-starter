// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class AdminLayoutModule {}
