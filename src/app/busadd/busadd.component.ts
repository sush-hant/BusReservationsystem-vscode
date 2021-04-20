import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormControlName, FormBuilder, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudAdminService } from '../crud-admin.service';
import { Addschedule } from '../Models/add-schedule';
@Component({
  selector: 'app-busadd',
  templateUrl: './busadd.component.html',
  styleUrls: ['./busadd.component.css']
})
export class BusaddComponent implements OnInit {
  Days:string;
  schedule: addschedule;

  constructor(public fb: FormBuilder,
    private router: Router,
    public crudadminService: CrudAdminService) { 
      this.form = this.fb.group({
        checkArray: this.fb.array([])
      })
    }

  addbusForm = new FormGroup({
    BusId:new FormControl(258),
    Source: new FormControl('',[Validators.required ,Validators.pattern("^[a-zA-Z]*$")]),
    Destination: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    Departuretime  : new FormControl('',[Validators.required,Validators.pattern("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$") ]),
    Arrivaltime  : new FormControl('',[Validators.required,Validators.pattern("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$")]),
    FarePerSeat: new FormControl('',[Validators.required ,Validators.pattern("^[0-9]*$")]),
  })
  // addscheduleForm = new FormGroup({
    
  //   Monday : new FormControl('',[Validators.required]),
  //   Tuesday : new FormControl('',[Validators.required]),
  //   Wednesday : new FormControl('',[Validators.required]),
  //   Thursday : new FormControl('',[Validators.required]),
  //   Friday : new FormControl('',[Validators.required]),
  //   Saturday : new FormControl('',[Validators.required]),
  //   Sunday : new FormControl('',[Validators.required])
  // })
  form: FormGroup;

  WeekData: Array<any> = [
    { name: 'Monday', value: 'Monday' },
    { name: 'Tuesday', value: 'Tuesday' },
    { name: 'Wednesday', value: 'Wednesday' },
    { name: 'Thursday', value: 'Thursday' },
    { name: 'Friday', value: 'Friday' },
    { name: 'Saturday', value: 'Saturday' },
    { name: 'Sunday', value: 'Sunday' }

  ];
  

  ngOnInit(): void {
    
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit()
  {
    console.log(this.addbusForm.value);
    console.log(this.form.value);
    
    this.crudadminService.addbus(this.addbusForm.value).subscribe(res=>{console.log('Bus Added')});
    alert("Added Successfully");
    
  } 

  get Source()
  {
    return this.addbusForm.get('Source');
  }
  get Destination()
  {
    return this.addbusForm.get('Destination');
  }
  get Departuretime()
  {
    return this.addbusForm.get('Departuretime');
  }
  get Arrivaltime()
  {
    return this.addbusForm.get('Arrivaltime');
  }
  get FarePerSeat()
  {
    return this.addbusForm.get('FarePerSeat');
  }
  
  // get Monday()
  // {
  //   return this.addscheduleForm.get('Monday');
  // }

  // get Tuesday()
  // {
  //   return this.addscheduleForm.get('Tuesday');
  // }

  // get Wednesday()
  // {
  //   return this.addscheduleForm.get('Wednesday');
  // }

  // get Thursday()
  // {
  //   return this.addscheduleForm.get('Thursday');
  // }

  // get Friday()
  // {
  //   return this.addscheduleForm.get('Friday');
  // }

  // get Saturday()
  // {
  //   return this.addscheduleForm.get('Saturday');
  // }

  // get Sunday()
  // {
  //   return this.addscheduleForm.get('Sunday');
  // }


}
export class addbus {
  BusId:number = 258;
  Source:string;
  Destination:string;
  DepartureTime:string;
  ArrivalTime:string;
  FarePerSeat:number;
 // scheduleTable: Addschedule[];
 Days: string[]
}

export class addschedule{
  BusId:number;
  Days:string;
}
