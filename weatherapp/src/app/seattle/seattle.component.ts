import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  city = "seattle"
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
