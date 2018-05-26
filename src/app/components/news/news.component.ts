import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  msg1:String='这是一个String类型的值'; //这里没有加修饰符，表示public
  public userName = "yxqiang";
  public id:Number = 123; 
  public age:Number = 42;
  content:String;

  //定义一个对象
  public user = {
    name:"张三",
    age: 10
  }

  public ageList=[];
  public xkList:any[];
  public list3:any[];
  public carList:any[];

  constructor() { 

    //这里模拟从服务器去获取新闻数据
    this.content="<h2>这是新闻内容数据</h2>"
    this.ageList=[1,2,3,4,5];
    this.xkList=['语文','数学','英语'];
    this.list3=[
       {code:"001",name:"产品1"},
       {code:"002",name:"产品2"},
       {code:"003",name:"产品3"},

    ];
    this.carList=[
      {"carType":"宝马",
       "catagory":[
         {"name":"宝马x1"},
         {"name":"宝马x2"}]
      },
      {"carType":"奥迪",
       "catagory":[
         {"name":"奥迪q1"},
         {"name":"奥迪q2"}]
      }

    ];
  }

  ngOnInit() {
  }

}
