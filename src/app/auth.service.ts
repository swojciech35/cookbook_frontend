import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://cookbookapiw71257w71209.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }

  signup(userData: any) {
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

  signIn(userData: any) {
    return this.http.post(this.url + '/auth/authenticate', {
      email: userData.email,
      password: userData.password
    }, {observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        if (result && result.status == 200) {
          sessionStorage.setItem("cookbookToken", result.body.token)
        }
        return result.status;
      })
    );
  }

  signOut() {
    sessionStorage.removeItem("cookbookToken")
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = sessionStorage.getItem('cookbookToken');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }
}
