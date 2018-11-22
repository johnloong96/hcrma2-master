import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from 'ionic-angular';
import { HomePage } from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private toastCtrl: ToastController, private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
      const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (info) {
        let toast = this.toastCtrl.create({
          message: 'Account is successfully sign up',
          duration: 2500,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
        await this.navCtrl.setRoot('HomePage');
      }
    }
    catch (e) {
      console.error(e);
        let toast = this.toastCtrl.create({
          message: 'Password should be at least 6 characters',
          duration: 2500,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
    }
  }
}
