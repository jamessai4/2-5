import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(
    private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('works');
    this.items = this.itemCollection.valueChanges();
  }



  remove(id: string) {
    this.itemCollection.doc(id).delete()
  }

  ngOnInit() {
  }

}
