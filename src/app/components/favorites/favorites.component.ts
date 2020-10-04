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

    // Promise.all(
    this.favsArray.map((location) => {
      console.log('inside map for: ', location);

      this.weatherService.getWeather(location.name).subscribe(
        (response) => {
          location.data = response.data;
          console.log(location, response);
          this.isLoading = false;
        },
        (error) => {
          location.error = error.error;
          console.log(location, error);
          this.isLoading = false;
        }
      );
    });

    // ).then(() => {
    //   this.setState({ favsArray });
    //   this.setState({ isLoading: false });
    // });
    // try {
    //   let response = await getWeather(location.name);
    //   location.data = { ...response.data };
    // } catch (error) {
    //   console.log(error);
    // }
    // }
  }

  ngOnInit(): void {
    this.populateData();
  }
}
