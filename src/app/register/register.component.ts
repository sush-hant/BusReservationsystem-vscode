import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  registerForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]), 
    Contact: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(10)]),
    Gender: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required])
   
   })
  
  
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.registerForm.value);
  }  
  get Name()
{
  return this.registerForm.get('Name');
}

get email()
{
  return this.registerForm.get('email');
}
get Contact()
{
  return this.registerForm.get('Contact');

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
get DOB()
{
  return this.registerForm.get('DOB');
}
}

export class register {
  Name:string;
  email:string;
  Contact:string;
  password:string;
  Gender:string;
  Address:string;
  DOB:string

}