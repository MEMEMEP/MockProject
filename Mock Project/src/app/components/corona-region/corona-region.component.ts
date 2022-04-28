import { Component, OnInit } from '@angular/core';
import { HandleService } from 'src/app/shared/services/handle.service';
import { Corona } from './../../shared/models/corona.model';

@Component({
  selector: 'app-corona-region',
  templateUrl: './corona-region.component.html',
  styleUrls: ['./corona-region.component.css']
})
export class CoronaRegionComponent implements OnInit {
  public coronaData!: Corona[];

  constructor(private handleService: HandleService) { }

  ngOnInit(): void {
    this.handleService.ongetData().subscribe((data: any) => {
      this.coronaData = data;
    });
  }

  public getCountry(DATA: Corona[]) {
    return [...new Set(this.coronaData.map((item: any) => item.countryregion))];
  }

}
