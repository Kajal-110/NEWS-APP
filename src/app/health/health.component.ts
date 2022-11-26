import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  healthNewsData:any=[];

  ngOnInit(): void {
    this.api.tcSportNews().subscribe((result)=>{
      console.log(result.articles);
      this.healthNewsData=result.articles;
    })
  }

}
