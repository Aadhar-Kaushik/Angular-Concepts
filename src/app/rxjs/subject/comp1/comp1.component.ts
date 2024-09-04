import { Component, OnInit } from '@angular/core';
import { DseignUtilityService } from '../../dseign-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

 
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
