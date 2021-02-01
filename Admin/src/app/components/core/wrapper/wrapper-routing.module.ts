import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';

import { AuthGuardService as AuthGuard } from 'src/app/services';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import(`../content/content.module`).then((m) => m.ContentModule),
        // canActivate: [AuthGuard],
      },
      {
        path: 'user',
        loadChildren: () =>
          import(`../../sections/user/user.module`).then((m) => m.UserModule),
      },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
