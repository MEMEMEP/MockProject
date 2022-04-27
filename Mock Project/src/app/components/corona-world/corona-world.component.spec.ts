import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaWorldComponent } from './corona-world.component';

describe('CoronaWorldComponent', () => {
  let component: CoronaWorldComponent;
  let fixture: ComponentFixture<CoronaWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
