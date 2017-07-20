import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CityService {

  constructor(private _http: Http) { }
   retrieveWeather(city) {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=fbb6eb66a0a17a24692cbb99e46a9541").map(data=>data.json()).toPromise()
  }
}
