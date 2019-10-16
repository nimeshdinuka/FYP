import { Component, OnInit , AfterContentInit ,ViewChild, ElementRef} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit ,AfterContentInit {

  latitude:any;
  longitude:any;
  @ViewChild('mapElements',{static: true}) mapNativeElement:ElementRef;
  constructor(private geolocation:Geolocation) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);

      const map = new google.maps.Map (this.mapNativeElement.nativeElement, {
          zoom: 15
      });

      //const infoWindow = new google.maps.InfoWindow;
      const pos = {
       lat:this.latitude,
       lng:this.longitude
      };
      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');
      // infoWindow.open(map);
      map.setCenter(pos);

      const icon = {
        url:'assets/icon/marker.png',
        scaledSize: new google.maps.Size(50,50)
      };

      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title:'EzFood',
        icon:icon
      });

      const contentString = '<div id="content">' +
          '<div id="siteNotice">' +
          '</div>' +
          '<h1 id="firstHeading" class="firstHeading">Kzon</h1>' +
          '<div id="bodyContent">' +
          '<img src="assets/icon/kzon.jpg" width="200">' +
          '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the ' +
          'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
          'south west of the nearest large town, Alice Springs; 450&#160;km ' +
          '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
          'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
          'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
          'Aboriginal people of the area. It has many springs, waterholes, ' +
          'rock caves and ancient paintings. Uluru is listed as a World ' +
          'Heritage Site.</p>' +
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
          'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
          '(last visited June 22, 2009).</p>' +
          '</div>' +
          '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     
  }

}
