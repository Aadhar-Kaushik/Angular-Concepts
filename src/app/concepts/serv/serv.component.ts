import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit {

  constructor(private serv: ServService) { }


  list = []
  ngOnInit(): void {
    this.fetchData()
    // this.serv.getUsers().subscribe(data => {
    //   this.list = data
    // })
  }

  log(f) {
    this.serv.insertUsersToCloud(f.value).subscribe(res => {
      console.log(res)
      setTimeout(() => {
        this.fetchData()

      }, 500);
    })
  }
  save(name) {
    console.log(name.value)
    const obj = {
      name: name.value
    }

    this.serv.insertUsers(obj).subscribe(data => {
      console.log(data)

    })
  }

  fetchData() {
    this.serv.getUsersFromCloud().subscribe(res => {

      console.log(res)
      this.list = []
      for (let k in res) {
        this.list.push({
          id: k,
          ...res[k]
        })
      }
    })
  }

  edit(id, item) {
    const req={...item}
    req.name = "Updated " + req.name
    delete req.id
    // Put me poori req put krte hain
    this.serv.editPutUsersFromCloud(id, req).subscribe(data => {
        console.log(data)
        this.fetchData()
      
      })
      
      // const req={
      //   department:"Updated"
      // }
      // patch me sirf additional param patch krte hain

      // this.serv.editPatchUsersFromCloud(id, req).subscribe(data => {
      //   console.log(data)
      //   this.fetchData()
  
      // })
  }
  delete(id) {
    this.serv.deleteUsersFromCloud(id).subscribe(res => {
      this.fetchData()
    })
  }
}
