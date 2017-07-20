import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // city = "cleveland"
  // weather = []
  // constructor(public _CityService: CityService){
  //   this.getWeather()
  // }
  // getWeather(){
  //   this._CityService.retrieveWeather(this.city)
  //   .then( weather => { this.weather = weather })
  //   .catch( err => { console.log(err); })

  // }

}
