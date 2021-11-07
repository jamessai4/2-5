import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonobjPageRoutingModule } from './jsonobj-routing.module';

import { JsonobjPage } from './jsonobj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonobjPageRoutingModule
  ],
  declarations: [JsonobjPage]
})
export class JsonobjPageModule {}
