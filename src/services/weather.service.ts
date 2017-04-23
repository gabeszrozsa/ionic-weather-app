import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class WeatherService {
  private apiKey: string;
  private conditionsUrl: string;

  static get parameters(){
    return [Http];
  }

  constructor (public http:Http){
    this.http = http;
    this.apiKey = '9187165f27567c57';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather (city, state){
    return this.http.get(this.conditionsUrl +'/' + state + '/' + city + '.json')
      .map(res => res.json());
  }
}
