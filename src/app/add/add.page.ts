import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  worksCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.worksCollection = firestore.collection<any>('works')
  }

  db_name: string;
  db_numid: string;
  db_work: string;

  add() {
    const id = this.firestore.createId();
    const work = {
      id: id,
      name: this.db_name,
      number_id: this.db_numid,
      work: this.db_work
    }
    this.worksCollection.doc(id).set(work)
      .then(() => {
        this.db_name = ""
        this.db_numid = ""
        this.db_work = ""
      })
  }

  ngOnInit() {
  }

}
