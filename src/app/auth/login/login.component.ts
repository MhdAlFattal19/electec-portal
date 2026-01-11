import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent } from "@nebular/auth";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { LoginRequest } from "../models/login-request.model";
// import { User } from "../../shared/models/shared-models";
// import { APIMessagesEnum, APIResponseEnum } from "../../shared/models/enums";
// import { NgxToastrService } from "../../shared/services/toastr.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbLoginComponent {
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

  login() {
    this.loginRequest = {
      email: this.user.email,
      password: this.user.password,
    };

    // this.loginService.logIn(this.loginRequest, "").subscribe((res) => {
    //   if (res.status == APIResponseEnum.Success && res.data != null) {
    //     this.currentUser = {
    //       accessToken: res.data.accessToken,
    //       fullName: res.data.fullName,
    //       permissions: res.data.permissions,
    //       refreshToken: res.data.refreshToken,
    //       balance: res.data.balance,
    //       currency: res.data.currency,
    //     };
    //     localStorage.setItem("current-user", JSON.stringify(this.currentUser));
    //     this.router.navigate(["/pages/dashboard"]);
    //   } else if (res.status == APIResponseEnum.Failure) {
    //     this.toastrService.manageApiMessages(res);
    //   }
    // });
  }

  goToDashboard(){
    this.router.navigate(["/pages"]);
  }
}
