import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEx1Component } from './subject-ex1.component';

describe('SubjectEx1Component', () => {
  let component: SubjectEx1Component;
  let fixture: ComponentFixture<SubjectEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
