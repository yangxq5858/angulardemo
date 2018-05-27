import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [          //
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule  //
  ],
  providers: [],   //
  bootstrap: [AppComponent] //
})
export class AppModule { } // 



