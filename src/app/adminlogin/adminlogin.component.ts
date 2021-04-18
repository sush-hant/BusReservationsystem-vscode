import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loggedin: string = 'false';
  constructor(
    private router: Router
  ) { }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.pattern("admin")]),
    password: new FormControl('',[Validators.required,Validators.pattern("admin")])  })
  ngOnInit(): void {

  }
  get username() {
    return this.loginForm.get('username');
  } 
 
  get password() {
    return this.loginForm.get('password');
  } 
  
 
  onLogin() {
    console.log(this.loginForm.value)
    this.loggedin = 'true';
    sessionStorage.setItem('AdminLogin', this.loggedin);
    alert("Admin logged in")
    this.router.navigateByUrl('/SideMenu')
   
  } 

}

export class adminlogin {
  username:string;
  password:string;
}
