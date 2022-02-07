import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(
    private firestore: AngularFirestore,
    public alertController: AlertController
    ) {
    this.itemCollection = firestore.collection<any>('works',ref => ref.orderBy('number_id','asc'));
    this.items = this.itemCollection.valueChanges();
  }

  // remove(id:string){
  //   this.itemCollection.doc(id).delete()
  //   console.log(this.items)
  // }

  async remove(id:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ฮั่นแน่',
      message: 'จะลบจริงๆหรอ !!??',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ลบก็ได้',
          handler: () => {
            console.log('Confirm Okay');
            this.itemCollection.doc(id).delete()
          }
        }
      ]
    });

    await alert.present();
  }



  ngOnInit() {
  }

}
