// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicContactRoutingModule } from './contact-routing.module';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    PublicContactRoutingModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicContactModule {}
