
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

/**
 * Generated class for the CodeCameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-camera',
  templateUrl: 'code-camera.html',
})
export class CodeCameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private qrScanner: QRScanner, private events_manager: EventsManagerProvider) {
  }


  ionViewWillEnter(){
    this.showCamera();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
            console.log('Camera Permission Given');
            let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.events_manager.setResultQRScanner( text );
            this.navCtrl.pop();
            console.log('Scanned something', text);
            this.qrScanner.hide();
            scanSub.unsubscribe(); 
          });
  
          this.qrScanner.show();
        } else if (status.denied) {
          console.log('Camera permission denied');
        } else {
          console.log('Permission denied for this runtime.');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CodeCameraPage');
  }
  
  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
  
  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }
  
  ionViewWillLeave(){
      this.hideCamera(); 
  }
  
}
