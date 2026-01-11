import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent } from "@nebular/auth";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { LoginRequest } from "../models/login-request.model";


@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbLoginComponent {
  loginRequest: LoginRequest;
  // currentUser: User;
  showPassword: boolean = false;

  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: {},
    cd: ChangeDetectorRef,
    router: Router,
    private loginService: AuthService
  ) {
    super(service, options, cd, router);
  }

  register() {
    this.loginRequest = {
      email: this.user.email,
      password: this.user.password,
    };
  }
    
  onNavigateToVerifyCode() {
    this.router.navigate(['auth/verify-code'])
    };


  }

