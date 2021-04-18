import { Component, OnInit } from '@angular/core';
import { CrudAdminService } from '../crud-admin.service';
import { Rentalbks } from '../Models/rentalbks';


@Component({
  selector: 'app-rentalbooking',
  templateUrl: './rentalbooking.component.html',
  styleUrls: ['./rentalbooking.component.css']
})
export class RentalbookingComponent implements OnInit {
  rentalbookings:Rentalbks[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit(){
    this.crudadminService.getAllRB().subscribe((data:Rentalbks[])=>{
      this.rentalbookings = data;
  })
  }

}
