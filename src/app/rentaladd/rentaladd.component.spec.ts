import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaladdComponent } from './rentaladd.component';

describe('RentaladdComponent', () => {
  let component: RentaladdComponent;
  let fixture: ComponentFixture<RentaladdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaladdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
