import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewChildComponent } from './child-view-child.component';

describe('ChildViewChildComponent', () => {
  let component: ChildViewChildComponent;
  let fixture: ComponentFixture<ChildViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
