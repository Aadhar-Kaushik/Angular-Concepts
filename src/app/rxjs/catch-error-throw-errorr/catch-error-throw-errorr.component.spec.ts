import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorThrowErrorrComponent } from './catch-error-throw-errorr.component';

describe('CatchErrorThrowErrorrComponent', () => {
  let component: CatchErrorThrowErrorrComponent;
  let fixture: ComponentFixture<CatchErrorThrowErrorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchErrorThrowErrorrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchErrorThrowErrorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
