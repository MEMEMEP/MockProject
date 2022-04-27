import { Component, OnInit } from '@angular/core';
import { HandleService } from './../../shared/services/handle.service';

@Component({
  selector: 'app-corona-world',
  templateUrl: './corona-world.component.html',
  styleUrls: ['./corona-world.component.css']
})
export class CoronaWorldComponent implements OnInit {
  public coronaData!: any;

  constructor(private handleService: HandleService) { }

  ngOnInit(): void {
    this.coronaData = this.handleService.ongetData().subscribe((data:any) => {console.log(data)});
  }

}
