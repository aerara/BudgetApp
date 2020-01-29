import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total = 0;
  totals: number;
  sub: number;
  totalled = false;

  @Input() parentdata: any[];

  constructor() { }

  ngOnInit() {
  }

  onTotal() {
    this.parentdata.forEach(element => {
      this.totals = this.total += element.sub

      console.log(this.totals)
    })
    this.total = 0;
    this.totalled = true;
  }

  remove(dataToDelete) {
    Swal.fire({
      title: 'Are you sure you want to delete the item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
        for (var i = 0; i < this.parentdata.length; i++) {
          if (dataToDelete == this.parentdata[i]) {
            this.parentdata.splice(i, 1);
          }
        }
      }
    })

  }

}



