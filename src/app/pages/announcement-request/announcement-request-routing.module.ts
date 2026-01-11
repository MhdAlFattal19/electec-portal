import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementRequestComponent } from './announcement-request.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [{
  path: '',
  component: AnnouncementRequestComponent,
  children:[
    {
      path: 'request',
      component: RequestComponent,
    } 

  ]

}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRequestRoutingModule { }


