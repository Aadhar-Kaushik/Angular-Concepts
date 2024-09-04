import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapMergemapSwitchmapComponent } from './concatmap-mergemap-switchmap.component';

describe('ConcatmapMergemapSwitchmapComponent', () => {
  let component: ConcatmapMergemapSwitchmapComponent;
  let fixture: ComponentFixture<ConcatmapMergemapSwitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapMergemapSwitchmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmapMergemapSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
