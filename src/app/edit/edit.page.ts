import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  itemCollection: AngularFirestoreDocument<any>;
  items: Observable<any>;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.itemCollection = firestore.doc<any>('works/' + this.id);
    this.items = this.itemCollection.valueChanges();
  }

  db_name: string;
  db_numid: string;
  db_work: string;

  ngOnInit() {
    this.items.subscribe((data: any) => {
      this.db_name = data.name;
      this.db_numid = data.number_id;
      this.db_work = data.work;
      console.log(data)
    })
  }

  edit() {
    const item = {
      name: this.db_name,
      number_id: this.db_numid,
      work: this.db_work
    }
    this.itemCollection.update(item);
  }

}
