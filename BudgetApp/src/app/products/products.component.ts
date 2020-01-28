import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../ProductDetails/Details';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})

export class ProductsComponent implements OnInit {

  dataToCart : Array<any>=[];
  qty = '';
  sub:number;
  searchText;
  buttonDisabled = true;

  newData: any;

  constructor() {    
    this.newData = new Details;
  }

  ngOnInit() {
  }

  onKey(value: string){
    this.qty = value
    if(this.qty == null){
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  addCart(d:any){
    this.newData = new Details();

    this.newData.id= d.id;
    this.newData.name= d.name;
    this.newData.price= d.price;

    this.newData.qty= parseInt(this.qty);
    this.newData.sub = d.price * parseInt(this.qty);
    
    this.dataToCart.push(this.newData)
    this.buttonDisabled = true;
    console.log(this.dataToCart);
  }
}
