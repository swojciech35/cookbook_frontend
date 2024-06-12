import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://cookbookapiw71257w71209.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }
  signup(userData: any) {
console.log(userData)
    return this.http.post(this.url + '/auth/register', {
      email: userData.email,
      password: userData.password
    }, {observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        console.log(result.status);
        return result.status;
      })
    );
  }
}
