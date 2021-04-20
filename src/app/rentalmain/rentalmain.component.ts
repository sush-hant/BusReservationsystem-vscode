import { Component, OnInit } from '@angular/core';
import { CrudAdminService } from '../crud-admin.service';
import {Rentalbusdetails} from '../Models/rentalbusdetails';

@Component({
  selector: 'app-rentalmain',
  templateUrl: './rentalmain.component.html',
  styleUrls: ['./rentalmain.component.css']
})
export class RentalmainComponent implements OnInit {
  rentals:Rentalbusdetails[] =[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit() {
    this.crudadminService.getAll().subscribe((data: Rentalbusdetails[])=>{
      this.rentals = data;
  })
}
  delete(RBusId)
  {
    this.crudadminService.deleterentalbus(RBusId).subscribe();
    window.location.reload();

  }

}