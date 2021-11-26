import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) {}

  getData(){
    return this.http.get("https://my.api.mockaroo.com/dates.json?key=4fa3c8b0")
  }

}
