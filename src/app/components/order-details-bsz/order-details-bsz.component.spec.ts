import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsBSZComponent } from './order-details-bsz.component';

describe('OrderDetailsBSZComponent', () => {
  let component: OrderDetailsBSZComponent;
  let fixture: ComponentFixture<OrderDetailsBSZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsBSZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsBSZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
