import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MarkerService } from './shared/services/marker.service';

import { CoronaChartComponent } from './components/corona-chart/corona-chart.component';
import { CoronaMapComponent } from './components/corona-map/corona-map.component';
import { CoronaRegionComponent } from './components/corona-region/corona-region.component';
import { CoronaWorldComponent } from './components/corona-world/corona-world.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoronaChartComponent,
    CoronaMapComponent,
    CoronaRegionComponent,
    CoronaWorldComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
