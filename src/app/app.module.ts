//这个根模块会告诉 Angular 如何组装该应用
//引入模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入自定义模块
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';


/*@NgModule装饰器将AppModule标记为 Angular 模块类（也叫NgModule类）。
 @NgModule接受一个元数据对象，告诉 Angular 如何编, NewsComponent译和启动应用。*/
@NgModule({
  declarations: [
    AppComponent,/*引入当前项目运行的的组件  自定义组件都需要引入并且在这个里面配置*/
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule  /*当前的项目依赖哪些模块*/
  ],
  providers: [], /*定义的服务*/
  bootstrap: [AppComponent] /*默认启动那个组件*/
})
export class AppModule { }/*根模块不需要导出任何东西，   因为其它组件不需要导入根模块。 但是一定要写*/
