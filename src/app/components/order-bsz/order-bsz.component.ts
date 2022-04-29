import { Component, OnInit } from '@angular/core';
import {BszService} from "../../services/bsz-data.service";

@Component({
  selector: 'app-order-bsz',
  templateUrl: './order-bsz.component.html',
  styleUrls: ['./order-bsz.component.css']
})
export class OrderBszComponent implements OnInit {
  public orders$: any;
  items$: any;

  constructor(private service: BszService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.service.getAll().subscribe(response => {
      this.orders$ = response;
    });
  }

}
