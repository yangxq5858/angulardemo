import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public todoVal:String = '';
  public todoList = [];
  public list1:Array<Object>;
  constructor() { }

  ngOnInit() {
  }


  addData(e){
   
    if (e.keyCode == 13){

      //给数组加入一个对象
      this.todoList.push({
        todoVal:this.todoVal,
        status:0
      });

      //双向数据绑定了的，这里加入到数组后，清空输入框中的值
      this.todoVal = '';

    }
  }

  delData(key){
    //从数组中删除一个对象
    this.todoList.splice(key,1);
    
  }

  changeStatus(key,val){
    this.todoList[key].status = val;
  }

}
