import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnouncementMgtComponent } from './announcemenMgt.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';

const routes: Routes = [{
  path: '',
  component: AnnouncementMgtComponent,
  children:[
    {
      path: 'announcements',
      component: AnnouncementsComponent,
    } ,
        {
      path: 'announcement-details',
      component: AnnouncementDetailsComponent,
    }
  ]

}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementMgtRoutingModule { }

