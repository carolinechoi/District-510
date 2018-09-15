import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LandingPage } from '../landing/landing';
import { TabsPage } from '../tabs/tabs';

import { Users } from '../../models/users.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';

import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	newUser = {} as Users;
	newUserRef$: Observable<Users[]>;

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  	this.newUserRef$ = this.database.object('users');
  }

  async addUser(newUser: Users) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
    console.log(result);
    if (result) {
      this.navCtrl.push(ProfilePage);
    }
    }
    catch(e) {
      this.toast.create({
        message: e,
        duration: 2000
      }).present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login=LoginPage;
  landing=LandingPage;
}
