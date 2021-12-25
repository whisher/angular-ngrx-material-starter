import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicHomeMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicHomeMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicHomeRoutingModule {}
