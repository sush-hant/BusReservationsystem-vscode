import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalbookingComponent } from './rentalbooking.component';

describe('RentalbookingComponent', () => {
  let component: RentalbookingComponent;
  let fixture: ComponentFixture<RentalbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
