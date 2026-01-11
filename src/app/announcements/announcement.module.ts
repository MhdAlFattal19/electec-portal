import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ThemeModule } from "../@theme/theme.module";
import { AnnouncementRoutingModule } from "./announcement-routing.module";
import { AnnouncementsComponent } from "./announcements.component";
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbRadioModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PublicAnnouncementsComponent } from "./public-announcements/public-announcements.component";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SurveyListComponent } from './survey-list/survey-list.component';

@NgModule({
  imports: [
    AnnouncementRoutingModule,
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
    ReactiveFormsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,   
    NbEvaIconsModule
  ],
  declarations: [
    AnnouncementsComponent,
    PublicAnnouncementsComponent,
    SurveyListComponent,
  ],
})

export class AnnouncementModule { }