import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the EventsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsManagerProvider {

  resutlScanner = new Subject<any>();

  constructor() {
  }

  setResultQRScanner( resultScanner ) {
    this.resutlScanner.next( resultScanner );
  } 

  getResultQRScanner() {
    return this.resutlScanner.asObservable();
  }

}
