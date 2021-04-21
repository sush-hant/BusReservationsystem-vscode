import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { UserDetail } from '../Models/user-detail';
import { expressionType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Array<any> = new Array<any> ();
  public email1: string;
  public key: string;
  loggedIn: boolean;
  public users1: UserDetail[] = [];
  public localStorage = localStorage;

  constructor( private router: Router, public curdservice: ServiceService) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]), 
    password: new FormControl('',[Validators.required,Validators.minLength(10)])
  })  

 
  ngOnInit(): void {
  }
  onLogin()
  {
    
    this.curdservice.login(this.loginForm.value).subscribe(res => {

      console.log(res)
      if(res != null)
      {
        sessionStorage.setItem('Email',this.loginForm.get('email').value)
        sessionStorage.setItem('User', JSON.stringify(res))
        this.router.navigateByUrl('Home')
        
        console.log(res)
        console.log(this.loginForm.get('email').value)

      }
      else{
        alert("Invalid Login!");
      }
      window.location.reload()

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

