import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children:[
    {
      path: 'client',
      component: ClientComponent,
    }
  ]

}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const routedComponents = [
  ClientComponent
];
