import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const arr = [
      { name: "Adam", id: 1001, job: { title: "UI developer", exp: 3 } },
      { name: "Billy", id: 1002, job: { title: "Angular developer", exp: 5 } },
      { name: "Charley", id: 1002, job: { title: "React developer", exp: 6 } }
    ]

    // Ex - 01
    from(arr)
      .pipe(pluck("name"))
      .subscribe(data => {
        this.du.print("elContainer1", data)
      })
      
      // Ex - 02
      from(arr)
      .pipe(pluck("job","title"))
      .subscribe(data=>{
        this.du.print("elContainer2", data)

      })
  }

}
