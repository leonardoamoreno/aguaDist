
import { Component } from '@angular/core';
import { Loading, LoadingController, NavController } from 'ionic-angular';

import { Observable } from 'rxjs';

import { ProductsPage } from './../products/products';
import { Store } from './../../models/store.model';
import { StoreService } from './../../providers/store.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stores: Observable<Store[]>;
  loading: Loading;

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public storeService: StoreService
  ) {

  }
  ionViewWillEnter() {
    //this.loading = this.showLoading();
  }

  ionViewDidLoad() {
    this.loading = this.showLoading();
    this.stores = this.storeService.stores;   
    this.loading.dismiss();
  }

  getStore(id: string): void {

    this.storeService.getStore(id)
      .first()
      .subscribe((s: Store) => {
        this.navCtrl.push(ProductsPage, { store: s });
      });
    ;

  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    return loading;
  }

}
