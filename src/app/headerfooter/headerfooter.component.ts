import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component'
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-headerfooter',
  templateUrl: './headerfooter.component.html',
  styleUrls: ['./headerfooter.component.css']
})
export class HeaderfooterComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openVideoPopup() {
    const modalRef = this.modalService.open(LoginComponent);
  }
  openregister() {
    const modalRef = this.modalService.open(RegisterComponent);
  }

}