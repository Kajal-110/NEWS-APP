import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TcnewsapiService{


  constructor( private _http:HttpClient) { }
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=44dc8730fef14dc0a925fd01968ee329';

 
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=44dc8730fef14dc0a925fd01968ee329';


  sportNews='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=44dc8730fef14dc0a925fd01968ee329';

  healthNews='https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=44dc8730fef14dc0a925fd01968ee329';

  scienceNews='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=44dc8730fef14dc0a925fd01968ee329';

  businessNews='https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=44dc8730fef14dc0a925fd01968ee329';

  
  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)
  }
  tcSportNews():Observable<any>{
    return this._http.get(this.sportNews)
  }
  tcHealthNews():Observable<any>{
    return this._http.get(this.healthNews)
  }
  tcScienceNews():Observable<any>{
    return this._http.get(this.scienceNews)
  }
  tcBusinessNews():Observable<any>{
    return this._http.get(this.businessNews)
  }
  
}
