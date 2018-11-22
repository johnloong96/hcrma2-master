import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/login/login';
import { ScanPage } from '../pages/scan/scan';
import { Camera } from '@ionic-native/camera';
import { NgProgressModule } from '@ngx-progressbar/core';
import { CommonModule } from "@angular/common";
import {FIREBASE_CONFIG} from "./firebase.confiq";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    ScanPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    NgProgressModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
