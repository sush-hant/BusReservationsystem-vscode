import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Rentalbusdetails } from '../Models/rentalbusdetails'
import { Rentalbks} from '../Models/rentalbks'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-bus',
  templateUrl: './hire-bus.component.html',
  styleUrls: ['./hire-bus.component.css']
})
export class HireBusComponent implements OnInit {

  constructor(private crudservice: ServiceService, public router: Router) { }
  rentalBuses: Rentalbusdetails[]
  book : Rentalbks = new Rentalbks();
  FinalFare : number;
  datediff: number;
  firstDate: Date;
  secondDate: Date;

  searchRentalBus= new FormGroup({
    PickupPoint: new FormControl('', [Validators.required]), 

    
  })

  RentalBusBooking = new FormGroup({
    StartDate: new FormControl('',[Validators.required]),
    EndDate: new FormControl('',[Validators.required]),
    driver: new FormControl('',[Validators.required]),

    
   })
  
  

  ngOnInit(): void {
  }
  get f(){

    return this.RentalBusBooking.controls;

  }
  onSubmit()
  {
    console.log(this.searchRentalBus.value);
    this.crudservice.getrentalbus(this.searchRentalBus.get('PickupPoint').value).subscribe((res: Rentalbusdetails[])=>{
      this.rentalBuses = res
      console.log(this.rentalBuses)
    })
    
    
  }  

  onBooking(){
    console.log(this.RentalBusBooking.value)

    this.firstDate = this.RentalBusBooking.get('StartDate').value
    this.secondDate = this.RentalBusBooking.get('EndDate').value
    this.datediff =  Math.ceil(Math.abs(this.parseDate(this.secondDate).getTime() - this.parseDate(this.firstDate).getTime())/(1000 * 3600 * 24))
    this.FinalFare = ((this.rentalBuses[0].FarePerDay * this.datediff) + (this.rentalBuses[0].Deposit * <number>this.RentalBusBooking.get('driver').value));
    this.book.RBusId = this.rentalBuses[0].RBusId,
    this.book.StartDate = this.RentalBusBooking.get('StartDate').value,
    this.book.EndDate = this.RentalBusBooking.get('EndDate').value
    this.book.Email = sessionStorage.getItem('Email'),
    this.book.DriversNeed = this.RentalBusBooking.get('driver').value,
    this.book.FinalFare = this.FinalFare

    alert('Booking SucessFul! Final Fare:' + this.FinalFare)

    this.crudservice.postrentalBooking(this.book).subscribe(res=>
      console.log(res))
    console.log(this.book)
    this.router.navigateByUrl('')
  
    
  }
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }
  
  // dayDiff(d1:Date, d2:Date)
  // {
  //   var diff = Math.abs(d1.getTime() - d2.getTime());
  //   var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
  //   return diffDays;
  // }
  get StartDate()
{
  return this.RentalBusBooking.get('StartDate');
}

get EndDate()
{
  return this.RentalBusBooking.get('EndDate');
}

get PickupPoint()
{
  return this.searchRentalBus.get('PickupPoint');
}
get driver()
{
  return this.RentalBusBooking.get('driver');
}

}


