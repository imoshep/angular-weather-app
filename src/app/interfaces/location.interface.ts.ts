import { Subscription } from 'rxjs';
import { WeatherHttpResponse } from './http-response.interface';
import { Weather } from './weather.interface';

export interface LocationInterface {
  name: string;
  data?: Weather;
  error?: string;
  subscription?: Subscription;
}
