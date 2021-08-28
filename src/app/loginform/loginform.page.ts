import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  type = true;
  iconname = 'eye';

  constructor() { }

  ngOnInit() {
  }

  functionshowpass(){
    this.type = !this.type;

    if(this.iconname == 'eye'){
      this.iconname = 'aperture'
    }else
    this.iconname = 'eye'

    console.log(this.type)
  }

}
