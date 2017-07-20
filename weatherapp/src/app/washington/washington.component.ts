import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  city = "washingtondc"
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
