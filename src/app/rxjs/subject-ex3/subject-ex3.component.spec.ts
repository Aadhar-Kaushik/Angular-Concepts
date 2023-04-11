import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEx3Component } from './subject-ex3.component';

describe('SubjectEx3Component', () => {
  let component: SubjectEx3Component;
  let fixture: ComponentFixture<SubjectEx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEx3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectEx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
