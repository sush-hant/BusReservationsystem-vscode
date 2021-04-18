import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { UserDetail } from '../Models/user-detail';

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
    console.log(this.loginForm.value)
    this.curdservice.login(this.loginForm.value).subscribe(res => {
      console.log(res)
      if(res != null)
      {
        // localStorage.setItem('Email',this.loginForm.value.Email);

        // this.curdservice.getallusers().subscribe((data: UserDetail[])=>{
        //   window.location.reload();
        //   this.users1 = data;
        //   this.email1 = localStorage.getItem('Email')
        //   console.log(this.email1)
        //   for(let i=0; i < this.users1.length; i++)
        //   {
        //     console.log("inside for")
        //     if(this.users1[i].Email == this.email1)
        //     {
        //       localStorage.setItem('Email',JSON.stringify(this.users1[i].Email));
        //       localStorage.setItem('First Name',JSON.stringify(this.users1[i].FirstName));
        //       localStorage.setItem('Last Name',JSON.stringify(this.users1[i].LastName));
        //       localStorage.setItem('Contact Number',JSON.stringify(this.users1[i].ContactNo));
        //       localStorage.setItem('Password',JSON.stringify(this.users1[i].Password));
        //       localStorage.setItem('Gender',JSON.stringify(this.users1[i].Gender));
        //       localStorage.setItem('Date Of Birth',JSON.stringify(this.users1[i].DateOfBirth));
        //       localStorage.setItem('Address',JSON.stringify(this.users1[i].Address));
        //       localStorage.setItem('Userdetail', JSON.stringify(this.users1));
        //     }
        //   }
        //   console.log(localStorage);
        // })
        // console.log(localStorage);
        // this.router.navigateByUrl('Home');
        // console.log(this.users1.values);
        //window.location.reload()
        sessionStorage.setItem('User', JSON.stringify(res))
        this.router.navigateByUrl('/Home')
        
        console.log(res)
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

