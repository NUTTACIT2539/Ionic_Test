import { NgModule } from '@angular/core';  //  ไลบารี่
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgxGaugeModule } from 'ngx-gauge';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppComponent } from './app.component'; // angular  set มาให้
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyBOIob9iI9w6ha3y9-UxiP0K9BMkDfvjTg",
    authDomain: "project-2bc4c.firebaseapp.com",
    databaseURL: "https://project-2bc4c.firebaseio.com",
    projectId: "project-2bc4c",
    storageBucket: "project-2bc4c.appspot.com",
    messagingSenderId: "883514450490",
    appId: "1:883514450490:web:350bd2db69d0c8aa104b03",
    measurementId: "G-3BYMYWEP07"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxGaugeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
