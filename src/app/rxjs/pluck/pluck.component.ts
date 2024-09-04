import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {
    const obs = from([
      {
        name: "Adam", skill: "JS", job: {
          title: "JS Developer"
        }
      },
      {
        name: "Billy", skill: "HTML", job: {
          title: "HTML Developer"
        }
      },
      {
        name: "Charles", skill: "TS", job: {
          title: "TS Developer"
        }
      },
      {
        name: "David", skill: "CSS", job: {
          title: "CSS Developer"
        }
      },
      {
        name: "Evan", skill: "React JS", job: {
          title: "React JS Developer"
        }
      },
      {
        name: "Frank", skill: "Vue JS", job: {
          title: "Vue JS Developer"
        }
      }
    ])

    // Ex - 01 
    obs
    .pipe(pluck("name"))
    .subscribe(res => {
      this.du.print(res, "elContainer1")
    })
    
    // Ex - 01 
    obs.pipe(pluck("job","title"))
    .subscribe(res=>{
      this.du.print(res,"elContainer2")
    })
  }

}
