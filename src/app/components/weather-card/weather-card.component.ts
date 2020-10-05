import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/interfaces/weather.interface';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() weather: Weather;
  @Input() isXS: boolean;

  weatherLength: number;
  showDetails: boolean = false;

  screenSizeSubscription: Subscription;
  constructor(private screenSizeSvc: ScreenSizeService) {}

  toggleShowMore() {
    this.showDetails = !this.showDetails;
  }

  ngOnInit(): void {}

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
