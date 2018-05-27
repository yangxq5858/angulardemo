import { Injectable } from '@angular/core';

//依赖注入装饰器
@Injectable({
  providedIn: 'root'  //有了这个属性后，可以不用在Module中引入这个服务了
})
export class LocalstorageServiceService {

  constructor() { }

  setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key){
    localStorage.removeItem(key);
  }
}
