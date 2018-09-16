import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { uploadPicture } from '../../services/uploadPicture.service';

import { Platform, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              private afDB: AngularFireDatabase,
              private pictureUtils: uploadPicture) {
  }

  ionViewDidLoad(){

  }

  takePhoto () {
    this.pictureUtils.uploadFromCamera();
  }
}
