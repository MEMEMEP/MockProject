import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class Covid19Service implements OnInit{
  url ='https://master-covid-19-api-laeyoung.endpoint.ainize.ai/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
  
    })
  };

  messageSource = new BehaviorSubject<string>("");
  messageSourceC = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  currentMessageC = this.messageSourceC.asObservable()

  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  getDataWorldWide(){
  let request = 'jhu-edu/brief';
      return this.http.get(this.url + request);
  }
  getAll(){
    let request = 'jhu-edu/latest'
    return this.http.get(this.url + request);
  }
  
  getCountry(idCountry:string){
    let request = 'jhu-edu/timeseries?iso2='
    return this.http.get(this.url + request + idCountry);
  }
  
  changeMessage(message:string) {
    this.messageSource.next(message);
    console.log(message)
  }
  changeMessageC(message:string) {
    this.messageSourceC.next(message);
    console.log(message)
  }

}
