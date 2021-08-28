import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl : NavController
  ) {}

  gotoAbout(){
    this.navCtrl.navigateForward(['about']);

    this.navCtrl.navigateForward(['about',{
      name: 'James',
      subject:'Ionic',
      comname:'CuteCat',
      fullname:'Kittithach Playkeaw',
    }]);
  }

}
