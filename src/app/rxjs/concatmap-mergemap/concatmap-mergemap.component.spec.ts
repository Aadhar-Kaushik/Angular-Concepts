import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapMergemapComponent } from './concatmap-mergemap.component';

describe('ConcatmapMergemapComponent', () => {
  let component: ConcatmapMergemapComponent;
  let fixture: ComponentFixture<ConcatmapMergemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapMergemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmapMergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
