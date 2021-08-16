import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.page.html',
  styleUrls: ['./show-list.page.scss'],
})
export class ShowListPage implements OnInit {

  contactname = "";
  names = [];
  item: any;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async addcontact() {
    if (this.contactname == "") {
      const alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอกข้อมูลให้ครบ!!!',
        buttons: ['OK']
      });
      await alert.present();
    } else
      this.names.push(this.contactname);
    this.contactname = "";
  }


  // addcontact(){
  //   this.names.push(this.contactname);
  //   this.contactname = "";
  // }

  // remove(item) {
  //   let index = this.names.indexOf(item);
  //   this.names.splice(index);
  // }

  async remove(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน!',
      message: 'คุณต้องการที่จะ  <strong>ลบ</strong>  รายชื่อมั้ย!?!?!',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Okay');
            let index = this.names.indexOf(item);
            this.names.splice(index);
          }
        }
      ]
    });

    await alert.present();
  }



}
