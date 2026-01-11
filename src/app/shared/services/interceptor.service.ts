import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxToastrService } from './toastr.service';
import { Observable } from 'rxjs';
import "rxjs/add/observable/fromPromise";
import { catchError, finalize, mergeMap, tap } from 'rxjs/operators';
import { CallsStateService } from './calls-state.service';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private callsStateService: CallsStateService,
    private authService: AuthService,
    private toastr: NgxToastrService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request != null && request.headers != null && request.headers.has('DoNotIntercept')) {

      request = request.clone({
        headers: request.headers.delete(
          'DoNotIntercept'
        )
      })
      //this.callsStateService.httpCallStarted();
      return next.handle(request).pipe(finalize(() => {
        //  this.callsStateService.httpCallEnded();
      }));
    } else {
      let lockScreen = true;
      return Observable.fromPromise(this.authService.getAuthenticationToken())
        .pipe(
          mergeMap(token => {
            if (request.headers.has('DontLockScreen')) {
              request = request.clone({ headers: request.headers.delete('DontLockScreen') });
              lockScreen = false;
            }
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
                LanguageCode: 'en',
                ClientChannel: 'admin'
              }
            });
            //http call started
            if (lockScreen)
              this.callsStateService.httpCallStarted();
            return next.handle(request).pipe(
              finalize(() => {
                //http call ended
                if (lockScreen)
                  this.callsStateService.httpCallEnded();
              }), tap(httpResult => {
                this.handleResponse(httpResult)
              }), catchError(
                (err) => {
                  this.handleResponse(err);
                  throw err
                }));
          })
        )
    }
  }

handleResponse(httpResult) {
  if (httpResult instanceof HttpResponse) {
    if (httpResult.status == 200 && httpResult.body.status && httpResult.body.status == -1) {
      this.toastr.manageApiMessages(httpResult.body);
      throw Error(httpResult.body.message);
    }
  }
  else if (httpResult instanceof HttpErrorResponse) {
    if (httpResult.status === 401) {
      //token expired or no token should redirect to login page
      // this.authService.loginRedirect('');
    }
    else if (httpResult.status === 403) {
      //should redirect to no access page
      //this.router.navigate(["/no-access"]);
      // this.authService.logout();
    }
    else if (httpResult.status < 200 || httpResult.status >= 300) {
      if (
        httpResult.error &&
        httpResult.error.messageDTOs &&
        httpResult.error.messageDTOs.length > 0
      ) {
        this.toastr.manageApiMessages(httpResult.error);
      } else {
        this.toastr.error("An error has occurred, please contact bonluck support");
      }
      throw Error(httpResult.error);
    }
  }
}

}
