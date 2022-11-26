import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  sportNewsData:any=[];

  ngOnInit(): void {
    this.api.tcSportNews().subscribe((result)=>{
      console.log(result.articles);
      this.sportNewsData=result.articles;
    })
  }

}
