import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBszComponent } from './order-bsz.component';

describe('OrderBszComponent', () => {
  let component: OrderBszComponent;
  let fixture: ComponentFixture<OrderBszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBszComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
