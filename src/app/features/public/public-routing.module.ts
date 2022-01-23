// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AccountUserGuard } from '@domains/account';
import { AuthGuard, AuthLoggedGuard } from '@domains/auth';

// Component
import { PublicLayoutMainComponent } from './layout/containers';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutMainComponent,
    children: [
      {
        path: '',
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
          import('./contact/contact.module').then((m) => m.PublicContactModule),
        data: { title: 'iwdf.meta.title.contact' }
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.PublicHomeModule),
        data: { title: 'iwdf.meta.title.home' }
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.PublicAboutModule),
        data: { title: 'iwdf.meta.title.about' }
      },
      {
        path: 'user',
        canLoad: [AuthGuard, AccountUserGuard],
        loadChildren: () =>
          import('./user/user.module').then((m) => m.PublicUserModule),
        data: { title: 'iwdf.meta.title.user' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
