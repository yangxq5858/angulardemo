import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //双向数据绑定引入 表单模块

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,  //当前的项目依赖哪些模块
    FormsModule     //双向数据绑定引入
  ],
  providers: [],   //定义的服务
  bootstrap: [AppComponent] //默认启动那个组件
})
export class AppModule { } // 根模块不需要导出任何东西，   因为其它组件不需要导入根模块。 但是一定要写



