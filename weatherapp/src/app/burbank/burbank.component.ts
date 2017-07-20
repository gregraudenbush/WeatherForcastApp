import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityService } from '../city.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  
  city = "burbank"
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
  
  // City = "burbank"
  
}
