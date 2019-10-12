import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-getdirections',
  templateUrl: './getdirections.page.html',
  styleUrls: ['./getdirections.page.scss'],
})



export class GetdirectionsPage implements OnInit {

  lat;
  lon;
  @ViewChild('map',{static: true}) mapNativeElement:ElementRef;
  constructor(private geolocation : Geolocation) { 
    
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
     });
  }

  
}
