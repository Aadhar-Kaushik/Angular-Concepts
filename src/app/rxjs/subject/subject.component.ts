import { Component, OnInit } from '@angular/core';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

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
