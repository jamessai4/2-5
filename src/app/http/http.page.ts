import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {

  constructor( private http : HttpClient) { }

  ngOnInit() {
  } 

  data : any;

  callHttp() {
    this.http.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
    .subscribe((data:any)=>{
      this.data = data
    })
  } 


}
