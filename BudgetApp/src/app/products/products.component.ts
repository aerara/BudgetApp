import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../ProductDetails/Details'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  data: Details[] = [
    { id : 1, name: "Downy", price: 6},
    { id : 2, name: "Safeguard", price: 20},
    { id : 3, name: "Surf", price: 7},
    { id : 4, name: "Del", price: 8},
    { id : 5, name: "Silka", price: 20},
    { id : 6, name: "Modess w/ Wings", price: 50},
    { id : 7, name: "Corned Beef", price: 28},
    { id : 8, name: "Sardines", price: 18},
  ];

  dataToCart : Array<any>=[];
  qty = '';
  newData: any;

  constructor() {    this.newData = new Details;
  }

  ngOnInit() {
  }

  onKey(value: string){
    this.qty = value
    console.log( this.qty );
    
  }

  addCart(d:any){
    this.newData = new Details();

    this.newData.id= d.id;
    this.newData.name= d.name;
    this.newData.price= d.price;

    this.newData.qty= parseInt(this.qty);
    this.dataToCart.push(this.newData)
    console.log(this.newData);
    
  }

}
