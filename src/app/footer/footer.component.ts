import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Email: any;
  constructor() { }

  ngOnInit(): void {
    this.Email = sessionStorage.getItem('User');

  }
  // public localStorage = localStorage;
  // public local = localStorage.getItem('Email');

}
