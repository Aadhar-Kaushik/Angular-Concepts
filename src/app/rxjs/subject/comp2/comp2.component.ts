import { Component, OnInit } from '@angular/core';
import { DseignUtilityService } from '../../dseign-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

 
  constructor(private du:DseignUtilityService) { }

  name = ""
  ngOnInit(): void {
    this.du.name.subscribe(data=>{
      this.name=data
    })
  }

  onChangeHandler(name) {
    this.du.name.next(name.value)
  }


}
