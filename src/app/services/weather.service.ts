import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  async getLocationForecast(location: string): Promise<any> {
    const locationKey = await this.getLocation(location).then(loc => loc.Key)
    return this.getForecast(locationKey)
  }

  async getLocation(location: string): Promise<any | void> {

    if (localStorage.getItem(location)) {
      return JSON.parse(localStorage.getItem(location)!)

    } else {

      const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=IGQEBSmjasdV04frgQXUqz2xcirrh9Wo&q=${location}`
      return this.http.get(url)
        .toPromise()
        .then((res: any) => {
          localStorage.setItem(location, JSON.stringify(res[0]))
          return res[0];
        }).catch(err => {
          console.log('WeatherService::get - Problem talking to server');
        });

    }
  }

  async getForecast(locKey: string): Promise<any | void> {

    if (localStorage.getItem(locKey)) {
      return JSON.parse(localStorage.getItem(locKey)!);

    } else {

      const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=IGQEBSmjasdV04frgQXUqz2xcirrh9Wo`
      return this.http.get(url)
        .toPromise()
        .then((res: any) => {
          localStorage.setItem(locKey, JSON.stringify(res))
          return res;

        }).catch(err => {
          console.log('WeatherService::get - Problem talking to server');
        });

    }
  }


}
