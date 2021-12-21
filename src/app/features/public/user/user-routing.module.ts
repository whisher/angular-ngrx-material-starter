import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicUserMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicUserMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicUserRoutingModule {}
