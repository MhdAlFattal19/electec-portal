import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'users',
      loadChildren: () => import('./users/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'announcements-management',
      loadChildren: () => import('./announcementsMgt/announcement-mgt.module')
        .then(m => m.AnnouncementMgtModule),
    },
    {
      path: 'announcement-request',
      loadChildren: () => import('./announcement-request/announcement-request.module')
        .then(m => m.AnnouncementRequestModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
