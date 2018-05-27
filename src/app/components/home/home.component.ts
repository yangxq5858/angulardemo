import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:String;
  public msg:any;
  constructor() {
    this.title = '这是Home组件';
    this.msg = `hi${this.title}
    
    haha  `;

   }

  ngOnInit() {
  }

   getMsg(){
    alert(this.msg);
  }

}
