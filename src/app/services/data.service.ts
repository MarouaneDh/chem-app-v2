import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  //getting data
  getData() {
    return this.http.get('https://periodic-table-api-marouane.herokuapp.com/chemical-elements')
  }
}
