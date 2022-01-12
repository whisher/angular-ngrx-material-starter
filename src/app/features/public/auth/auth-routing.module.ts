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
    component: PublicAuthLoginComponent,
    data: { title: 'iwdf.meta.title.login' }
  },
  {
    path: 'signin',
    component: PublicAuthSigninComponent,
    data: { title: 'iwdf.meta.title.signin' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAuthRoutingModule {}
