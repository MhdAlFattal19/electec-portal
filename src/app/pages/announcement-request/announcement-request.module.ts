import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './components/request/request.component';
import { AnnouncementRequestRoutingModule } from './announcement-request-routing.module';
import { AnnouncementRequestComponent } from './announcement-request.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RequestComponent ,
    AnnouncementRequestComponent,

  ],
  imports: [
    CommonModule , 
    AnnouncementRequestRoutingModule ,
    CommonModule,
    NbLayoutModule,
    NbIconModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
  ]
})
export class AnnouncementRequestModule { }
