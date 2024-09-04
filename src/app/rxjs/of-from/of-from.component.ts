import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }
  obj = {
    a:"",
    b:"",
    c:"",
    d:""
  }
  ngOnInit(): void {

    of("Adam", "Bob", "Charles", "Drake")
      .subscribe(data => {
        this.du.print(data, "elContainer1")
      })


      of({a:"Adam",b:"Bob",c:"Charles",d:"Drake"})
      .subscribe(data=>{
        this.obj=data
      })

      from(["Adam","Bob","Charles","Drake"])
      .subscribe(data=>{
        this.du.print(data,"elContainer2")
      })
  }

}
