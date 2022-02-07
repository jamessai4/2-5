import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {
  constructor( private http : HttpClient) { }
  
  x = [];
  url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";
  imgurl ="https://med.mahidol.ac.th/patient_care/sites/default/files/public/img/slide/COVID-19_Slide-inter-1920x1080.jpg"
  ngOnInit() {
    this.http.get(this.url).subscribe((data:any)=>{
      this.x = data
    })
  } 

  SearchValue : string;
  tempvalue = [];

  search(event){
    this.tempvalue = this.x.filter(text => text.province.includes(this.SearchValue))
  }


}
