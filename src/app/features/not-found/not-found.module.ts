// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { NotFoundRoutingModule } from './not-found-routing.module';

// Component
import { NotFoundPageComponent } from './page/page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
