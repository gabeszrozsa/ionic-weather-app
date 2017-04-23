import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})

export class WeatherPage {
  private city: string;
  private state: string;


  static get parameters(){
    return [[WeatherService]];
  }


  constructor(public weatherService: WeatherService) {
    this.weatherService = weatherService;
    this.city = 'Boston';
    this.state = 'MA';
  }

  ngOnInit(){
    this.weatherService.getWeather(this.city,this.state)
      .subscribe(weather => {
        console.log(weather);
      })
  }

}
