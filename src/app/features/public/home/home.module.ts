// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Material
import { MatCardModule } from '@angular/material/card';

// Routing
import { PublicHomeRoutingModule } from './home-routing.module';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    PublicHomeRoutingModule,
    IwdfFortawesomeModule
  ],
  declarations: [...fromContainers.components]
})
export class PublicHomeModule {}
