import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users : any
  Name: any
  Email: any
  Phone: any
  DateOfBirth: any
  Gender: any
  ContactNo: any
  Address: any


  public localStorage = localStorage
  constructor() {
   }

  ngOnInit(): void {
    if(sessionStorage.length > 0){
      this.users = JSON.parse(sessionStorage.getItem('User'))
      console.log(this.users)
      this.Address = this.users.Address;
      this.ContactNo = this.users.ContactNo;
      this.Email = this.users.Email;
      this.Name = this.users.FirstName + this.users.LastName;
      this.Gender = this.users.Gender;
      this.DateOfBirth = formatDate(this.users.DateOfBirth, 'yyyy-MM-dd','en-US')
      

         
    }  
    
  }
  

}