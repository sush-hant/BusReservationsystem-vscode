import { Component, OnInit } from '@angular/core';
import { Addbuss } from '../Models/addbuss';
import { Addschedule } from '../Models/add-schedule';
import { CrudAdminService } from '../crud-admin.service';

@Component({
  selector: 'app-busmain',
  templateUrl: './busmain.component.html',
  styleUrls: ['./busmain.component.css']
})
export class BusmainComponent implements OnInit {
  buses:Addbuss[]=[];
  schedule:Addschedule[]=[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit(){
     this.crudadminService.getAllBus().subscribe((data: Addbuss[])=>{
     this.buses = data;
 })
  // this.crudadminService.getAllBusSchedule().subscribe((data: Addschedule[])=>{
  //   this.schedule = data;
  //})
  }

  // deleteBusSchedule(ScheduleId)
  // {
  //   this.crudadminService.delete(ScheduleId).subscribe();
  // }
   deleteBus(BusId)
   {
     this.crudadminService.deleteBus(BusId).subscribe();
     window.location.reload();
  }

}
