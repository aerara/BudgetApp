import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';

// const Swal = require('sweetalert2');

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public userName = "Admin"
  public userPass = "Admin"
  public userInput: string;
  public passInput: string;


  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("authenticated") == "true") {
      this.router.navigate(["/admin/dashboard"]);
    } else {
      this.router.navigate(["/admin"]);
    }
  }

  onSubmit() {
    if (this.userInput === this.userName) {
      if (this.userPass === this.passInput) {
        this.router.navigate(['admin/dashboard'])
        sessionStorage.setItem("authenticated", "true");
        // this.dataService.setLoggedIn(true)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have successfully logged in!',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
        alert("Invalid password");
        sessionStorage.setItem("authenticated", "false");
      }
    } else {
      alert("Account does not exist");
      sessionStorage.setItem("authenticated", "false");
    }
  }

}
