import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentHomeComponent } from './ng-content-home.component';

describe('NgContentHomeComponent', () => {
  let component: NgContentHomeComponent;
  let fixture: ComponentFixture<NgContentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
