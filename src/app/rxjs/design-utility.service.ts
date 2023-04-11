import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  username=new BehaviorSubject<any>("AAdhar")
  print(id,text){
    const element=document.createElement("li")
    element.innerText=text
    document.getElementById(id).append(element)
  }
}
