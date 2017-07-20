import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

 city = "dallas"
  weather = []
  constructor(public _CityService: CityService){
    this.getWeather()
  }
  getWeather(){
    this._CityService.retrieveWeather(this.city)
    .then( weather => { this.weather = weather })
    .catch( err => { console.log(err); })

  }

  ngOnInit() {
  }

}
