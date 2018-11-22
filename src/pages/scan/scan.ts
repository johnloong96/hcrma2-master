import { Camera, PictureSourceType } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { NgProgress } from "@ngx-progressbar/core";
import * as Tesseract from 'tesseract.js';
import { AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  selectedImage: string;
  imageText: string;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, private camera: Camera, public progress: NgProgress) {

  }

  selectSource(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },{
          text: 'Capture Image',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getPicture(sourceType: PictureSourceType){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    }).then(imageData => {
      this.selectedImage = `data:image/jpeg;base64, ${imageData}`;
    });
  }

  recognizeImage(){
    Tesseract.recognize(this.selectedImage)
      .progress(message => {
        if (message.status === 'recognize text'){
          this.progress.set(message.progress);
        }
      })
      .catch(err => console.error(err))
      .then(result => {
        this.imageText = result.text;
        console.log('result', result);
      })
      .finally(resultOrError => {
        this.progress.complete();
      })
  }

  save(){
    const itemRef = this.db.list('item');
    itemRef.push({name: this.imageText});
  }
}
