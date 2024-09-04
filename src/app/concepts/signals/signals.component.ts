import { Component, OnInit, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {

  constructor() { }
  sideEffect = effect(() => {
    document.getElementById("effect").innerText = "Last name updated to " + this.lastName()
    console.log("Last name updated to " + this.lastName())
  })

  firstName = signal("Aadhar")
  lastName = signal("Kaushik")
  fullName = computed(() => this.firstName() + " " + this.lastName())
  count = signal(0)
  empArr=signal([
    {id:1,name:"Adam"},
    {id:2,name:"Bob"},
    {id:3,name:"Charles"},
    {id:4,name:"Drake"},
    {id:5,name:"Evan"},
    {id:6,name:"Frank"},
  ])
  ngOnInit(): void {

  }
  onChangeFirstName(fname) {
    this.firstName.set(fname.value)
  }
  onChangeLastName(lname) {
    this.lastName.set(lname.value)

  }

  onInc() {
    this.count.update(prev => prev + 1)
  }
  onDec() {
    this.count.update(prev => prev - 1)

  }
}
