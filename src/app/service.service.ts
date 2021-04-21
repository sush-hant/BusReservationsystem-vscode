import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { UserDetail } from './Models/user-detail';
import {Search } from './Models/search'
import { BusRouteDetails } from './Models/bus-route-details';
import { Bookings } from './Models/bookings';
import { Rentalbusdetails} from './Models/rentalbusdetails'
import { Rentalbks } from './Models/rentalbks';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiServer = "http://localhost:65033/api";
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getallusers(): Observable<UserDetail[]>{
    return this.httpClient.get<UserDetail[]>(this.apiServer + '/userdetails').pipe(catchError(this.errorHandler));
  }
  getuserbyid(id): Observable<UserDetail>{
    return this.httpClient.get<UserDetail>(this.apiServer + '/userdetails?Email=' + id).pipe(catchError(this.errorHandler));
  }

  constructor(private httpClient: HttpClient) { }
  userdetails(userdetails): Observable<UserDetail>{
    return this.httpClient.post<UserDetail>(this.apiServer+'/userdetails',JSON.stringify(userdetails),this.httpOptions).pipe(catchError(this.errorHandler));
  }

  login(login): Observable<UserDetail>{
    var req = this.httpClient.post<UserDetail>(this.apiServer + '/login', JSON.stringify(login), this.httpOptions).pipe(catchError(this.errorHandler));
    console.log(req);
    return(req);
  }

  searchbus(search):Observable<BusRouteDetails[]>{
    var req = this.httpClient.post<BusRouteDetails[]>(this.apiServer + '/searchresult', JSON.stringify(search), this.httpOptions).pipe(catchError(this.errorHandler));
    return(req);
  }

  seatavail(Busid):Observable<any>{
    var req = this.httpClient.get<any>(this.apiServer+'/searchresult?BusId='+Busid).pipe(catchError(this.errorHandler));
    return(req);
  }
  getbookingdetailsbyid(Email):Observable<Bookings>{
    var req = this.httpClient.get<Bookings>(this.apiServer+ '/Bookings1?email=' + Email).pipe(catchError(this.errorHandler));
    return(req);
  }

  postbooking(booking):Observable<Bookings>{
    var req = this.httpClient.post<Bookings>(this.apiServer+ '/Bookings1', JSON.stringify(booking), this.httpOptions).pipe(catchError(this.errorHandler));
    return(req)
  }

  getrentalbus(PickupPoint):Observable<Rentalbusdetails[]>{
    var req = this.httpClient.get<Rentalbusdetails[]>(this.apiServer+ '/rentalbusdetails?pickUpPoint=' + PickupPoint).pipe(catchError(this.errorHandler));
    return req;
  }

  postrentalBooking(Booking):Observable<Rentalbks>{
    return this.httpClient.post<Rentalbks>(this.apiServer + '/RentalBusBookings', JSON.stringify(Booking), this.httpOptions).pipe(catchError(this.errorHandler));
  }
    //add feedback
    createFeedback(feedback): Observable<any> 
    {
      return this.httpClient.post<any>(this.apiServer + '/Feedbacks/', JSON.stringify(feedback), this.httpOptions).pipe(catchError(this.errorHandler));
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
