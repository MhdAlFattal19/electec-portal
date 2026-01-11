import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxToastrService } from './toastr.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService extends ErrorHandler {

  constructor(@Inject(Injector) private readonly injector: Injector) {
    super();
  }
  handleError(error: any): void {
    if (error.statusCode >= 500 && error.statusCode <= 599) {
      this.toastrService.error('Request Could Not Be Completed', { email: 'BonluckAdmin@gmail.com' });
    } else if (error.statusCode == 401 || error.statusCode == 403 || (error.toString() && error.toString().includes("403 OK"))) {

    } else if(error.statusCode == 400) {
      this.toastrService.error(error.error.messageDTOs[0].message);
    }
    super.handleError(error);
  }
  private get toastrService(): NgxToastrService {
    return this.injector.get(NgxToastrService);
  }
  private get authService(): AuthService {
    return this.injector.get(AuthService);
  }

}
