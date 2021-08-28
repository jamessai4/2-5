import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalTasePageRoutingModule } from './final-tase-routing.module';

import { FinalTasePage } from './final-tase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalTasePageRoutingModule
  ],
  declarations: [FinalTasePage]
})
export class FinalTasePageModule {}
