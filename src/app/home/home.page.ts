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

  users = {
    "fullname" : "กิตติธัช พลายแก้ว",
    "username" : "james_kitt",
    "addess" : "จ.นครปฐม อ.สามพราน ต.กระทุ่มล้ม",
    "img_url" : "https://cms.dmpcdn.com/moviearticle/2021/04/30/7aed98d0-a988-11eb-ae11-cf473c2984b4_original.jpg"
  }

  jsonString = JSON.stringify(this.users)

  jsonobj(){
    console.log(this.users);
  }

}
