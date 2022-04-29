import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-item-bsz',
  templateUrl: './order-item-bsz.component.html',
  styleUrls: ['./order-item-bsz.component.css']
})
export class OrderItemBSZComponent implements OnInit {

  @Input() id?: number;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
