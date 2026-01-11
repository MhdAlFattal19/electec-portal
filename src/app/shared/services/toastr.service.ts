import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { APIMessagesEnum, APIResponseEnum } from '../models/enums';
import { APIResponse } from '../models/shared-models';

@Injectable({
  providedIn: 'root'
})
export class NgxToastrService {

  constructor(public toastr: ToastrService) { }


  manageApiMessages(apiResponse: APIResponse) {
    console.log(apiResponse)
    if (apiResponse && apiResponse.messageDTOs && apiResponse.messageDTOs.length > 0) {
      switch (apiResponse.status) {
        case APIResponseEnum.Success:
          this.success(apiResponse.messageDTOs[0].message)
          break;
        case APIResponseEnum.Failure:
          let messages = apiResponse.messageDTOs;
          messages.forEach(m => {
            switch (m.type) {

              case APIMessagesEnum.Business:
                this.handleWarningMessages(m.message)
                break;

              case APIMessagesEnum.Information:
                this.success(m.message)
                break;

              case APIMessagesEnum.Technical:
                this.errorMessage(m.message);
                break;

              default:
                break;
            }
          })
          break;
        case APIResponseEnum.Exception:
          this.errorMessage(apiResponse.messageDTOs[0].message)
          break;
        default:
          break
      }
    }
  }

  error(error: any, interpolateParams?: any) {
    let language = 'lang'
    let individualConfig = { messageClass: language == 'ar' ? 'toast-message-rtl' : 'toast-message-ltr' };

    if (typeof error === 'string' || error instanceof String) {
      console.log(error)
      this.toastr.error(error.toString(), null, individualConfig)
    }
    else if (error.error && typeof error.error === 'string' || error.error instanceof String) {
      console.log(2)
      this.toastr.error(error.error, null, individualConfig);
    }
    else if (error.error && error.error.length > 0 && error.error[0]) {
      console.log(3)
      this.toastr.error(error.error[0], null, individualConfig);
    }
    else if (error.error && error.error.errorMessage) {
      console.log(4)
      this.toastr.error(error.error.errorMessage, null, individualConfig);
    }
    else if (error.message) {
      console.log(5)
      this.toastr.error(error.message, null, individualConfig);
    }
    else if (error.errorMessage) {
      console.log(6)
      this.toastr.error(error.errorMessage, null, individualConfig);
    }
    else {
      console.log(7)
      this.toastr.error(error, null, individualConfig);
    }
  }

  private errorMessage(message: string) {
    let language = 'lang';
    let individualConfig = { messageClass: language == 'ar' ? 'toast-message-rtl' : 'toast-message-ltr' };
    this.toastr.error(message, null, individualConfig)
  }

  private warning(message: string) {
    let language = 'lang';
    let individualConfig = { messageClass: language == 'ar' ? 'toast-message-rtl' : 'toast-message-ltr' };
    this.toastr.warning(message, null, individualConfig)
  }

  info(message: string, interpolateParams?: any) {
    let language = 'lang';
    let individualConfig = { messageClass: language == 'ar' ? 'toast-message-rtl' : 'toast-message-ltr' };
    this.toastr.info(message, null, individualConfig)
  }

  private success(message: string) {
    let language = 'lang';
    let individualConfig = { messageClass: language == 'ar' ? 'toast-message-rtl' : 'toast-message-ltr' };
    this.toastr.success(message, null, individualConfig)
  }

  private handleWarningMessages(message: string) {
    let messages = message.split("|");
    messages.forEach(m => {
      m = m.trim();
      this.warning(m)
    })
  }

}
