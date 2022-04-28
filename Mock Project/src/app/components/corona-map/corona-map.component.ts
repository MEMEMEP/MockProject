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

  constructor(private markerService: MarkerService) { }

  ngOnInit(): void {
    this.markerService.ongetData().subscribe((res: Corona[]) => {
      this.coronaData = res;
      const maxCase = Math.max(...res.map(o => o.confirmed), 0);

      console.log(res.map(o => o.confirmed));

      for (const c of res) {
        const lat = c.location.lat;
        const lng = c.location.lng;
        if(c.confirmed<100000){
        let circle = L.circleMarker([lat, lng],
          {
            // radius: MarkerService.scaledRadius(c.confirmed, maxCase)
            fillColor: "#FF5733",
            color: "#FF5733",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.4,
            radius: 10
          }
        )
          .bindPopup(`Country: ${c.countryregion}, Case: ${c.confirmed}, Deaths: ${c.deaths}, Recovered: ${c.recovered}`)
          .addTo(this.map);
        }
        else if(c.confirmed>=100000 && c.confirmed<1000000){
          let circle = L.circleMarker([lat, lng],
            {
              // radius: MarkerService.scaledRadius(c.confirmed, maxCase)
              fillColor: "#FF5733",
              color: "#FF5733",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              radius: 20
            }
          )
            .bindPopup(`Country: ${c.countryregion}, Case: ${c.confirmed}, Deaths: ${c.deaths}, Recovered: ${c.recovered}`)
            .addTo(this.map);
        }
        else if(c.confirmed>1000000&&c.confirmed<10000000){
          let circle = L.circleMarker([lat, lng],
            {
              // radius: MarkerService.scaledRadius(c.confirmed, maxCase)
              fillColor: "#FF5733",
              color: "#FF5733",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              radius: 30
            }
          )
            .bindPopup(`Country: ${c.countryregion}, Case: ${c.confirmed}, Deaths: ${c.deaths}, Recovered: ${c.recovered}`)
            .addTo(this.map);
        }
        else if(c.confirmed>10000000){
          let circle = L.circleMarker([lat, lng],
            {
              // radius: MarkerService.scaledRadius(c.confirmed, maxCase)
              fillColor: "#FF5733",
              color: "#FF5733",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.4,
              radius: 50
            }
          )
            .bindPopup(`Country: ${c.countryregion}, Case: ${c.confirmed}, Deaths: ${c.deaths}, Recovered: ${c.recovered}`)
            .addTo(this.map);
        }
      }
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // const marker =L.marker([51.5, -0.09]).addTo(this.map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();
    //  const circle = L.circleMarker([ 14.058324, 108.277199 ], { radius: 50 }).addTo(this.map)
  }


  ngAfterViewInit(): void {
    this.initMap();
  }



}