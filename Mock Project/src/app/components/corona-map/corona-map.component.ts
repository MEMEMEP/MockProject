import { Component, OnInit } from '@angular/core';

import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import { MarkerService } from './../../shared/services/marker.service';
import { Corona } from './../../shared/models/corona.model';

@Component({
  selector: 'app-corona-map',
  templateUrl: './corona-map.component.html',
  styleUrls: ['./corona-map.component.css']
})
export class CoronaMapComponent implements OnInit {
  public coronaData!: Corona[];

  private map!: L.Map;
  layers: any = [];

  constructor(private markerService: MarkerService) { }

  ngOnInit(): void {
    this.markerService.ongetData().subscribe((res: Corona[]) => {
      this.coronaData = res;
      const maxCase = Math.max(...res.map(o => o.confirmed), 0);

      console.log(res.map(o => o.confirmed));

      this.coronaData.forEach((e: any) => {
        if (e.confirmed <= 3000000) {
          const circle = L.circleMarker([e.location.lat, e.location.lng],
            {
              fillColor: "#FF5733",
              color: "#FF5733",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              radius: 10
            }
          )
            .bindPopup(`Country: ${e.countryregion}, Case: ${e.confirmed}, Deaths: ${e.deaths}, Recovered: ${e.recovered}`)
            this.layers.push(circle);
        } else if (e.confirmed > 3000000) {
          const circle = L.circleMarker([e.location.lat, e.location.lng],
            {
              fillColor: "#FF5733",
              color: "#FF5733",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              radius: e.confirmed/300000
            }
          )
            .bindPopup(`Country: ${e.countryregion}, Case: ${e.confirmed}, Deaths: ${e.deaths}, Recovered: ${e.recovered}`)
            this.layers.push(circle);
        }
      });


// ////// move to the Country  of the map has:
      // this.map.panTo(new L.LatLng(c.location.lat, c.location.lng));
    });

  }



  changeView() {
    this.map.panTo(new L.LatLng(40.737, -73.923));
  }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(39.8282, -98.5795),
  };

}
