// Core
import { NgModule } from '@angular/core';

// Modules
import { PublicLayoutModule } from './layout/public-layout.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [PublicLayoutModule, PublicRoutingModule]
})
export class PublicModule {}
