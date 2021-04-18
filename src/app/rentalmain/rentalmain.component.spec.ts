import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalmainComponent } from './rentalmain.component';

describe('RentalmainComponent', () => {
  let component: RentalmainComponent;
  let fixture: ComponentFixture<RentalmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
