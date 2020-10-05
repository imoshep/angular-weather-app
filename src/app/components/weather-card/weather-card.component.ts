import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Weather } from 'src/app/interfaces/weather.interface';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() weather: Weather;

  weatherLength: number;
  showDetails: boolean = false;
  isXS: boolean;
  screenSizeSubscription: Subscription;
  constructor(private screenSizeSvc: ScreenSizeService) {}

  toggleShowMore() {
    this.showDetails = !this.showDetails;
  }

  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeSvc.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        if (size === 'XS') this.isXS = true;
        else this.isXS = false;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.weather) {
      if (changes.weather)
        this.weatherLength = Object.keys(this.weather).length;
    }
  }

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }
}
