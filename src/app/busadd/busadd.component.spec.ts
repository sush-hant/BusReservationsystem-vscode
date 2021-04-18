import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusaddComponent } from './busadd.component';

describe('BusaddComponent', () => {
  let component: BusaddComponent;
  let fixture: ComponentFixture<BusaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
