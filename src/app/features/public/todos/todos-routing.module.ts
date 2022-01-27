// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page
import { PublicTodosPageComponent } from './todos-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicTodosPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'entity'
      },
      {
        path: 'data',
        loadChildren: () =>
          import('./todos-data/todos-data.module').then(
            (m) => m.PublicTodosDataModule
          )
      },
      {
        path: 'entity',
        loadChildren: () =>
          import('./todos-entity/todos-entity.module').then(
            (m) => m.PublicTodosEntityModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicTodosRoutingModule {}
