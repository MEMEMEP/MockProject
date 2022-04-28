import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/shared/services/covid19.service';

@Component({
  selector: 'app-corona-world',
  templateUrl: './corona-world.component.html',
  styleUrls: ['./corona-world.component.css']
})
export class CoronaWorldComponent implements OnInit {
  wouldWide: any;
  fatalityRate :string ='';
  constructor(private httpService : Covid19Service) { }

  ngOnInit(): void {
    this.httpService.getDataWorldWide().subscribe((data: any) => {
      this.wouldWide = data;
      // console.log(this.wouldWide);
      this.fatalityRate = (this.wouldWide.deaths*100 / this.wouldWide.confirmed).toFixed(2);
      /* console.log(this.fatalityRate); */
  })


  }
}
