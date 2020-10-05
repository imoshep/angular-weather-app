import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ParseAltPipe } from './pipes/parse-alt.pipe';
import { DetectScreenSizeDirective } from './directives/detect-screen-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SearchBoxComponent,
    FavoritesComponent,
    WeatherCardComponent,
    ParseAltPipe,
    DetectScreenSizeDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ParseAltPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
