import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "这是一个头部组件";
  msg:String;
  
  //构造函数
  constructor() { }

  //这是一个生命周期函数 组件加载时要触发该方法
  ngOnInit() {
    this.msg = "来自ngOninit初始化后的数据";
  }

}
