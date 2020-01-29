import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public userName="Admin"
  public userPass="Admin"
  public userInput : string;
  public passInput : string;


  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.passInput === this.userPass && this.userInput === this.userName){
      console.log("Nakasulod Naka")
      this.router.navigate(["/admin/dashboard"])
    }
  }
}
