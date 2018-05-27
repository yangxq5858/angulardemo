import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:String;
  public msg:any;
  public username:String;
  public flag = true;
  public searchVal = '';
  constructor() {
    this.title = '这是Home组件';
    this.msg = `hi${this.title}
    
    haha  `;
    this.username = '张三';

   }

  ngOnInit() {
  }

  getMsg(){
    alert(this.msg);
  }

  setUserName(){
    this.username = '李四';
  }


  //e 表示事件对象，在html哪儿传入 $event
  //<input type="text" (keyup)='keyupFn($event)'>
  keyupFn(e){
    console.info(e);
    if (e.keyCode === 13){
      alert('你按了回车键了');
    }
  }

  getSearchVal(){
    alert(this.searchVal);
  }
}
