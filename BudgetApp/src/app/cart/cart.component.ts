import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../ProductDetails/Details'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  
  @Input() parentdata: Details[];

  constructor() { }

  ngOnInit() {
  }

}
