import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.scss']
})
export class HookChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked, OnDestroy, AfterViewInit, AfterViewChecked {
  show=false
  constructor() { 
    console.log("Child Constructor called")

  }

  @Input() val=""
  ngOnInit(): void {
    console.log("ngOnInit called")
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called",changes)
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called")
    
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
    
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
    
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
      
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
      
  }
}
