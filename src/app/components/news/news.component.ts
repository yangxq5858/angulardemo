import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  msg1:String='这是一个String类型的值'; //这里没有加修饰符，表示public
  public userName = "yxqiang";
  public id:Integer = 123; 
  public age:Integer = 42;
  constructor() { }

  ngOnInit() {
  }

}
