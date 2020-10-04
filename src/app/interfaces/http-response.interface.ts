import { Weather } from 'src/app/interfaces/weather.interface';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
export interface WeatherHttpResponse {
  success: boolean;
  data: Weather;
  error?: WeatherHttpResponse;
}
