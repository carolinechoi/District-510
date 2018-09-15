import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
  this.statusBar.overlaysWebView(false);
  this.statusBar.backgroundColorByHexString('#1cd780');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  signup = SignupPage;
  login = LoginPage;

}
