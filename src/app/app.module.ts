import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule  //当前的项目依赖哪些模块
  ],
  providers: [],   //定义的服务
  bootstrap: [AppComponent] //默认启动那个组件
})
export class AppModule { } // 根模块不需要导出任何东西，   因为其它组件不需要导入根模块。 但是一定要写



