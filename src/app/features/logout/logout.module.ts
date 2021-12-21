// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LogoutRoutingModule } from './logout-routing.module';

// Components
import { LogoutPageComponent } from './page/logout.component';

@NgModule({
  imports: [CommonModule, LogoutRoutingModule],
  declarations: [LogoutPageComponent]
})
export class LogoutModule {}
