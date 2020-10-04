import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { WeatherHttpResponse } from '../interfaces/http-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeather(location: String): Observable<WeatherHttpResponse> {
    console.log('service running, location: ', location);
    return this.http.get<WeatherHttpResponse>(
      `${environment.apiUrl}/google?location=${location}`
    );
  }
}
