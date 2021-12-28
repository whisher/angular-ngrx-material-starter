// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ngx Translate
import { TranslateModule } from '@ngx-translate/core';

// Routing
import { PublicHomeRoutingModule } from './home-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, TranslateModule, PublicHomeRoutingModule],
  declarations: [...fromContainers.containers]
})
export class PublicHomeModule {}
