import { Component, OnInit , AfterContentInit ,ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-defaultmap',
  templateUrl: './defaultmap.page.html',
  styleUrls: ['./defaultmap.page.scss'],
})
export class DefaultmapPage implements OnInit, AfterContentInit {
  map;

  @ViewChild('mapElement',{static: true}) mapElement;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.map = new google.maps.Map (
      this.mapElement.nativeElement,{
        center :{lat: 6.795658, lng: 79.887643},
        zoom: 15
      }
      
    );
  }

}
