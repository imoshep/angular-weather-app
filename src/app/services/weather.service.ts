import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import {
  catchError,
  concatMap,
  retry,
  take,
  timeInterval,
} from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { WeatherHttpResponse } from '../interfaces/http-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(location: String): Observable<WeatherHttpResponse> {
    return timer(0, 300000)
      .pipe(timeInterval())
      .pipe(
        concatMap(() =>
          this.http.get<WeatherHttpResponse>(
            `${environment.apiUrl}/google?location=${location}`
          )
        )
      );
  }
}
