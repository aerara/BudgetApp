import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../ProductDetails/Details';
import { Data } from '../ProductDetails/productsList';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})

export class ProductsComponent implements OnInit {
  public data = Data;

  dataToCart : Array<any>=[];
  qty = '';
  sub:number;
  searchText;


  newData: any;

  constructor() {    
    this.newData = new Details;
  }

  ngOnInit() {
  }

  onKey(value: string){
    this.qty = value
  }

  addCart(d:any){
    this.newData = new Details();

    this.newData.id= d.id;
    this.newData.name= d.name;
    this.newData.price= d.price;

    this.newData.qty= parseInt(this.qty);
    this.newData.sub = d.price * parseInt(this.qty);

    this.dataToCart.push(this.newData)

    console.log(this.dataToCart);
  }

}
