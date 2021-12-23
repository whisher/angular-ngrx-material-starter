// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AccountUserGuard } from '@stores/account';
import { AuthGuard, AuthLoggedGuard } from '@stores/auth';

// Component
import { PublicLayoutMainComponent } from './layout/containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'auth',
        canLoad: [AuthLoggedGuard],
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.PublicAuthModule)
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.PublicContactModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.PublicHomeModule)
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.PublicAboutModule)
      },
      {
        path: 'user',
        canLoad: [AuthGuard, AccountUserGuard],
        loadChildren: () =>
          import('./user/user.module').then((m) => m.PublicUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
