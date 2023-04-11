import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEx2Component } from './subject-ex2.component';

describe('SubjectEx2Component', () => {
  let component: SubjectEx2Component;
  let fixture: ComponentFixture<SubjectEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
