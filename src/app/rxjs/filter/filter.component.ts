import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {

     const arr = [
      { name: "Adam", id: 1001},
      { name: "Billy", id: 1002},
      { name: "Charley", id: 1003},
      { name: "Danny", id: 1004},
      { name: "Evan", id: 1005},
      { name: "Frank", id: 1006}
    ]
    from(arr)
    .pipe(
      filter(e=>e.id<=1003),
      map(e=>e.id+" -- "+e.name))
    .subscribe(data=>{
      this.du.print("elContainer1",data)
    })
  }

}
