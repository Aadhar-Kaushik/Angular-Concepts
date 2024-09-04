import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhauseMapComponent } from './exhause-map.component';

describe('ExhauseMapComponent', () => {
  let component: ExhauseMapComponent;
  let fixture: ComponentFixture<ExhauseMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhauseMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhauseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
