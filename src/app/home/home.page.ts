import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

interface deviceInterface {
  id?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  locationgeo?:string,
  isVirtual?: boolean,
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public deviceInfo: deviceInterface = {};
  
  constructor(private device: Device, private geolocation: Geolocation) {

  }
  lat?: any;
  lng?: any;

  ngOnInit(){
    this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
    console.log('lat' + this.lat);
     this.lng = resp.coords.longitude;
     console.log('lat' + this.lng);

     
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

  getInfo() {

    this.deviceInfo.id = this.device.uuid;
    this.deviceInfo.model = this.device.model;
    this.deviceInfo.cordova = this.device.cordova;
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.version = this.device.version;
    this.deviceInfo.manufacturer = this.device.manufacturer;
    this.deviceInfo.serial = this.device.serial;
    this.deviceInfo.isVirtual = this.device.isVirtual;

  }
}
