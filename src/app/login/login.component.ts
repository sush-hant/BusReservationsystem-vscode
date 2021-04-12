import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]), 
    password: new FormControl('',[Validators.required,Validators.minLength(10)])
  })  

 
  ngOnInit(): void {
  }
  onLogin()
  {
    console.log(this.loginForm.value);
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