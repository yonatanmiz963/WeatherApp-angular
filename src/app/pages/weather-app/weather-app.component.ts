import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss'],
})
export class WeatherApp implements OnInit {

  constructor(private weatherService: WeatherService) { }

  public locationName = '';
  public currForecast: any;

  onSetLocation(): void {
    this.weatherService.getLocationForecast(this.locationName)
      .then(locationForeast => {
        console.log('locationForeast:', locationForeast)
        this.currForecast = locationForeast ? locationForeast : null
      })
      .catch((err) => console.log(err))
  }


  ngOnInit(): void {
  }

}
