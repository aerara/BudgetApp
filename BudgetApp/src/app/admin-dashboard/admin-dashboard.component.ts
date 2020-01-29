import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../ProductDetails/user.service';
import { Router } from '@angular/router';
import { Details } from '../ProductDetails/Details';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public dataModel: Details[] = []
  status = 'Submit'
  edit = false
  id: number
  productData: any = {}
  dis = true;
  price:number

  @Input() productDetail = { name: '', price: this.price }
  constructor(private dataService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.loadProduct();
    if (sessionStorage.getItem("authenticated") == "true") {
      this.router.navigate(["admin/dashboard"]);
    } else {
      this.router.navigate(["admin"]);
    }
    this.dataService.getProductById(this.id)
      .subscribe(data => this.productData = data)
  }

  loadProduct() {
    return this.dataService.getProduct().subscribe(data => (this.dataModel = data))
  }

  addProduct(dataProduct) {
    if (this.edit) {

      this.dataModel.forEach(element => {
        if (element.id === this.id) {
          element.name = this.productDetail.name
          element.price = this.productDetail.price

          this.dataService.updateProduct(this.id, element).subscribe(data => {
            this.router.navigate(['admin/dashboard'])
          })
        }
      });
      this.status = 'Submit'
      this.edit = false
    } else {

      this.dataService.addProduct(this.productDetail)
        .subscribe((data: {}) => {
          this.router.navigate(['/admin/dashboard'])
          if(data != null){
            this.dis = false;
          } else {
            this.dis = true;
          }
        })
    }
  }

  onDelete(object: any) {
    this.dataService.deleteProduct(object.id).subscribe(data => this.loadProduct())
  }

  onEdit(object: any) {
    this.edit = true
    this.id = object.id
    this.productDetail.name = object.name;
    this.productDetail.price = object.price
    console.log(object.name)
    console.log(object.price)
    this.status = 'Save'

  }



  onLogOut() {
    sessionStorage.clear()
    this.router.navigate(["admin"]);

  }

}
