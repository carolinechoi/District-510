import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Profile } from '../../models/profile.interface';
import { Events } from '../../models/events.interface';

import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: Observable<Profile>;

  event = {} as Events;
  eventsData: Observable<Events[]>;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.eventsData = this.db.list('events').valueChanges();
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.db.object('profile/'+data.uid).valueChanges();
      } else {

      }
    })
  }

}
