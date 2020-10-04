import { Component, OnInit, SimpleChanges } from '@angular/core';
import { WeatherHttpResponse } from 'src/app/interfaces/http-response.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  constructor(private weatherService: WeatherService) {}
  searchInput: string = '';
  searchResult: WeatherHttpResponse;
  weatherLength: number;

  onSubmit() {
    // if (interval) clearInterval(interval);
    this.weatherService.getWeather(this.searchInput).subscribe(
      (response: WeatherHttpResponse) => {
        this.searchResult = { ...response };
      },
      (error) => {
        this.searchResult = { ...error.error };
      }
    );
    // interval = setInterval(async () => {
    //   response = await getWeather(inputValue);
    //   setSearchResult({ ...response });
    // }, 300000);
  }
}
