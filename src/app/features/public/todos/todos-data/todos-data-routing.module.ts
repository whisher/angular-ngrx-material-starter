import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicTodosDataMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicTodosDataMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicTodosDataRoutingModule {}
