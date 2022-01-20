// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AdminLayoutMainComponent } from './layout/containers';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutMainComponent,

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.AdminDashboardModule
          )
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.AdminUsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
