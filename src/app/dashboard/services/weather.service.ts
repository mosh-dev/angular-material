import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  dailyForecast() {
    // tslint:disable-next-line:max-line-length
    const url = 'http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
    return this.http
      .get(url)
      .pipe(map(result => result));
  }
}
