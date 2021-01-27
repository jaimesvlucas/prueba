import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowartsComponent } from './howarts.component';

describe('HowartsComponent', () => {
  let component: HowartsComponent;
  let fixture: ComponentFixture<HowartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
