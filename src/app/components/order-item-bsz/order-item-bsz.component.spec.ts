import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemBSZComponent } from './order-item-bsz.component';

describe('OrderItemBSZComponent', () => {
  let component: OrderItemBSZComponent;
  let fixture: ComponentFixture<OrderItemBSZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemBSZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemBSZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
