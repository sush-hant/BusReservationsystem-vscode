import { Component, OnInit } from '@angular/core';
import { Bookings } from '../Models/bookings';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  user: string ;
  booking: Bookings[] 
  count: number;
  

  constructor(private crudservice: ServiceService ) { }

  ngOnInit(): void {
  this.user = sessionStorage.getItem('Email')
  
   //console.log(sessionStorage.getItem('Email'))
  //  this.crudservice.getbookingdetailsbyid(this.user).subscribe(( res: any) =>{
  //    this.booking = res
  //    console.log('res',res)
  //    console.log('booking='+this.booking)

  //  });
    
  this.crudservice.getbookingdetailsbyid(this.user).subscribe((res:any)=>{
    this.booking = res
    console.log(this.booking)
    
  })


   }

  }



