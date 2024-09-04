import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelatestWithlatestfromZipForkComponent } from './combinelatest-withlatestfrom-zip-fork.component';

describe('CombinelatestWithlatestfromZipForkComponent', () => {
  let component: CombinelatestWithlatestfromZipForkComponent;
  let fixture: ComponentFixture<CombinelatestWithlatestfromZipForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinelatestWithlatestfromZipForkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinelatestWithlatestfromZipForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
