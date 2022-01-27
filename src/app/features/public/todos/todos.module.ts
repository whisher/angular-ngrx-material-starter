// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { PublicTodosRoutingModule } from './todos-routing.module';

// Page
import { PublicTodosPageComponent } from './todos-page.component';

@NgModule({
  imports: [CommonModule, PublicTodosRoutingModule],
  declarations: [PublicTodosPageComponent]
})
export class PublicTodosModule {}
