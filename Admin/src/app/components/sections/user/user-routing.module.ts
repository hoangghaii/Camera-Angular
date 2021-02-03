import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationContentAComponent } from './configuration-content-a/configuration-content-a.component';
import { ConfigurationContentBComponent } from './configuration-content-b/configuration-content-b.component';
import { ConfigurationContentCComponent } from './configuration-content-c/configuration-content-c.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserComponent,
  // },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'config-1',
        component: ConfigurationContentAComponent,
      },
      {
        path: 'config-2',
        component: ConfigurationContentBComponent,
      },
      {
        path: 'config-3',
        component: ConfigurationContentCComponent,
      },
      {
        path: '',
        redirectTo: 'config-1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
