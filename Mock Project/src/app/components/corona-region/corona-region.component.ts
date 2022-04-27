import { Component, OnInit } from '@angular/core';
import { HandleService } from 'src/app/shared/services/handle.service';

@Component({
  selector: 'app-corona-region',
  templateUrl: './corona-region.component.html',
  styleUrls: ['./corona-region.component.css']
})
export class CoronaRegionComponent implements OnInit {
  public coronaData!: any;

  constructor(private handleService: HandleService) { }

  ngOnInit(): void {
    this.coronaData = this.handleService.ongetData().subscribe((data:any) => {console.log(data)});
  }

}
