import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  name1:string;
  subject1:string;
  comname1:string;
  fname1:string;

  constructor(
    private navCtrl : NavController,
    private route : ActivatedRoute
  ) {
    this.name1 = this.route.snapshot.paramMap.get('name');
    this.subject1 = this.route.snapshot.paramMap.get('subject');
    this.comname1 = this.route.snapshot.paramMap.get('comname');
    this.fname1 = this.route.snapshot.paramMap.get('fullname');
  }

  ngOnInit() {
    console.log(this.name1,this.subject1,this.comname1)
  }

  goback(){
    this.navCtrl.navigateBack('home');
  }

}
