// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PublicAuthLoginComponent } from './containers';
import { PublicAuthSigninComponent } from './containers';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: PublicAuthLoginComponent
  },
  {
    path: 'signin',
    component: PublicAuthSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAuthRoutingModule {}
