import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { CrudAdminService } from '../crud-admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rentaladd',
  templateUrl: './rentaladd.component.html',
  styleUrls: ['./rentaladd.component.css']
})
export class RentaladdComponent implements OnInit {

  RentalbusForm= new FormGroup ({
    NoOfSeats : new FormControl('',[Validators.required]),
    FarePerDay : new FormControl('',[Validators.required]),
    Deposit: new FormControl('',[Validators.required]),
    DriversName : new FormControl('',[Validators.required]),
    DriversContactNo : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    PickupPoint: new FormControl('',[Validators.required]),
  })

  constructor(public fb: FormBuilder,
    private router: Router,
    public crudadminService: CrudAdminService) { }


  ngOnInit() {
    this.RentalbusForm = this.fb.group({
      
    NoOfSeats: [''],
    FarePerDay: [''],
    Deposit: [''],
    DriversName: [''],    
    DriversContactNo:[''],
    PickupPoint:[''],
  })
  }
  onSubmit()
  {
    console.log(this.RentalbusForm.value);
    this.crudadminService.create(this.RentalbusForm.value).subscribe(res=>{console.log('Rental Bus Added')});
    alert("Added Successfully");
  }  

  get RBusId()
  {
    return this.RentalbusForm.get('RBusId');
  }
  get NoOfSeats()
  {
    return this.RentalbusForm.get('NoOfSeats');
  }
  get FarePerDay()
  {
    return this.RentalbusForm.get('FarePerDay');
  }
  get Deposit()
  {
    return this.RentalbusForm.get('Deposit');
  }
  get DriversName ()
  {
    return this.RentalbusForm.get('DriversName');
  }
  get DriversContactNo()
  {
    return this.RentalbusForm.get('DriversContactNo');
  }
  get PickupPoint ()
  {
    return this.RentalbusForm.get('PickupPoint');
  }
}

  export class Rentalbus {
    
    NoOfSeats:number;
    FarePerDay:number;
    Deposit:number;
    DriversName:string;
    DriversContactNo:number;
    PickupPoint:string;


}
