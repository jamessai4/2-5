import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalTasePage } from './final-tase.page';

const routes: Routes = [
  {
    path: '',
    component: FinalTasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalTasePageRoutingModule {}
