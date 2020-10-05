import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { LocationInterface } from 'src/app/interfaces/location.interface.ts';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favsArray: Array<LocationInterface> = [
    { name: 'tel aviv' },
    { name: 'berlin' },
  ];
  isLoading = false;
  isXS: boolean;
  screenSizeSubscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private screenSizeSvc: ScreenSizeService
  ) {}

  populateData() {
    this.isLoading = true;

    this.favsArray.map((location, i, arr) => {
      arr[i].subscription = this.weatherService
        .getWeather(location.name)
        .subscribe(
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

  getScreenSize() {
    this.screenSizeSubscription = this.screenSizeSvc.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        if (size === 'XS') this.isXS = true;
        else this.isXS = false;
      });
  }

  ngOnInit(): void {
    this.populateData();
    this.getScreenSize();
  }

  ngOnDestroy(): void {
    this.favsArray.map((fav) => fav.subscription.unsubscribe());
  }
}
