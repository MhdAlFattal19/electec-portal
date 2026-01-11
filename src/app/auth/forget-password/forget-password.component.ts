import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
constructor(private router: Router){

  }
  email: string = '';

  requestReset() {
    console.log('Reset link requested for email:', this.email);
    // TODO: Call API to send reset email
  }

  onNavigateToLogin()

  {
    this.router.navigate(['/auth/login'])
  }
}
