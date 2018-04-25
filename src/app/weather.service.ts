import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor() { }

  dailyForecast(){
    return axios.get('api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10')
    
  }

}
