import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCXEwRC2DV_mZ_se8Lef-Wf7D2Mz_C5UQE",
      authDomain: "testfirebase-a2ac1.firebaseapp.com",
      databaseURL: "https://testfirebase-a2ac1-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "testfirebase-a2ac1",
      storageBucket: "testfirebase-a2ac1.appspot.com",
      messagingSenderId: "419882905830",
      appId: "1:419882905830:web:f2ea5fd98fa0b5126c0b27"
    }),
    AngularFirestoreModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
