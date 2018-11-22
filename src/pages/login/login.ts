import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User} from "../../models/user";
import { AngularFireAuth} from "angularfire2/auth";
import { ToastController } from 'ionic-angular';
import { AfterloginPage} from "../afterlogin/afterlogin";


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class HomePage {

  user = {} as User;

  constructor(private toastCtrl: ToastController, private fireAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  async login(user: User) {
    try {
      const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (info) {
        await this.navCtrl.setRoot('AfterloginPage');
      }
    }
    catch (e) {
      console.error(e);
      let toast = this.toastCtrl.create({
        message: 'Email or Passwored invalid',
        duration: 2500,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
}
