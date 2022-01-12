// Core
import { NgModule } from '@angular/core';

// Modules
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutModule } from './layout/admin-layout.module';

@NgModule({
  imports: [AdminRoutingModule, AdminLayoutModule]
})
export class AdminModule {}
