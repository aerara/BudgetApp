import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../ProductDetails/Details';
import { UserService } from '../ProductDetails/user.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})

export class ProductsComponent implements OnInit {
  public dataModel: Details[] = []
  dataToCart : Array<any>=[];
  qty = '';
  sub:number;
  searchText;

  newData: any;

  constructor(private dataService: UserService) {    
    this.newData = new Details;
  }

  ngOnInit() {
    return this.dataService.getUsers().subscribe(data =>(this.dataModel = data))
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
