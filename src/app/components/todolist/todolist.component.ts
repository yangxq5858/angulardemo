import { Component, OnInit } from '@angular/core';
import { LocalstorageServiceService } from '../../services/localstorage-service.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todoVal: String = '';
  public todoList = [];

  //这里采用了构造方法的依赖注入服务
  constructor(private localStorage: LocalstorageServiceService) {

  }

  ngOnInit() {
    let locallist = this.localStorage.getItem("todolist");
    if (locallist) { //判断localStorage中是否存在todolist对象
      this.todoList = locallist; //存在直接赋值
    } else {
      this.localStorage.setItem("todolist", this.todoList);//创建一个值
    }
  }


  addData(e) {

    if (e.keyCode == 13) {

      let obj = { todoVal: this.todoVal, status: 0 };

      //给数组加入一个对象
      this.todoList.push(obj);


      //双向数据绑定了的，这里加入到数组后，清空输入框中的值
      this.todoVal = '';
      //更新localStorage中的数据
      this.localStorage.setItem("todolist", this.todoList);

    }
  }

  delData(key) {
    //从数组中删除一个对象
    this.todoList.splice(key, 1);
    this.localStorage.setItem("todolist", this.todoList);
  }

  changeStatus(key, val) {
    this.todoList[key].status = val;
    this.localStorage.setItem("todolist", this.todoList);
  }
}
