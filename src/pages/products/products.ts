import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import { Product } from './../../models/product.model';
import { Review } from '../../models/review.model';
import { Store } from './../../models/store.model';
import { StoreService } from './../../providers/store.service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  store: Store;
  pageTitle: string;
  products: Observable<Product[]>;
  reviews:Observable<Review[]>;

  view: string = 'catalog';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storeService: StoreService
  ) { }

  ionViewDidLoad() {
    this.store = this.navParams.get('store');
    this.pageTitle = this.store.name;
    this.products = this.storeService.getProducts(this.store.$id);
    this.view = 'catalog';
    this.products.subscribe(console.log);

  }

  getValue(value): void {
    console.log(value);

    if(value === 'p')
    {
      this.products = this.storeService.getProducts(this.store.$id);
    }
    else if(value === 'r')
    {
      this.reviews = this.storeService.getReviews(this.store.$id);
    }
    this.products.subscribe(console.log);
  }

}
