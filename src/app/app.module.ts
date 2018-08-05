import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CartPage } from './../pages/cart/cart';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { ProductsPage } from './../pages/products/products';
import { StoreService } from '../providers/store.service';
import { TabsPage } from '../pages/tabs/tabs';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDXhxW49BG96JTTwLs1-Ok3dFCslJwwic0",
  authDomain: "iwater-3bded.firebaseapp.com",
  databaseURL: "https://iwater-3bded.firebaseio.com",
  projectId: "iwater-3bded",
  storageBucket: "iwater-3bded.appspot.com",
  messagingSenderId: "513711948824"
};


@NgModule({
  declarations: [
    MyApp,
    CartPage,
    HomePage,
    ProductsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    HomePage,
    ProductsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StoreService
  ]
})
export class AppModule { }
