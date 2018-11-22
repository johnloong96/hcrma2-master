import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewprofilePage } from "../viewprofile/viewprofile";
import { HomePage } from "../login/login";
import { ScanPage } from "../scan/scan";

/**
 * Generated class for the AfterloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afterlogin',
  templateUrl: 'afterlogin.html',
})
export class AfterloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  viewprofile(){
    this.navCtrl.setRoot('ViewprofilePage');
  }

  scan(){
    this.navCtrl.setRoot('ScanPage');
  }

  logout(){
    this.navCtrl.setRoot('HomePage');
  }

}
