import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicTodosEntityMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicTodosEntityMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicTodosEntityRoutingModule {}
