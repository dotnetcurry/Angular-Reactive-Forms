import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCouponComponent } from './input-coupon.component';

describe('InputCouponComponent', () => {
  let component: InputCouponComponent;
  let fixture: ComponentFixture<InputCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
