import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUsersMainComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: AdminUsersMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule {}
