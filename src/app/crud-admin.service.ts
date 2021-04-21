import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {Rentalbusdetails} from './Models/rentalbusdetails';
import { Rentalbks } from './Models/rentalbks';
import { Addbuss } from './Models/addbuss';
import { Bookings } from './Models/bookings';
import { catchError } from 'rxjs/operators';



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
    return this.httpClient.get<Rentalbusdetails[]>(this.apiServer + '/RentalBusDetails/').pipe(catchError(this.errorHandler));
  }
  //create new rental bus
  create(rental): Observable<Rentalbusdetails> 
  {
    return this.httpClient.post<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/', JSON.stringify(rental), this.httpOptions).pipe(catchError(this.errorHandler));
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
    return this.httpClient.delete<Rentalbusdetails>(this.apiServer + '/RentalBusDetails/' + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //view all rental bookings
  getAllRB(): Observable<Rentalbks[]> 
  {
    return this.httpClient.get<Rentalbks[]>(this.apiServer + '/RentalBusBookings/').pipe(catchError(this.errorHandler));
  }

  
  getAllBus(): Observable<Addbuss[]> 
  {
     return this.httpClient.get<Addbuss[]>(this.apiServer + '/BusRouteDetails/').pipe(catchError(this.errorHandler));
  }
  // getAllBusSchedule(): Observable<Addschedule[]> 
  // {
  //   return this.httpClient.get<Addschedule[]>(this.apiServer + '/BusDetails/')
  // }

  deleteBus(id): Observable<Addbuss>
  {
    return this.httpClient.delete<Addbuss>(this.apiServer + '/BusRouteDetails/' + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }
  
  //addnew bus
  addbus(bus): Observable<any> 
  {
    return this.httpClient.post<any>(this.apiServer + '/BusDetails/', JSON.stringify(bus), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //get all bus bookings
  getBooking(): Observable<Bookings[]> 
  {
    return this.httpClient.get<Bookings[]>(this.apiServer + '/Bookings1/').pipe(catchError(this.errorHandler));
  }


  getFeedback(): Observable<any[]> 
  {
    return this.httpClient.get<any[]>(this.apiServer + '/Feedbacks/').pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}