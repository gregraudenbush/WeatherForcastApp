import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city = "chicago"
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
