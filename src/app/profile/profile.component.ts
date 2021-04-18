import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users : any

  public localStorage = localStorage
  constructor() {
   }

  ngOnInit(): void {
    if(sessionStorage.length > 0){
      this.users = JSON.parse(sessionStorage.getItem('User'))
      console.log(this.users.Email)
         
    }  
    
  }
  

}
