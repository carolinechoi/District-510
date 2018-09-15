import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { Users } from '../../models/users.interface';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	oldUser = {} as Users;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toast: ToastController) {
  }

  async login(oldUser: Users) {
  	try {
  		const result = await this.afAuth.auth.signInWithEmailAndPassword(oldUser.email, oldUser.password);
  		if (result) {
  			this.navCtrl.setRoot(TabsPage);
  		} else {
  			this.toast.create({
  			message: "Incorrect password or email",
  			duration: 3000
  			}).present();
  		}
  	}
  	catch(e) {
      this.toast.create({
        message: "Incorrect password or email! Possibly: "+e,
        duration: 4000
      }).present();
  	}
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup = SignupPage;

}
