import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CodeCameraPage } from '../code-camera/code-camera';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultQRScanner;

  constructor(
    public navCtrl: NavController,
    private events_manager: EventsManagerProvider) {

      this.events_manager.getResultQRScanner().subscribe( data => this.resultQRScanner = data );

  }

  openQRScanner() {
    this.navCtrl.push( CodeCameraPage );
  }


}
