import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class WeatherService {
  private apiKey: string;
  private conditionsUrl: string;
  private searchUrl: string;

  static get parameters(){
    return [Http];
  }

  constructor (public http:Http){
    this.http = http;
    this.apiKey = '9187165f27567c57';
    this.conditionsUrl = 'http://localhost:8100/api/' + this.apiKey + '/conditions/q';
    this.searchUrl = 'http://localhost:8100/search/aq?query=';
  }

  // getWeather (city, state){
  //   return this.http.get(this.conditionsUrl +'/' + state + '/' + city + '.json')
  //     .map(res => res.json());
  // }

  getWeather (zmw){
    return this.http.get(this.conditionsUrl +'/zmw:' + zmw + '.json')
      .map(res => res.json());
  }

  searchCities(searchStr) {
    return this.http.get(this.searchUrl + '' + searchStr)
      .map(res => res.json());
  }
}
