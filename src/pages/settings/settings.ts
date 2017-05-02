import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [WeatherService]
})


export class SettingsPage {
  private searchStr: string;
  private results: Object;
  private defaultCity: string;


  static get parameters(){
    return [[NavController], [WeatherService]];
  }

  constructor(public nav: NavController, public weatherService: WeatherService) {
    this.nav = nav;
    this.weatherService = weatherService;
    this.searchStr;
    this.defaultCity;
    this.results = [];
  }

  ngOnInit(){
    this.getDefaultCity();
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
    .subscribe(res => {
      this.results = res.RESULTS;
    });
  }

  getDefaultCity() {
    if (localStorage.city !== undefined) {
        this.defaultCity = JSON.parse(localStorage.city).name;
    } else {
      this.defaultCity = '';
    }
  }

  setDefaultCity(city) {
    this.results = [];

    if (typeof Storage !== "undefined") {
        localStorage.city = JSON.stringify(city);
        this.searchStr = city.name;
        this.getDefaultCity();
    } else {
      console.log('LocalStorage Not Supported')
    }

    // this.weatherService.getWeather(city.zmw)
    //   .subscribe(weather => {
    //     this.weather = weather.current_observation;
    //   });
  }

  saveChanges() {
    this.nav.setRoot(WeatherPage);
  }

}
