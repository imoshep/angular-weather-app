import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherHttpResponse } from 'src/app/interfaces/http-response.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnDestroy {
  constructor(private weatherService: WeatherService) {}
  searchInput: string = '';
  searchResult: WeatherHttpResponse;
  searchSubscription: Subscription;

  onSubmit() {
    this.weatherService.getWeather(this.searchInput).subscribe(
      (response: WeatherHttpResponse) => {
        this.searchResult = { ...response };
      },
      (error: HttpErrorResponse) => {
        this.searchResult = { ...error.error };
      }
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
