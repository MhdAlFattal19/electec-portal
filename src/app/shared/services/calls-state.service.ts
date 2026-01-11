import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CallsStateService {
  isLoading: boolean = false;
  isPagedLocked = false;
  ongoingCalls = 0;

  constructor(private spinner: NgxSpinnerService) { }

  httpCallStarted() {
    if (!this.isLoading) {
      this.spinner.show(undefined,
        {
          
          type: 'line-scale-party',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.2)',
          color: '#fff',
          fullScreen: true
        });
    }

    this.isLoading = true;
    this.isPagedLocked = true;
    this.ongoingCalls = this.ongoingCalls + 1;
  }

  httpCallEnded() {
    this.ongoingCalls = this.ongoingCalls - 1;
    if (this.ongoingCalls == 0) {
      this.spinner.hide();
      this.isLoading = false;
      this.isPagedLocked = false;
    }
  }
}
