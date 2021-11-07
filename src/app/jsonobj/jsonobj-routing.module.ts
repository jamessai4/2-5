import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonobjPage } from './jsonobj.page';

const routes: Routes = [
  {
    path: '',
    component: JsonobjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonobjPageRoutingModule {}
