import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { UserDetail } from './Models/user-detail';
import {Search } from './Models/search'
import { BusRouteDetails } from './Models/bus-route-details';

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
    return this.httpClient.get<UserDetail[]>(this.apiServer + '/userdetails')
  }
  getuserbyid(id): Observable<UserDetail>{
    return this.httpClient.get<UserDetail>(this.apiServer + '/userdetails?Email=' + id)
  }

  constructor(private httpClient: HttpClient) { }
  userdetails(userdetails): Observable<UserDetail>{
    return this.httpClient.post<UserDetail>(this.apiServer+'/userdetails',JSON.stringify(userdetails),this.httpOptions)
  }

  login(login): Observable<UserDetail>{
    var req = this.httpClient.post<UserDetail>(this.apiServer + '/login', JSON.stringify(login), this.httpOptions)
    console.log(req);
    return(req);
  }

  searchbus(search):Observable<BusRouteDetails[]>{
    var req = this.httpClient.post<BusRouteDetails[]>(this.apiServer + '/searchresult', JSON.stringify(search), this.httpOptions)
    return(req);
  }

  seatavail(Busid):Observable<any>{
    var req = this.httpClient.get<any>(this.apiServer+'/searchresult?BusId='+Busid)
    return(req);
  }

}
