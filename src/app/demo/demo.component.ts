
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BusRouteDetails } from '../Models/bus-route-details';
import { Seats } from '../Models/seats';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router, public crudservice: ServiceService, private fb : FormBuilder) { }
  buses : BusRouteDetails[]
  seats : Seats[]
  selected_array: string[] = new Array;
  unique_seats : string[] = new Array;
  selected_seats: any[]
  FinalFare : any;
  passengerDetails: FormGroup;
  individualDetails:FormArray;

 

  searchForm = new FormGroup({
    Source: new FormControl('', [ Validators.required]), 
    Destination: new FormControl('',[Validators.required]),
    Day: new FormControl('',[Validators.required])
  }) 

  // passengerDetailFrom =new FormGroup({

  //  Name: new FormControl('',[ Validators.required]),
  //  Gender: new FormControl('',[ Validators.required]),
  //  Age: new FormControl('',[ Validators.required]),
  //   Email: new FormControl('',[ Validators.required]),
  //   ContactNo: new FormControl('',[ Validators.required])

  // })

 
  // contactDetailsForm = new FormGroup({
   
  // })

  seatForm= new FormGroup({

    seatno1: new FormControl(''),
    seatno2: new FormControl(''),
    seatno3: new FormControl(''),
    seatno4: new FormControl(''),
    seatno5: new FormControl(''),
    seatno6: new FormControl(''),
    seatno7: new FormControl(''),
    seatno8: new FormControl(''),
    seatno9: new FormControl(''),
    seatno10: new FormControl(''),
    seatno11: new FormControl(''),
    seatno12: new FormControl(''),
    seatno13: new FormControl(''),
    seatno14: new FormControl(''),
    seatno15: new FormControl(''),
    seatno16: new FormControl(''),
    seatno17: new FormControl(''),
    seatno18: new FormControl(''),
    seatno19: new FormControl(''),
    seatno20: new FormControl(''),
    seatno21: new FormControl(''),
    seatno22: new FormControl(''),
    seatno23: new FormControl(''),
    seatno24: new FormControl(''),

  })



  //buses = BusRouteDetails[];
  

  ngOnInit() {
    //this.crudservice.searchbus(Search).subscribe(data => {console.log(data)})
    this.passengerDetails = this.fb.group({
      ContactNo: '',
      Email:'',
      individualDetails: this.fb.array([this.CreateDetail()])

    })
  }
  CreateDetail(): FormGroup{
    return this.fb.group({
      Name:'',
      Gender:'',
      Age:''
    });
  }
  adddetails():void{
    this.individualDetails = this.passengerDetails.get('individualDetails') as FormArray;
    this.individualDetails.push(this.CreateDetail());
    console.log(this.individualDetails.value)
  }


  get Source()
  {
    return this.searchForm.get('Source');
  }

  get Destination()
  {
    return this.searchForm.get('Destination');
  }
  get Day()
  {
    return this.searchForm.get('Day')
  }

  get seatno1()
  {
    return this.seatForm.get('seatno1')
  }
  get seatno2()
  {
    return this.seatForm.get('seatno2')
  }
  get seatno3()
  {
    return this.seatForm.get('seatno3')
  }
  get seatno4()
  {
    return this.seatForm.get('seatno4')
  }
  get seatno5()
  {
    return this.seatForm.get('seatno5')
  }
  get seatno6()
  {
    return this.seatForm.get('seatno6')
  }
  get seatno7()
  {
    return this.seatForm.get('seatno7')
  }
  get seatno8()
  {
    return this.seatForm.get('seatno8')
  }
  get seatno9()
  {
    return this.seatForm.get('seatno9')
  }
  get seatno10()
  {
    return this.seatForm.get('seatno10')
  }
  get seatno11()
  {
    return this.seatForm.get('seatno11')
  }
  get seatno12()
  {
    return this.seatForm.get('seatno12')
  }
  get seatno13()
  {
    return this.seatForm.get('seatno13')
  }
  get seatno14()
  {
    return this.seatForm.get('seatno14')
  }
  get seatno15()
  {
    return this.seatForm.get('seatno15')
  }
  get seatno16()
  {
    return this.seatForm.get('seatno16')
  }
  get seatno17()
  {
    return this.seatForm.get('seatno17')
  }
  get seatno18()
  {
    return this.seatForm.get('seatno18')
  }
  get seatno19()
  {
    return this.seatForm.get('seatno19')
  }
  get seatno20()
  {
    return this.seatForm.get('seatno20')
  }
  get seatno21()
  {
    return this.seatForm.get('seatno21')
  }
  get seatno22()
  {
    return this.seatForm.get('seatno22')
  }
  get seatno23()
  {
    return this.seatForm.get('seatno23')
  }
  get seatno24()
  {
    return this.seatForm.get('seatno24')
  }
  
  
  
  


  onsearch()
  {
    console.log(this.searchForm.value);
    this.crudservice.searchbus(this.searchForm.value).subscribe((res:any) => {
      this.buses = res
      console.log(this.buses)

    })
    
    

  }
  onseatselect(BusId)
  {
    this.crudservice.seatavail(BusId).subscribe((res:any) => {
      this.seats =res
      console.log(this.seats)

    })
  }
  onarray()
  {
    
      if(this.seatForm.value.seatno1 === true)
      {
        this.selected_array.push('seatno1')
      }
      if(this.seatForm.value.seatno2 === true)
      {
        this.selected_array.push('seatno2')
      } 
      if(this.seatForm.value.seatno3 === true)
      {
        this.selected_array.push('seatno3')
      } 
      if(this.seatForm.value.seatno4 === true)
      {
        this.selected_array.push('seatno4')
      } 
      if(this.seatForm.value.seatno5 === true)
      {
        this.selected_array.push('seatno5')
      } 
      if(this.seatForm.value.seatno6 === true)
      {
        this.selected_array.push('seatno6')
      } 
      if(this.seatForm.value.seatno7 === true)
      {
        this.selected_array.push('seatno7')
      } 
      if(this.seatForm.value.seatno8 === true)
      {
        this.selected_array.push('seatno8')
      } 
      if(this.seatForm.value.seatno9 === true)
      {
        this.selected_array.push('seatno9')
      } 
      if(this.seatForm.value.seatno10 === true)
      {
        this.selected_array.push('seatno10')
      } 
      if(this.seatForm.value.seatno11 === true)
      {
        this.selected_array.push('seatno11')
      } 
      if(this.seatForm.value.seatno12 === true)
      {
        this.selected_array.push('seatno12')
      } 
      if(this.seatForm.value.seatno13 === true)
      {
        this.selected_array.push('seatno13')
      } 
      if(this.seatForm.value.seatno14 === true)
      {
        this.selected_array.push('seatno14')
      } 
      if(this.seatForm.value.seatno15 === true)
      {
        this.selected_array.push('seatno15')
      } 
      if(this.seatForm.value.seatno16 === true)
      {
        this.selected_array.push('seatno16')
      } 
      if(this.seatForm.value.seatno17 === true)
      {
        this.selected_array.push('seatno17')
      } 
      if(this.seatForm.value.seatno18 === true)
      {
        this.selected_array.push('seatno18')
      } 
      if(this.seatForm.value.seatno19 === true)
      {
        this.selected_array.push('seatno19')
      } 
      if(this.seatForm.value.seatno20 === true)
      {
        this.selected_array.push('seatno20')
      } 
      if(this.seatForm.value.seatno21 === true)
      {
        this.selected_array.push('seatno21')
      } 
      if(this.seatForm.value.seatno22 === true)
      {
        this.selected_array.push('seatno22')
      } 
      if(this.seatForm.value.seatno23 === true)
      {
        this.selected_array.push('seatno23')
      } 
      if(this.seatForm.value.seatno24 === true)
      {
        this.selected_array.push('seatno24')
      }
      
      this.unique_seats = this.selected_array.filter((item,i,ar)=>ar.indexOf(item)===i);
      console.log(this.unique_seats)
      //this.num = this.unique_seats.length;
      //this.FinalFare = this.buses.FarePerSeat * this.unique_seats.length;





  }

  onbooked()
  {
    console.log(this.passengerDetails.value)
  }

  }
  
  



export class Search{
  Source: string;
  Destination: string;
  Day: Date;
}



