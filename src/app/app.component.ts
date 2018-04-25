import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private weather: WeatherService) {}

  ngOnInit(){
    axios.get('api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10')
      .then( res => {
        console.log(res);

        let tempMax = res.data.list.map(res=> res.main.temp_max);
      })
  }


}
