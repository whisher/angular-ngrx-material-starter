import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicContactMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicContactMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicContactRoutingModule {}
