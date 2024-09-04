import { Component, OnInit } from '@angular/core';
import { DseignUtilityService } from '../../dseign-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {


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
