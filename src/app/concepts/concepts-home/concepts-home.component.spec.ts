import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsHomeComponent } from './concepts-home.component';

describe('ConceptsHomeComponent', () => {
  let component: ConceptsHomeComponent;
  let fixture: ComponentFixture<ConceptsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
