import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIResponse } from '../models/shared-models';

@Injectable({
  providedIn: 'root'
})
export class HttpClientHelperService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string, activityName: string, lockScreenNeeded: boolean = true): Observable<T> {
    let httpHeaders = new HttpHeaders().append("activityName", activityName);
    if (!lockScreenNeeded)
      httpHeaders = httpHeaders.append("DontLockScreen", "1");
    return this.httpClient.get<any>(url, { headers: httpHeaders }).pipe(map((response) => {
      if (response.status && response.data)
        return <T>response.data;
      return <T>response;
    }));
  }

  public post<T>(url: string, body: any, activityName: string, lockScreenNeeded: boolean = true): Observable<T> {
    let httpHeaders = new HttpHeaders();
    if (!lockScreenNeeded)
      httpHeaders = httpHeaders.append("DontLockScreen", "1");
    return this.httpClient.post<any>(url, body, { headers: httpHeaders }).pipe(
      map((response) => {
        if (response.status)
          return <T>response;
        return <T>response;
      }), catchError((err, ca) => { throw err; }));
  }


  public postGrid<T>(url: string, body: any, activityName: string, lockScreenNeeded: boolean = true): Observable<T> {
    let httpHeaders = new HttpHeaders();
    if (!lockScreenNeeded)
      httpHeaders = httpHeaders.append("DontLockScreen", "1");
    return this.httpClient.post<any>(url, body, { headers: httpHeaders }).pipe(
      map((response) => {
        if (response.status)
          return <T>response;
        return <T>response;
      }), catchError((err, ca) => { throw err; }));
  }

  public postWithParams(url: string, body: any,  params): Observable<any> {
    return this.httpClient.post(url, body, params);
  }

  public postWithApiResponse(url: string, body: any, activityName: string, lockScreenNeeded: boolean = true, headersElements : { [key: string]: string } = {}): Observable<APIResponse> {
    let httpHeaders = new HttpHeaders();
    if (!lockScreenNeeded)
    Object.keys(headersElements).forEach(key=>{
      httpHeaders = httpHeaders.append(key, headersElements[key]);
    })
    return this.httpClient.post<APIResponse>(url, body, { headers: httpHeaders }).pipe(catchError((err, ca) => { throw err; }));
  }
}
