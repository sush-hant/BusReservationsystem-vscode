import { Component, OnInit } from '@angular/core';
import { Bookings } from '../Models/bookings';
import { BusRouteDetails } from '../Models/bus-route-details';

import { CrudAdminService } from '../crud-admin.service';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})
export class BusbookingComponent implements OnInit {
bookings:Bookings[]=[];
buses:BusRouteDetails[]=[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit(){
    this.crudadminService.getBooking().subscribe((data: Bookings[])=>{
      this.bookings = data;
    console.log(this.bookings) })
  }

}
