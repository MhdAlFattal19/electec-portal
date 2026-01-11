import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementMgtComponent } from './announcemenMgt.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementMgtRoutingModule } from './announcementMgt-routing.module';
import { RouterModule } from '@angular/router';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';



@NgModule({
  declarations: [
    AnnouncementsComponent  , 
    AnnouncementMgtComponent ,
    AnnouncementDetailsComponent
  ],
  imports: [
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
    AnnouncementMgtRoutingModule ,
    
  ]
})
export class AnnouncementMgtModule { }
