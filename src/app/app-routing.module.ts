import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { PracticeComponent } from './practice/practice.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'',component:TopHeadlineComponent},
  {path:'tech',component:TechComponent},
  {path:'sports',component:SportsComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'business',component:BusinessComponent},
  {path:'weather',component:WeatherComponent},
  {path:'practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
