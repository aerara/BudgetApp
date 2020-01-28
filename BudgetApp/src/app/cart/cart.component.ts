import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total= 0 ;
  totals: number;
  sub: number;
  totalled= false;

  @Input() parentdata: any[];

  constructor() { }

  ngOnInit() {
  }

  onTotal(){
    this.parentdata.forEach(element =>{
       this.totals = this.total += element.sub

       console.log(this.totals)
    })
    this.total = 0;
    this.totalled = true;
  }

  remove(dataToDelete) {
    for (var i = 0; i < this.parentdata.length; i++) {
      if (dataToDelete == this.parentdata[i]) {
        this.parentdata.splice(i, 1);
      }
    }
  }

}



