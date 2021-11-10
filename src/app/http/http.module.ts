import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpPageRoutingModule } from './http-routing.module';

import { HttpPage } from './http.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpPageRoutingModule
  ],
  declarations: [HttpPage]
})
export class HttpPageModule {}
