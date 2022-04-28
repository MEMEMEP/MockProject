import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corona } from '../models/corona.model';

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  private readonly BASE_URL = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';

  constructor(private http: HttpClient) { }

  public ongetData(){
    return this.http.get<Corona[]>(`${this.BASE_URL}`);
  }

}
