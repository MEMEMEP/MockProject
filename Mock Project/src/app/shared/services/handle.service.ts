import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  private data: any[] = [];
  private readonly BASE_URL = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';

  constructor(private http: HttpClient) { }

  public getData(){
    return this.data;
  }
  public ongetData(){
    return this.http.get(`${this.BASE_URL}`);
  }
}
