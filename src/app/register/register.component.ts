import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    public curdService: ServiceService

  ) { }
  registerForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    Email: new FormControl('', [Validators.email, Validators.required]), 
    ContactNo: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(10)]),
    Gender: new FormControl('',[Validators.required]),
    DateOfBirth: new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required])
   
   })
  
  
  ngOnInit(): void {
  }
  
  get FirstName()
{
  return this.registerForm.get('FirstName');
}
get LastName()
{
  return this.registerForm.get('LastName');
}

get Email()
{
  return this.registerForm.get('Email');
}
get ContactNo()
{
  return this.registerForm.get('ContactNo');

}
 get password()
{
  return this.registerForm.get('password');
}
get Gender()
{
  return this.registerForm.get('Gender');
}
get Address()
{
  return this.registerForm.get('Address');
}
get DateOfBirth()
{
  return this.registerForm.get('DateOfBirth');
}
onSubmit()
  {
    this.curdService.userdetails(this.registerForm.value).subscribe(res =>{console.log('Registration Successful'), this.router.navigateByUrl('Login')});
    alert("Registered")
  }  
}

export class UserDetail {
  FirstName:string;
  LastName:string;
  Email:string;
  ContactNo:number;
  password:string;
  Gender:string;
  Address:string;
  DateOfBirth:string

}