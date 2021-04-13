import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, public curdservice: ServiceService) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]), 
    password: new FormControl('',[Validators.required,Validators.minLength(10)])
  })  

 
  ngOnInit(): void {
  }
  onLogin()
  {
    console.log(this.loginForm.value)
    this.curdservice.login(this.loginForm.value).subscribe(res => {
      console.log(res)
      if(res.toString()=="Found")
      {
        localStorage.setItem('Email',this.loginForm.value.Email);
        this.router.navigateByUrl('Home');
      }
      else{
        alert("Invalid Login!");
      }
    })
  } 
  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }


} 


export class login {
  email:string;
  password:string
  }