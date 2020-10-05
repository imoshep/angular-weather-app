import { Component, OnInit } from '@angular/core';
import { WeatherHttpResponse } from 'src/app/interfaces/http-response.interface';
import { LocationInterface } from 'src/app/interfaces/location.interface.ts';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favsArray: Array<LocationInterface> = [
    { name: 'tel aviv' },
    { name: 'berlin' },
  ];
  isLoading = false;

  constructor(private weatherService: WeatherService) {}

  populateData() {
    this.isLoading = true;

    this.favsArray.map((location) => {
      this.weatherService.getWeather(location.name).subscribe(
        (response) => {
          location.data = response.data;
          this.isLoading = false;
        },
        (error) => {
          location.error = error.error;
          this.isLoading = false;
        }
      );
    });
  }

  ngOnInit(): void {
    this.populateData();
  }
}
