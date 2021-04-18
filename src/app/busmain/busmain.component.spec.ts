import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusmainComponent } from './busmain.component';

describe('BusmainComponent', () => {
  let component: BusmainComponent;
  let fixture: ComponentFixture<BusmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
