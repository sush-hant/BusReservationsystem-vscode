import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { UserDetail } from './user-detail';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiServer = "http://localhost:65033/api/";
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
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
}
