import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

import { Events } from '../../models/events.interface';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ImagePicker } from '@ionic-native/image-picker';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';
//import { Crop } from '@ionic-native/crop';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event = {} as Events;

  eventRef$: AngularFireList<Events>; 
  eventImage$: any;

  constructor(private camera: Camera, public imagePicker: ImagePicker, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.eventRef$ = this.db.list('events');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addEvent (event: Events) {
    this.eventRef$.push({
      eventTitle: this.event.eventTitle,
      eventDescription: this.event.eventDescription,
      location: this.event.location,
      category: this.event.category,
      image: this.event.image
    });
    this.navCtrl.push(HomePage);
  }

  async takePhoto() {    
    try { 
      //Defining camera options
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    const result = await this.camera.getPicture(options);
    
    const image = 'data:image/jpeg;base64,'+result;

    const pictures = storage().ref('pictures');
    pictures.putString(image, 'data_url');
  
    this.eventImage$ = image + 'data_url'; 
    }

    catch(e){
      console.error(e);
    }
  
  }

  // pickImage() {
  //   const 
  // }
}

