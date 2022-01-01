import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicAboutMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicAboutMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAboutRoutingModule {}
