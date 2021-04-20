import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {Rentalbusdetails} from './Models/rentalbusdetails';
import { Rentalbks } from './Models/rentalbks';
import { Addbuss } from './Models/addbuss';
import { Bookings } from './Models/bookings';


@Injectable({
  providedIn: 'root'
})
export class CrudAdminService {

  private apiServer = "http://localhost:65033/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  //view all added rental buses
  getAll(): Observable<Rentalbusdetails[]> 
  {
    return this.httpClient.get<Rentalbusdetails[]>(this.apiServer + '/RentalBusDetails/')
  }
  //create new rental bus
  create(rental): Observable<Rentalbusdetails> 
  {
    return this.httpClient.post<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/', JSON.stringify(rental), this.httpOptions)
  }

  // update(id, rental): Observable<Rentalbusdetails> 
  // {
  //   return this.httpClient.put<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/' + id, JSON.stringify(rental), this.httpOptions)
  // }

  // getById(id): Observable<Rentalbusdetails> 
  // {
  //   return this.httpClient.get<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/' + id)
  // }

  //delete rental bus
  deleterentalbus(id): Observable<Rentalbusdetails>
  {
    return this.httpClient.delete<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/' + id, this.httpOptions)
  }

  //view all rental bookings
  getAllRB(): Observable<Rentalbks[]> 
  {
    return this.httpClient.get<Rentalbks[]>(this.apiServer + '/RentalBusBookings/')
  }

  
  getAllBus(): Observable<Addbuss[]> 
  {
     return this.httpClient.get<Addbuss[]>(this.apiServer + '/BusRouteDetails/')
  }
  // getAllBusSchedule(): Observable<Addschedule[]> 
  // {
  //   return this.httpClient.get<Addschedule[]>(this.apiServer + '/BusDetails/')
  // }

  deleteBus(id): Observable<Addbuss>
  {
    return this.httpClient.delete<Addbuss>(this.apiServer + '/BusRouteDetails/' + id, this.httpOptions)
  }
  
  //addnew bus
  addbus(bus): Observable<any> 
  {
    return this.httpClient.post<any>(this.apiServer + '/BusDetails/', JSON.stringify(bus), this.httpOptions)
  }

  //get all bus bookings
  getBooking(): Observable<Bookings[]> 
  {
    return this.httpClient.get<Bookings[]>(this.apiServer + '/Bookings1/')
  }


  getFeedback(): Observable<any[]> 
  {
    return this.httpClient.get<any[]>(this.apiServer + '/Feedbacks/')
  }

}