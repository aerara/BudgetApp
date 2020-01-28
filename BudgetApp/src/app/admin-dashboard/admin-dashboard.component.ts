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

  @Input() productDetail = { name: '', price: 0 }
  constructor(private dataService: UserService, public router: Router) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(){
    return this.dataService.getUsers().subscribe(data => (this.dataModel = data))
  }

  addProduct(dataProduct) {
    if (this.edit) {
      this.dataModel.forEach(element => {
        if (element.id === this.id) {
          element.name = this.productDetail.name
          element.price = this.productDetail.price
          console.log(element)
          this.dataService.updateProduct(element).subscribe(data => this.loadProduct())
        }
      });
      this.status = 'Submit'
      this.edit = false
    } else {
      
      this.dataService.addProduct(this.productDetail)
        .subscribe((data: {}) => {
          console.log('gi add')
          this.router.navigate(['/admin/dashboard'])
        })
    }
  }

  onDelete(object: any) {
    console.log("alksdhfkajdsf")
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

}
