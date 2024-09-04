import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {

    const obs = from([
      {
        id: 1, name: "Adam", skill: "JS"
      },
      {
        id: 2, name: "Billy", skill: "HTML"
      },
      {
        id: 3, name: "Charles", skill: "TS"
      },
      {
        id: 4, name: "David", skill: "CSS"
      },
      {
        id: 5, name: "Evan", skill: "React JS"
      },
      {
        id: 6, name: "Frank", skill: "Vue JS"
      }
    ])

    obs
      .pipe(
        filter(x => x.name.length <= 4),
        map(x => x.id + "--" + x.name + "--" + x.skill))
      .subscribe(data => {
        this.du.print(data, "elContainer1")
      })
    obs
      .pipe(
        filter(x => x.id<4),
        map(x => x.id + "--" + x.name + "--" + x.skill))
      .subscribe(data => {
        this.du.print(data, "elContainer2")
      })


  }

}
