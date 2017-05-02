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
  private zmw: string;
  private weather: Object;
  private results: Object;
  private searchStr: string;


  static get parameters(){
    return [[WeatherService]];
  }


  constructor(public weatherService: WeatherService) {
    this.weatherService = weatherService;
    this.zmw = '00000.147.12838';
    this.weather;
    this.searchStr;
    this.results;
  }

  ngOnInit(){
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  chooseCity(city) {
    this.results = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

}
