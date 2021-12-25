// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPageComponent } from './page/logout.component';

export const routes: Routes = [{ path: '', component: LogoutPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule {}
