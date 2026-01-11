import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { UserComponent } from './user.component';
import { ClientComponent } from './components/client/client.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbListModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalNumberPipe } from '../../shared/pipes/localNumberPipe';
const components = [
  UserComponent,
  ClientComponent,
];

@NgModule({
  declarations: [
    ...components, ...routedComponents,
  ],
  imports: [
    CommonModule,
    NbIconModule,
    SharedModule,
    NbTooltipModule,
    UserRoutingModule,
    NgxDatatableModule,
    NgSelectModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalNumberPipe
  ]
})
export class UserModule { }