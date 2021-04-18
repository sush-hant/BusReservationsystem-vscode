import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component'
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-headerfooter',
  templateUrl: './headerfooter.component.html',
  styleUrls: ['./headerfooter.component.css']
})
export class HeaderfooterComponent implements OnInit {
  User: string;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.User = sessionStorage.getItem('User');

  }
  
  logout()
  {
    sessionStorage.clear()
    console.log("session info" + sessionStorage)
    window.location.href='Home'
    //this.router.navigateByUrl('Home')
  }

 


}
