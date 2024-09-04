import { Component, OnInit } from '@angular/core';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-catch-error-throw-error',
  templateUrl: './catch-error-throw-error.component.html',
  styleUrls: ['./catch-error-throw-error.component.scss']
})
export class CatchErrorThrowErrorComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }
  error = ""
  data = ""
  ngOnInit(): void {

  }

  fetchData() {
    this.du.getCountWithThrowAndCatch().subscribe(res => {
      this.data = JSON.stringify(res)
      this.error = ""
    },
      err => {
        console.log(err)
        this.data = ""
        this.error = err
      
      })
  }

}
