import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { SharedModule } from '../shared/shared.module';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule,
   NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { NbAuthModule, NbLoginComponent } from '@nebular/auth';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    VerifyCodeComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    NbIconModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbIconModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbAuthModule,
  ]
})
export class AuthModule { }
