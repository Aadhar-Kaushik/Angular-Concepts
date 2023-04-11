import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSHomeComponent } from './rxjs-home.component';

describe('RXJSHomeComponent', () => {
  let component: RXJSHomeComponent;
  let fixture: ComponentFixture<RXJSHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RXJSHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RXJSHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
