import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule } from '@angular/common/http';
import { TcnewsapiService } from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { WeatherComponent } from './weather/weather.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    TechComponent,
    SportsComponent,
    BusinessComponent,
    HealthComponent,
    ScienceComponent,
    WeatherComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
