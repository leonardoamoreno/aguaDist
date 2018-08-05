import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
//import { AngularFireAuth } from "angularfire2/auth";
//import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { BaseService } from './base.service';
import { FirebaseApp } from "angularfire2";
import { Review } from './../models/review.model';
import { Store } from './../models/store.model';
import { Product } from './../models/product.model';

@Injectable()
export class StoreService extends BaseService {

  storesRef: AngularFirestoreCollection<Store>;
  stores: Observable<Store[]>;
  
  //currentStore: AngularFireObject<Store>;

  constructor(    
    public dbFire: AngularFirestore,
    public firebaseApp: FirebaseApp
  ) {
    super();
    
    this.getStores();
  }

  public getStores(): void {
    this.storesRef = this.dbFire.collection<Store>('stores');
    this.stores = this.storesRef.snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as Store;
        const $id = c.payload.doc.id;
        return { $id, ...data };
      });
    });


    // this.storesRef = this.db.list<Store>('/stores/');
    // this.stores = this.storesRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
  }

  getStore(id: string): Observable<Store> {
   
    return this.dbFire.doc<Store>('/stores/' + id).snapshotChanges().map(c => ({ $id: c.payload.id, ...c.payload.data() as Store }));

  }

  getProducts(idStore: string): Observable<Product[]>
  {
    return this.dbFire.collection('stores').doc(idStore).collection('products')
    .snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as Product;
        const id = c.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getReviews(idStore: string): Observable<Review[]>
  {
    return this.dbFire.collection('stores').doc(idStore).collection('reviews')
    .snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as Review;
        const id = c.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addStore(): void {
    let storeNew = new Store('Marabá Agua', '12.32', '123.32', './assets/imgs/dist7.jpg', '10:00', '12:00', '4.5', null);

    // let ref = this.db.list('stores');
    // ref.push(storeNew);

  }


}
