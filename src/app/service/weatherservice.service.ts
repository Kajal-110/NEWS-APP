import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) {}
    
  getWeatherData(cityName:String){
    this.http.get(environment.weatherApiBaseUrl,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q','cityName')
      .set('units','auto&lang')
      .set('mode','json')
    })
   
  }
}
