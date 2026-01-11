import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs/operators'; 
import { environment } from "../../../environments/environment";
import { LoginRequest } from "../models/login-request.model";
import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
// import { APIResponse, User } from "../../shared/models/shared-models";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AuthService {

  // currentUser: User;

  constructor(private httpClient: HttpClient, private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  // get userAvailable(): boolean {
   
  //   this.currentUser = JSON.parse(localStorage.getItem('current-user'))
  //   return this.currentUser != null;
  // }

  // get user(): User {
  //   return this.currentUser;
  // }

  // isAuthenticated(): boolean {
  //   return this.userAvailable;
  // }

  // async getAuthenticationToken(): Promise<string> {
  //   if (this.isAuthenticated()) {
  //     return this.currentUser.accessToken;
  //   } else {
  //     const res = await this.getApplicationContextBearerToken();
  //     this.currentUser = {
  //       accessToken: res.data.accessToken,
  //       fullName: res.data.fullName,
  //       permissions: res.data.permissions,
  //       refreshToken: res.data.refreshToken,
  //       balance : res.data.balance,
  //       currency : res.data.currency
  //     }
  //     localStorage.clea();
  //     localStorage.setItem('current-user', JSON.stringify(this.currentUser));
  //     return this.currentUser.accessToken;
  //   }
  // }

  // getApplicationContextBearerToken(): Promise<any> {
  //   return this.getRefresToken().toPromise();
  // }

  getRefresToken() {
    // return this.post<APIResponse>(
    //   `${environment.baseUrl}/api/v1/Auth/GetToken `,
    //   { refreshToken: this.currentUser.refreshToken },
    //   ''
    // );

  }

  logIn(request: LoginRequest, permissionName: string) {
    // return this.post<APIResponse>(
    //   `${environment.baseUrl}/api/v1/Auth/Login `,
    //   request,
    //   permissionName
    // );
  }

  

  public post<T>(url: string, body: any, activityName: string, lockScreenNeeded: boolean = true): Observable<T> {
    let httpHeaders = new HttpHeaders();
    if (!lockScreenNeeded)
      httpHeaders = httpHeaders.append("DontLockScreen", "1");
    return this.httpClient.post<any>(url, body, { headers: httpHeaders }).pipe(
      map((response) => {
        return <T>response;
      }), catchError((err, ca) => { throw err; }));
  }
}
