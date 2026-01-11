import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements.component';
import { PublicAnnouncementsComponent } from './public-announcements/public-announcements.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementsComponent,
    children: [
      {
        path: '',
        component: PublicAnnouncementsComponent
      },
      {
        path: 'View-List',
        component: SurveyListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncementRoutingModule { }
