import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {
  constructor(private router: Router){

  }
 code: string[] = ['', '', '', '', '', ''];

  autoFocusNext(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value && index < this.code.length - 1) {
      const next = document.querySelector(`input[name='code${index + 1}']`) as HTMLElement;
      next?.focus();
    }
  }

  submitCode() {
    const finalCode = this.code.join('');
    console.log('Code entered:', finalCode);
    // Handle verification
  }

  resendCode() {
    console.log('Resend code requested.');
    // Handle resend logic
  }

  onNavigateToLogin()
  {
    this.router.navigate(['auth/login'])
  }
}
