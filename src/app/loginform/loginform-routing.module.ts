import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginformPage } from './loginform.page';

const routes: Routes = [
  {
    path: '',
    component: LoginformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginformPageRoutingModule {}
