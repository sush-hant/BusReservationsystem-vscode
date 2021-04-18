import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hire-bus',
  templateUrl: './hire-bus.component.html',
  styleUrls: ['./hire-bus.component.css']
})
export class HireBusComponent implements OnInit {

  constructor() { }
  busForm = new FormGroup({
    StartDate: new FormControl('',[Validators.required]),
    EndDate: new FormControl('',[Validators.required]),
    pickup: new FormControl('', [Validators.required]), 
    driver: new FormControl('',[Validators.required]),

    
   })
  
  

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.busForm.value);
  }  
  get StartDate()
{
  return this.busForm.get('StartDate');
}

get EndDate()
{
  return this.busForm.get('EndDate');
}

get pickup()
{
  return this.busForm.get('pickup');
}
get driver()
{
  return this.busForm.get('driver');
}

}

export class bus {
  StartDate:string;
  EndDate:string;
  pickup:string;
  driver:string;

  

}
