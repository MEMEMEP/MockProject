import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaRegionComponent } from './corona-region.component';

describe('CoronaRegionComponent', () => {
  let component: CoronaRegionComponent;
  let fixture: ComponentFixture<CoronaRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
