import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  businessNewsData:any=[];

  ngOnInit(): void {
    this.api.tcSportNews().subscribe((result)=>{
      console.log(result.articles);
      this.businessNewsData=result.articles;
    })
  }

}
